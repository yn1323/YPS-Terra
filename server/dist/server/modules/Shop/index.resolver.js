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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const Shop_1 = require("../../models/Shop");
const args_1 = require("./args");
const index_service_1 = require("./index.service");
let ShopResolver = class ShopResolver {
    constructor(shopService) {
        this.shopService = shopService;
        this.pubSub = new graphql_subscriptions_1.PubSub();
    }
    createShop(args) {
        return this.shopService.createShop(args);
    }
    findShopByShopId(args) {
        return this.shopService.findOneByShopId(args);
    }
    findShopsByShopIds(args) {
        return this.shopService.findShopsByShopIds(args);
    }
    subscribeOneShopByShopId(args) {
        this.shopService.subscribeOneShopFromFirestore(args, this.pubSub);
        return this.pubSub.asyncIterator('shop');
    }
};
__decorate([
    (0, graphql_1.Mutation)(returns => Shop_1.Shop, { name: 'shop' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [args_1.CreateShopArgs]),
    __metadata("design:returntype", void 0)
], ShopResolver.prototype, "createShop", null);
__decorate([
    (0, graphql_1.Query)(returns => Shop_1.Shop, { name: 'shop' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [args_1.GetShopArgs]),
    __metadata("design:returntype", void 0)
], ShopResolver.prototype, "findShopByShopId", null);
__decorate([
    (0, graphql_1.Query)(returns => [Shop_1.Shop], { name: 'shops' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [args_1.GetShopsArgs]),
    __metadata("design:returntype", void 0)
], ShopResolver.prototype, "findShopsByShopIds", null);
__decorate([
    (0, graphql_1.Subscription)(returns => Shop_1.Shop, {
        resolve: (payload, _) => payload,
        name: 'shop',
    }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [args_1.GetShopArgs]),
    __metadata("design:returntype", void 0)
], ShopResolver.prototype, "subscribeOneShopByShopId", null);
ShopResolver = __decorate([
    (0, graphql_1.Resolver)(of => Shop_1.Shop),
    __metadata("design:paramtypes", [index_service_1.ShopService])
], ShopResolver);
exports.ShopResolver = ShopResolver;
//# sourceMappingURL=index.resolver.js.map