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
exports.OperationResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const Operation_1 = require("../../models/Operation");
const args_1 = require("./args");
const index_service_1 = require("./index.service");
let OperationResolver = class OperationResolver {
    constructor(operationService) {
        this.operationService = operationService;
    }
    createOperations(args) {
        return this.operationService.createOperations(args);
    }
    getOperations(args) {
        return this.operationService.findAllByShopId(args);
    }
};
__decorate([
    (0, graphql_1.Mutation)(returns => [Operation_1.Operation], { name: 'operation' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [args_1.CreateOperationsArgs]),
    __metadata("design:returntype", void 0)
], OperationResolver.prototype, "createOperations", null);
__decorate([
    (0, graphql_1.Query)(returns => [Operation_1.Operation], { name: 'operations' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [args_1.GetOperationsArgs]),
    __metadata("design:returntype", void 0)
], OperationResolver.prototype, "getOperations", null);
OperationResolver = __decorate([
    (0, graphql_1.Resolver)(of => Operation_1.Operation),
    __metadata("design:paramtypes", [index_service_1.OperationService])
], OperationResolver);
exports.OperationResolver = OperationResolver;
//# sourceMappingURL=index.resolver.js.map