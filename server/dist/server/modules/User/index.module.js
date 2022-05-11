"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const index_service_1 = require("../Organization/index.service");
const index_service_2 = require("../Shop/index.service");
const index_resolver_1 = require("./index.resolver");
const index_service_3 = require("./index.service");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        providers: [index_service_3.UserService, index_resolver_1.UserResolver, index_service_2.ShopService, index_service_1.OrganizationService],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=index.module.js.map