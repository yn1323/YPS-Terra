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
exports.TimeCardResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const TimeCard_1 = require("../../models/TimeCard");
const args_1 = require("./args");
const index_service_1 = require("./index.service");
let TimeCardResolver = class TimeCardResolver {
    constructor(timeCardService) {
        this.timeCardService = timeCardService;
    }
    addTimeCard(args) {
        return this.timeCardService.addTimeCard(args);
    }
    getTimeCard(args) {
        return this.timeCardService.getTimeCard(args);
    }
};
__decorate([
    (0, graphql_1.Mutation)(returns => TimeCard_1.TimeCard, { name: 'timeCard' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [args_1.AddTimeCardArgs]),
    __metadata("design:returntype", void 0)
], TimeCardResolver.prototype, "addTimeCard", null);
__decorate([
    (0, graphql_1.Query)(returns => [TimeCard_1.TimeCard], { name: 'timeCard' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [args_1.GetTimeCardArgs]),
    __metadata("design:returntype", void 0)
], TimeCardResolver.prototype, "getTimeCard", null);
TimeCardResolver = __decorate([
    (0, graphql_1.Resolver)(of => TimeCard_1.TimeCard),
    __metadata("design:paramtypes", [index_service_1.TimeCardService])
], TimeCardResolver);
exports.TimeCardResolver = TimeCardResolver;
//# sourceMappingURL=index.resolver.js.map