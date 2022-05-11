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
exports.TimeCardService = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const common_2 = require("../../firebase/common");
const args_1 = require("./args");
let TimeCardService = class TimeCardService {
    async addTimeCard(args) {
        const result = await common_2.collections.timeCard
            .add(args)
            .catch(e => console.log(e));
        if (!result) {
            return new common_1.BadRequestException();
        }
        return args;
    }
    async getTimeCard(args) {
        let ret = [];
        const snapshot = await common_2.collections.timeCard
            .where('userId', '==', args.userId)
            .where('shopId', '==', args.shopId)
            .get()
            .catch(e => console.log(e));
        if (!snapshot) {
            return new common_1.BadRequestException();
        }
        snapshot.forEach(d => {
            const dd = d.data();
            ret = [
                ...ret,
                Object.assign(Object.assign({}, dd), { workFrom: dd.workFrom.toDate(), workTo: dd.workTo.toDate(), breakFrom: dd.breakFrom.toDate(), breakTo: dd.breakTo.toDate() }),
            ];
        });
        if (!ret.length) {
            return new common_1.NotFoundException();
        }
        return ret;
    }
};
__decorate([
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [args_1.AddTimeCardArgs]),
    __metadata("design:returntype", Promise)
], TimeCardService.prototype, "addTimeCard", null);
__decorate([
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [args_1.GetTimeCardArgs]),
    __metadata("design:returntype", Promise)
], TimeCardService.prototype, "getTimeCard", null);
TimeCardService = __decorate([
    (0, common_1.Injectable)()
], TimeCardService);
exports.TimeCardService = TimeCardService;
//# sourceMappingURL=index.service.js.map