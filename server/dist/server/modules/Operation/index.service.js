"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("../../firebase/common");
let OperationService = class OperationService {
    constructor() {
        this.defaultOperations = [
            { operationName: '業務1', icon: 'home', color: '#f00' },
            { operationName: '業務2', icon: 'home', color: '#0f0' },
            { operationName: '業務3', icon: 'home', color: '#00f' },
        ];
    }
    async createOperations(args) {
        let ret = [];
        const target = common_2.collections.operation
            .doc(args.shopId)
            .collection('operation');
        for (const { operationName, color, icon } of this.defaultOperations) {
            const operationId = (0, common_2.getRandomId)();
            const d = {
                operationId,
                operationName,
                color,
                icon,
            };
            const result = await target
                .doc(operationId)
                .create(d)
                .catch(e => console.log(e));
            if (!result) {
                return new common_1.BadRequestException();
            }
            ret = [...ret, d];
        }
        return ret;
    }
    async findAllByShopId(args) {
        let ret = [];
        const snapshot = await common_2.collections.operation
            .doc(args.shopId)
            .collection('operation')
            .get()
            .catch(e => console.log(e));
        if (!snapshot) {
            return new common_1.BadRequestException();
        }
        snapshot.forEach(d => {
            ret = [...ret, d.data()];
        });
        if (!ret.length) {
            return new common_1.NotFoundException();
        }
        return ret;
    }
};
OperationService = __decorate([
    (0, common_1.Injectable)()
], OperationService);
exports.OperationService = OperationService;
//# sourceMappingURL=index.service.js.map