"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTimeCardArgs = exports.AddTimeCardArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const TimeCard_1 = require("../../../models/TimeCard");
let AddTimeCardArgs = class AddTimeCardArgs extends (0, graphql_1.PickType)(TimeCard_1.TimeCardArgs, [
    'userId',
    'shopId',
    'workFrom',
    'workTo',
    'breakFrom',
    'breakTo',
]) {
};
AddTimeCardArgs = __decorate([
    (0, graphql_1.ArgsType)()
], AddTimeCardArgs);
exports.AddTimeCardArgs = AddTimeCardArgs;
let GetTimeCardArgs = class GetTimeCardArgs extends (0, graphql_1.PickType)(TimeCard_1.TimeCardArgs, [
    'userId',
    'shopId',
]) {
};
GetTimeCardArgs = __decorate([
    (0, graphql_1.ArgsType)()
], GetTimeCardArgs);
exports.GetTimeCardArgs = GetTimeCardArgs;
//# sourceMappingURL=index.js.map