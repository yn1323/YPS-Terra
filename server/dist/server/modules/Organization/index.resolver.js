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
exports.OrganizationResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const Organization_1 = require("../../models/Organization");
const index_1 = require("./args/index");
const index_service_1 = require("./index.service");
let OrganizationResolver = class OrganizationResolver {
    constructor(organizationService) {
        this.organizationService = organizationService;
    }
    createOrganization(args) {
        return this.organizationService.createOrganization(args);
    }
    findShopByOrganizationId(args) {
        return this.organizationService.findOneByOrganizationId(args);
    }
    findOrganizationsByShopIds(args) {
        return this.organizationService.findOrganizationsByShopIds(args);
    }
};
__decorate([
    (0, graphql_1.Mutation)(returns => Organization_1.Organization, { name: 'organization' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [index_1.CreateOrganizationArgs]),
    __metadata("design:returntype", void 0)
], OrganizationResolver.prototype, "createOrganization", null);
__decorate([
    (0, graphql_1.Query)(returns => Organization_1.Organization, { name: 'organization' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [index_1.GetOrganizationArgs]),
    __metadata("design:returntype", void 0)
], OrganizationResolver.prototype, "findShopByOrganizationId", null);
__decorate([
    (0, graphql_1.Query)(returns => [Organization_1.Organization], { name: 'findOrganizationsByShopIds' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [index_1.GetOrganizationsByShopIdsArgs]),
    __metadata("design:returntype", void 0)
], OrganizationResolver.prototype, "findOrganizationsByShopIds", null);
OrganizationResolver = __decorate([
    (0, graphql_1.Resolver)(of => Organization_1.Organization),
    __metadata("design:paramtypes", [index_service_1.OrganizationService])
], OrganizationResolver);
exports.OrganizationResolver = OrganizationResolver;
//# sourceMappingURL=index.resolver.js.map