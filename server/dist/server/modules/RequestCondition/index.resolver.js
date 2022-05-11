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
exports.RequestConditionResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const RequestCondition_1 = require("../../models/RequestCondition");
const args_1 = require("./args");
const index_service_1 = require("./index.service");
let RequestConditionResolver = class RequestConditionResolver {
    constructor(requestConditionService) {
        this.requestConditionService = requestConditionService;
    }
    addRequestCondition(args) {
        return this.requestConditionService.addRequestCondition(args);
    }
    getRequestCondition(args) {
        return this.requestConditionService.getRequestCondition(args);
    }
};
__decorate([
    (0, graphql_1.Mutation)(returns => RequestCondition_1.RequestCondition, { name: 'requestCondition' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [args_1.AddRequestConditionArgs]),
    __metadata("design:returntype", void 0)
], RequestConditionResolver.prototype, "addRequestCondition", null);
__decorate([
    (0, graphql_1.Query)(returns => [RequestCondition_1.RequestCondition], { name: 'requestCondition' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [args_1.GetRequestConditionArgs]),
    __metadata("design:returntype", void 0)
], RequestConditionResolver.prototype, "getRequestCondition", null);
RequestConditionResolver = __decorate([
    (0, graphql_1.Resolver)(of => RequestCondition_1.RequestCondition),
    __metadata("design:paramtypes", [index_service_1.RequestConditionService])
], RequestConditionResolver);
exports.RequestConditionResolver = RequestConditionResolver;
//# sourceMappingURL=index.resolver.js.map