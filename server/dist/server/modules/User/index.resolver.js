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
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const User_1 = require("../../models/User");
const index_1 = require("./args/index");
const index_service_1 = require("./index.service");
const objectType_1 = require("./objectType");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    createUser(args) {
        return this.userService.createUser(args);
    }
    findOneByUserId(args) {
        return this.userService.findOneByUserId(args);
    }
    findOneByToken(args) {
        return this.userService.findOneByToken(args);
    }
    async registerAdminUserAndShop(args) {
        return this.userService.registerAdminUserAndShop(args);
    }
    async registerUser(args) {
        return this.userService.registerUser(args);
    }
    async getLoginInfo(args) {
        return this.userService.getLoginInfo(args);
    }
};
__decorate([
    (0, graphql_1.Mutation)(returns => User_1.User, { name: 'user' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [index_1.CreateUserArgs]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "createUser", null);
__decorate([
    (0, graphql_1.Query)(returns => User_1.User, { name: 'user' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [index_1.GetUserArgs]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "findOneByUserId", null);
__decorate([
    (0, graphql_1.Query)(returns => User_1.User, { name: 'userExists' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [index_1.GetUserByTokenArgs]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "findOneByToken", null);
__decorate([
    (0, graphql_1.Mutation)(returns => objectType_1.LoginInfo, {
        name: 'registerAdminUserAndShop',
    }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [index_1.RegisterAdminArgs]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "registerAdminUserAndShop", null);
__decorate([
    (0, graphql_1.Mutation)(returns => objectType_1.LoginInfo, { name: 'registerUser' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [index_1.RegisterUserArgs]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "registerUser", null);
__decorate([
    (0, graphql_1.Query)(returns => objectType_1.LoginInfo, { name: 'loginInfo' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [index_1.LoginInfoArgs]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getLoginInfo", null);
UserResolver = __decorate([
    (0, graphql_1.Resolver)(of => User_1.User),
    __metadata("design:paramtypes", [index_service_1.UserService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=index.resolver.js.map