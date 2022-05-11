"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRequestConditionArgs = exports.AddRequestConditionArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const RequestCondition_1 = require("../../../models/RequestCondition");
let AddRequestConditionArgs = class AddRequestConditionArgs extends (0, graphql_1.PickType)(RequestCondition_1.RequestConditionArgs, [
    'userId',
    'shopId',
    'dateFrom',
    'dateTo',
    'done',
]) {
};
AddRequestConditionArgs = __decorate([
    (0, graphql_1.ArgsType)()
], AddRequestConditionArgs);
exports.AddRequestConditionArgs = AddRequestConditionArgs;
let GetRequestConditionArgs = class GetRequestConditionArgs extends (0, graphql_1.PickType)(RequestCondition_1.RequestConditionArgs, [
    'userId',
    'shopId',
]) {
};
GetRequestConditionArgs = __decorate([
    (0, graphql_1.ArgsType)()
], GetRequestConditionArgs);
exports.GetRequestConditionArgs = GetRequestConditionArgs;
//# sourceMappingURL=index.js.map