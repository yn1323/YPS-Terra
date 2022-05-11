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
exports.OperationArgs = exports.Operation = void 0;
const graphql_1 = require("@nestjs/graphql");
let Operation = class Operation {
};
__decorate([
    (0, graphql_1.Field)(type => graphql_1.ID),
    __metadata("design:type", String)
], Operation.prototype, "operationId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Operation.prototype, "operationName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Operation.prototype, "icon", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Operation.prototype, "color", void 0);
Operation = __decorate([
    (0, graphql_1.ObjectType)()
], Operation);
exports.Operation = Operation;
let OperationArgs = class OperationArgs extends Operation {
};
OperationArgs = __decorate([
    (0, graphql_1.ArgsType)()
], OperationArgs);
exports.OperationArgs = OperationArgs;
//# sourceMappingURL=Operation.js.map