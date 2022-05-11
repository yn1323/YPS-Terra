"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const auth_1 = require("../../firebase/auth");
const common_2 = require("../../firebase/common");
const structure_1 = require("../../helpers/structure");
const index_service_1 = require("../Organization/index.service");
const index_service_2 = require("../Shop/index.service");
let UserService = class UserService {
    constructor(shopService, origanizationService) {
        this.shopService = shopService;
        this.origanizationService = origanizationService;
    }
    createUserData(args) {
        return {
            userId: args.userId,
            userName: args.userName,
            avatar: '',
            memberOf: [args.shopId],
        };
    }
    async createUser(args) {
        const { userId } = args;
        const data = this.createUserData(args);
        const result = await common_2.collections.user
            .doc(userId)
            .create(Object.assign(Object.assign({}, data), { isDeleted: false }))
            .catch(e => console.log(e));
        if (!result) {
            return new common_1.BadRequestException();
        }
        return data;
    }
    async findOneByUserId(args) {
        const snapshot = await common_2.collections.user
            .doc(args.userId)
            .get()
            .catch(e => console.log(e));
        if (!snapshot) {
            return new common_1.BadRequestException();
        }
        if (!snapshot.exists) {
            return new common_1.NotFoundException();
        }
        return snapshot.data();
    }
    async findOneByToken(args) {
        const idToken = await (0, auth_1.getAuthFromToken)(args.token);
        if (!idToken) {
            return new common_1.UnauthorizedException();
        }
        return this.findOneByUserId({ userId: idToken.uid });
    }
    async registerAdminUserAndShop(args) {
        const userId = args.userId;
        const shopId = (0, common_2.getRandomId)();
        const organizationId = (0, common_2.getRandomId)();
        const userCollection = common_2.collections.user.doc(userId);
        const shopCollection = common_2.collections.shop.doc(shopId);
        const organizationCollection = common_2.collections.organization.doc(organizationId);
        await common_2.db
            .runTransaction(async (t) => {
            const [userDoc, shopDoc, organizationDoc] = await Promise.all([
                await t.get(userCollection),
                await t.get(shopCollection),
                await t.get(organizationCollection),
            ]);
            if (userDoc.exists || shopDoc.exists || organizationDoc.exists) {
                return new common_1.BadRequestException();
            }
            const userInfo = this.createUserData(Object.assign(Object.assign({}, args), { shopId }));
            const shopInfo = this.shopService.createShopData(Object.assign(Object.assign({}, args), { shopId }));
            const organizationInfo = this.origanizationService.createOrganizationData({
                organizationId,
                organizationName: args.shopName,
                organizationOwnerId: userId,
                shopId,
            });
            await Promise.all([
                await t.set(userCollection, userInfo),
                await t.set(shopCollection, shopInfo),
                await t.set(organizationCollection, organizationInfo),
            ]);
        })
            .catch(e => console.log(e));
        return this.getLoginInfo({ userId });
    }
    async registerUser(args) {
        const { userId, shopId } = args;
        const userCollection = common_2.collections.user.doc(userId);
        const shopCollection = common_2.collections.shop.doc(shopId);
        await common_2.db
            .runTransaction(async (t) => {
            const [userDoc, shopDoc] = await Promise.all([
                await t.get(userCollection),
                await t.get(shopCollection),
            ]);
            if (!shopDoc.exists) {
                return new common_1.NotFoundException();
            }
            const userInfo = this.createUserData(Object.assign(Object.assign({}, args), { shopId }));
            if (userDoc.exists) {
                const prevUserData = userDoc.data();
                const nextUserInfo = Object.assign(Object.assign({}, prevUserData), { memberOf: Array.from(new Set([...prevUserData.memberOf, shopId])) });
                await t.update(userCollection, nextUserInfo);
            }
            else {
                console.log('not exist');
                await t.set(userCollection, userInfo);
            }
        })
            .catch(e => console.log(e));
        return this.getLoginInfo({ userId });
    }
    async addMemberOf(args) {
        const { userId, shopId } = args;
        const userCollection = common_2.collections.user.doc(userId);
        const shopCollection = common_2.collections.shop.doc(shopId);
        const result = await common_2.db
            .runTransaction(async (t) => {
            const [userDoc, shopDoc] = await Promise.all([
                await t.get(userCollection),
                await t.get(shopCollection),
            ]);
            if (!shopDoc.exists || !userDoc.exists) {
                return new common_1.NotFoundException();
            }
            const { memberOf } = userDoc.data();
            const newMemberOf = Array.from(new Set([...memberOf, shopId]));
            await userCollection.update({ memberOf: newMemberOf });
            return newMemberOf;
        })
            .catch(e => console.log(e));
        return result;
    }
    async getLoginInfo({ userId }) {
        const userCollection = common_2.collections.user.doc(userId);
        const loginAllInfo = await common_2.db
            .runTransaction(async (t) => {
            const userDoc = await t.get(userCollection);
            if (!userDoc.exists) {
                return new common_1.NotFoundException();
            }
            const user = userDoc.data();
            const shopIds = user.memberOf;
            const [shops, organizations] = await Promise.all([
                await this.shopService.findShopsByShopIds({
                    shopIds,
                }),
                await this.origanizationService.findOrganizationsByShopIds({
                    shopIds,
                }),
            ]);
            const structure = (0, structure_1.organizationAndShopCombination)({
                userId,
                shops,
                organizations,
            });
            const names = (0, structure_1.getGroupNames)({ user, shops, organizations });
            return {
                user,
                shops,
                organizations,
                structure,
                names,
            };
        })
            .catch(e => console.log(e));
        return loginAllInfo;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [index_service_2.ShopService,
        index_service_1.OrganizationService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=index.service.js.map