"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("../../firebase/common");
let OrganizationService = class OrganizationService {
    createOrganizationData(args) {
        return {
            organizationId: args.organizationId,
            organizationName: args.organizationName,
            organizationOwnerIds: [args.organizationOwnerId],
            shopIds: [args.shopId],
        };
    }
    async createOrganization(args) {
        const organizationId = (0, common_2.getRandomId)();
        const result = await common_2.collections.organization
            .doc(organizationId)
            .create(this.createOrganizationData(Object.assign(Object.assign({}, args), { organizationId })))
            .catch(e => console.log(e));
        if (!result) {
            return new common_1.BadRequestException();
        }
        return {
            organizationId,
            organizationName: args.organizationName,
            shopIds: [args.shopId],
            organizationOwnerIds: [args.organizationOwnerId],
        };
    }
    async findOneByOrganizationId(args) {
        const snapshot = await common_2.collections.organization
            .doc(args.organizationId)
            .get()
            .catch(e => console.log(e));
        if (!snapshot) {
            return new common_1.BadRequestException();
        }
        if (!snapshot.exists) {
            return new common_1.NotFoundException();
        }
        const ret = snapshot.data();
        return ret;
    }
    async findOrganizationsByShopIds({ shopIds }) {
        const snapshot = await Promise.all(shopIds.map(async (shopId) => await common_2.collections.organization
            .where('shopIds', 'array-contains', shopId)
            .get()));
        const organizations = [];
        snapshot.forEach(a => a.forEach(b => organizations.push(b.data())));
        return organizations;
    }
};
OrganizationService = __decorate([
    (0, common_1.Injectable)()
], OrganizationService);
exports.OrganizationService = OrganizationService;
//# sourceMappingURL=index.service.js.map