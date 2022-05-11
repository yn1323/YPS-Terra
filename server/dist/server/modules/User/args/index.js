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
exports.LoginInfoArgs = exports.RegisterUserArgs = exports.RegisterAdminArgs = exports.GetUserByTokenArgs = exports.GetUserArgs = exports.CreateUserArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const Shop_1 = require("../../../models/Shop");
const User_1 = require("../../../models/User");
let CreateUserArgs = class CreateUserArgs extends (0, graphql_1.PickType)(User_1.UserArgs, [
    'userName',
    'userId',
]) {
};
__decorate([
    (0, graphql_1.Field)(type => graphql_1.ID),
    __metadata("design:type", String)
], CreateUserArgs.prototype, "shopId", void 0);
CreateUserArgs = __decorate([
    (0, graphql_1.ArgsType)()
], CreateUserArgs);
exports.CreateUserArgs = CreateUserArgs;
let GetUserArgs = class GetUserArgs extends (0, graphql_1.PickType)(User_1.UserArgs, ['userId']) {
};
GetUserArgs = __decorate([
    (0, graphql_1.ArgsType)()
], GetUserArgs);
exports.GetUserArgs = GetUserArgs;
let GetUserByTokenArgs = class GetUserByTokenArgs {
};
__decorate([
    (0, graphql_1.Field)(type => graphql_1.ID),
    __metadata("design:type", String)
], GetUserByTokenArgs.prototype, "token", void 0);
GetUserByTokenArgs = __decorate([
    (0, graphql_1.ArgsType)()
], GetUserByTokenArgs);
exports.GetUserByTokenArgs = GetUserByTokenArgs;
let _RegisterAdminArgsUser = class _RegisterAdminArgsUser extends (0, graphql_1.PickType)(User_1.UserArgs, [
    'userId',
    'userName',
]) {
};
_RegisterAdminArgsUser = __decorate([
    (0, graphql_1.ArgsType)()
], _RegisterAdminArgsUser);
let _RegisterAdminArgsShop = class _RegisterAdminArgsShop extends (0, graphql_1.PickType)(Shop_1.ShopArgs, [
    'shopName',
    'openTime',
    'closeTime',
    'timeUnit',
    'submitFrequency',
    'useTimeCard',
]) {
};
_RegisterAdminArgsShop = __decorate([
    (0, graphql_1.ArgsType)()
], _RegisterAdminArgsShop);
let RegisterAdminArgs = class RegisterAdminArgs extends (0, graphql_1.IntersectionType)(_RegisterAdminArgsShop, _RegisterAdminArgsUser) {
};
RegisterAdminArgs = __decorate([
    (0, graphql_1.ArgsType)()
], RegisterAdminArgs);
exports.RegisterAdminArgs = RegisterAdminArgs;
let _RegisterUserArgsUser = class _RegisterUserArgsUser extends (0, graphql_1.PickType)(User_1.UserArgs, [
    'userId',
    'userName',
]) {
};
_RegisterUserArgsUser = __decorate([
    (0, graphql_1.ArgsType)()
], _RegisterUserArgsUser);
let _RegisterUserArgsShop = class _RegisterUserArgsShop extends (0, graphql_1.PickType)(Shop_1.ShopArgs, ['shopId']) {
};
_RegisterUserArgsShop = __decorate([
    (0, graphql_1.ArgsType)()
], _RegisterUserArgsShop);
let RegisterUserArgs = class RegisterUserArgs extends (0, graphql_1.IntersectionType)(_RegisterUserArgsUser, _RegisterUserArgsShop) {
};
RegisterUserArgs = __decorate([
    (0, graphql_1.ArgsType)()
], RegisterUserArgs);
exports.RegisterUserArgs = RegisterUserArgs;
let LoginInfoArgs = class LoginInfoArgs extends (0, graphql_1.PickType)(User_1.UserArgs, ['userId']) {
};
LoginInfoArgs = __decorate([
    (0, graphql_1.ArgsType)()
], LoginInfoArgs);
exports.LoginInfoArgs = LoginInfoArgs;
//# sourceMappingURL=index.js.map