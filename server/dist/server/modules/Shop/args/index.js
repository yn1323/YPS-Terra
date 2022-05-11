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
exports.GetShopsArgs = exports.GetShopArgs = exports.CreateShopArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const Shop_1 = require("../../../models/Shop");
let CreateShopArgs = class CreateShopArgs extends (0, graphql_1.PickType)(Shop_1.ShopArgs, [
    'shopName',
    'openTime',
    'closeTime',
    'timeUnit',
    'submitFrequency',
    'useTimeCard',
]) {
};
__decorate([
    (0, graphql_1.Field)(type => [graphql_1.ID]),
    __metadata("design:type", String)
], CreateShopArgs.prototype, "userId", void 0);
CreateShopArgs = __decorate([
    (0, graphql_1.ArgsType)()
], CreateShopArgs);
exports.CreateShopArgs = CreateShopArgs;
let GetShopArgs = class GetShopArgs extends (0, graphql_1.PickType)(Shop_1.ShopArgs, ['shopId']) {
};
GetShopArgs = __decorate([
    (0, graphql_1.ArgsType)()
], GetShopArgs);
exports.GetShopArgs = GetShopArgs;
let GetShopsArgs = class GetShopsArgs {
};
__decorate([
    (0, graphql_1.Field)(type => [graphql_1.ID]),
    __metadata("design:type", Array)
], GetShopsArgs.prototype, "shopIds", void 0);
GetShopsArgs = __decorate([
    (0, graphql_1.ArgsType)()
], GetShopsArgs);
exports.GetShopsArgs = GetShopsArgs;
//# sourceMappingURL=index.js.map