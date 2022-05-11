"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("../../firebase/common");
let ShopService = class ShopService {
    constructor() {
        this.subscribes = {};
    }
    createShopData(args) {
        return {
            shopId: args.shopId,
            avatar: '',
            closedWeekday: [],
            shopOwnerIds: [args.userId],
            shopName: args.shopName,
            openTime: args.openTime,
            closeTime: args.closeTime,
            timeUnit: args.timeUnit,
            submitFrequency: args.submitFrequency,
            useTimeCard: args.useTimeCard,
        };
    }
    async createShop(args) {
        const shopId = (0, common_2.getRandomId)();
        const d = this.createShopData(Object.assign(Object.assign({}, args), { shopId }));
        const result = await common_2.collections.shop
            .doc(shopId)
            .create(d)
            .catch(e => console.log(e));
        if (!result) {
            return new common_1.BadRequestException();
        }
        return d;
    }
    async findOneByShopId({ shopId }) {
        const snapshot = await common_2.collections.shop
            .doc(shopId)
            .get()
            .catch(e => console.log(e));
        if (!snapshot) {
            return new common_1.BadRequestException();
        }
        if (!snapshot.exists) {
            return new common_1.NotFoundException();
        }
        const ret = snapshot.data();
        return Object.assign(Object.assign({}, ret), { openTime: ret.openTime.toDate(), closeTime: ret.closeTime.toDate() });
    }
    async findShopsByShopIds({ shopIds }) {
        const shops = await Promise.all(shopIds.map(async (shopId) => (await common_2.collections.shop.doc(shopId).get()).data()));
        return shops.map(shop => (Object.assign(Object.assign({}, shop), { openTime: shop.openTime.toDate(), closeTime: shop.closeTime.toDate() })));
    }
    subscribeOneShopFromFirestore({ shopId }, pubSub) {
        if (this.subscribes[shopId]) {
            this.subscribes[shopId]();
        }
        const subscribe = common_2.collections.shop.doc(shopId).onSnapshot(docSnapshot => {
            const d = docSnapshot.data();
            pubSub.publish('shop', Object.assign(Object.assign({}, d), { closeTime: d.closeTime.toDate(), openTime: d.openTime.toDate() }));
        });
        this.subscribes[shopId] = subscribe;
        return {
            shopId,
        };
    }
};
ShopService = __decorate([
    (0, common_1.Injectable)()
], ShopService);
exports.ShopService = ShopService;
//# sourceMappingURL=index.service.js.map