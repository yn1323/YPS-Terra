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
exports.ShiftArgs = exports.Shift = void 0;
const graphql_1 = require("@nestjs/graphql");
let Shift = class Shift {
};
__decorate([
    (0, graphql_1.Field)(type => graphql_1.ID),
    __metadata("design:type", String)
], Shift.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(type => graphql_1.ID),
    __metadata("design:type", String)
], Shift.prototype, "shopId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Shift.prototype, "workFrom", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Shift.prototype, "workTo", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Shift.prototype, "breakFrom", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Shift.prototype, "breakTo", void 0);
Shift = __decorate([
    (0, graphql_1.ObjectType)()
], Shift);
exports.Shift = Shift;
let ShiftArgs = class ShiftArgs extends Shift {
};
ShiftArgs = __decorate([
    (0, graphql_1.ArgsType)()
], ShiftArgs);
exports.ShiftArgs = ShiftArgs;
//# sourceMappingURL=Shift.js.map