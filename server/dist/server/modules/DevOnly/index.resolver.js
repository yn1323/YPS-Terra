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
exports.DevOnlyResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const env_1 = require("../../helpers/env");
const DevOnly_1 = require("../../models/DevOnly");
const index_service_1 = require("./index.service");
let DevOnlyResolver = class DevOnlyResolver {
    constructor(DevOnlyService) {
        this.DevOnlyService = DevOnlyService;
    }
    deleteAllCollections() {
        if ((0, env_1.env)().env === 'production') {
            return { succeeded: false };
        }
        return this.DevOnlyService.deleteAllCollections();
    }
};
__decorate([
    (0, graphql_1.Query)(returns => DevOnly_1.DevOnly, { name: 'deleteAllCollections' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DevOnlyResolver.prototype, "deleteAllCollections", null);
DevOnlyResolver = __decorate([
    (0, graphql_1.Resolver)(of => DevOnly_1.DevOnly),
    __metadata("design:paramtypes", [index_service_1.DevOnlyService])
], DevOnlyResolver);
exports.DevOnlyResolver = DevOnlyResolver;
//# sourceMappingURL=index.resolver.js.map