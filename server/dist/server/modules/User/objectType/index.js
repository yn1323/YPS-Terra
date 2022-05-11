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
exports.LoginInfo = void 0;
const graphql_1 = require("@nestjs/graphql");
const Organization_1 = require("../../../models/Organization");
const Shop_1 = require("../../../models/Shop");
const StructureCombination_1 = require("../../../models/StructureCombination");
const User_1 = require("../../../models/User");
let NameObject = class NameObject {
};
__decorate([
    (0, graphql_1.Field)(type => graphql_1.ID),
    __metadata("design:type", String)
], NameObject.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(type => String),
    __metadata("design:type", String)
], NameObject.prototype, "name", void 0);
NameObject = __decorate([
    (0, graphql_1.ObjectType)()
], NameObject);
let Names = class Names {
};
__decorate([
    (0, graphql_1.Field)(type => [NameObject]),
    __metadata("design:type", NameObject)
], Names.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(type => [NameObject]),
    __metadata("design:type", NameObject)
], Names.prototype, "shop", void 0);
__decorate([
    (0, graphql_1.Field)(type => [NameObject]),
    __metadata("design:type", NameObject)
], Names.prototype, "organization", void 0);
Names = __decorate([
    (0, graphql_1.ObjectType)()
], Names);
let LoginInfo = class LoginInfo {
};
__decorate([
    (0, graphql_1.Field)(type => User_1.User),
    __metadata("design:type", User_1.User)
], LoginInfo.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(type => [Shop_1.Shop]),
    __metadata("design:type", Array)
], LoginInfo.prototype, "shops", void 0);
__decorate([
    (0, graphql_1.Field)(type => [Organization_1.Organization]),
    __metadata("design:type", Array)
], LoginInfo.prototype, "organizations", void 0);
__decorate([
    (0, graphql_1.Field)(type => [StructureCombination_1.StructureCombination]),
    __metadata("design:type", StructureCombination_1.StructureCombination)
], LoginInfo.prototype, "structure", void 0);
__decorate([
    (0, graphql_1.Field)(type => Names),
    __metadata("design:type", Names)
], LoginInfo.prototype, "names", void 0);
LoginInfo = __decorate([
    (0, graphql_1.ObjectType)()
], LoginInfo);
exports.LoginInfo = LoginInfo;
//# sourceMappingURL=index.js.map