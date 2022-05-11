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
exports.UserArgs = exports.User = void 0;
const graphql_1 = require("@nestjs/graphql");
let User = class User {
};
__decorate([
    (0, graphql_1.Field)(type => graphql_1.ID),
    __metadata("design:type", String)
], User.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    (0, graphql_1.Field)(type => [graphql_1.ID]),
    __metadata("design:type", Array)
], User.prototype, "memberOf", void 0);
User = __decorate([
    (0, graphql_1.ObjectType)()
], User);
exports.User = User;
let UserArgs = class UserArgs extends User {
};
UserArgs = __decorate([
    (0, graphql_1.ArgsType)()
], UserArgs);
exports.UserArgs = UserArgs;
//# sourceMappingURL=User.js.map