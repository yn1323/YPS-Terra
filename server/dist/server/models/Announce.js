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
exports.AnnounceArgs = exports.Announce = void 0;
const graphql_1 = require("@nestjs/graphql");
let Announce = class Announce {
};
__decorate([
    (0, graphql_1.Field)(type => graphql_1.ID),
    __metadata("design:type", String)
], Announce.prototype, "organizationId", void 0);
__decorate([
    (0, graphql_1.Field)(type => graphql_1.ID),
    __metadata("design:type", String)
], Announce.prototype, "shopId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Announce.prototype, "announceDateFrom", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Announce.prototype, "announceDateTo", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Announce.prototype, "message", void 0);
Announce = __decorate([
    (0, graphql_1.ObjectType)()
], Announce);
exports.Announce = Announce;
let AnnounceArgs = class AnnounceArgs extends Announce {
};
AnnounceArgs = __decorate([
    (0, graphql_1.ArgsType)()
], AnnounceArgs);
exports.AnnounceArgs = AnnounceArgs;
//# sourceMappingURL=Announce.js.map