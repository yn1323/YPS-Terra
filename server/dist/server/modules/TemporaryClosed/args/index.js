"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTemporaryClosedArgs = exports.AddTemporaryClosedArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const TemporaryClosed_1 = require("../../../models/TemporaryClosed");
let AddTemporaryClosedArgs = class AddTemporaryClosedArgs extends (0, graphql_1.PickType)(TemporaryClosed_1.TemporaryClosedArgs, [
    'organizationId',
    'shopId',
    'date',
]) {
};
AddTemporaryClosedArgs = __decorate([
    (0, graphql_1.ArgsType)()
], AddTemporaryClosedArgs);
exports.AddTemporaryClosedArgs = AddTemporaryClosedArgs;
let GetTemporaryClosedArgs = class GetTemporaryClosedArgs extends (0, graphql_1.PickType)(TemporaryClosed_1.TemporaryClosedArgs, [
    'organizationId',
    'shopId',
]) {
};
GetTemporaryClosedArgs = __decorate([
    (0, graphql_1.ArgsType)()
], GetTemporaryClosedArgs);
exports.GetTemporaryClosedArgs = GetTemporaryClosedArgs;
//# sourceMappingURL=index.js.map