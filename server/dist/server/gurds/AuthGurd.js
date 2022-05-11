"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGurd = void 0;
const common_1 = require("@nestjs/common");
const auth_1 = require("../firebase/auth");
const env_1 = require("../helpers/env");
let AuthGurd = class AuthGurd {
    canActivate(context) {
        return new Promise(async (resolve, _) => {
            const isDevelopment = (0, env_1.env)().env === 'development';
            const { req } = context.getArgs()[2];
            const isGraphiQL = !req;
            if (isDevelopment && isGraphiQL) {
                return resolve(true);
            }
            const { authorization } = req.headers;
            const userAgent = context.getArgs()[2].req.headers['user-agent'];
            if (isDevelopment && userAgent && userAgent.includes('Postman')) {
                return resolve(true);
            }
            if (!authorization) {
                return resolve(false);
            }
            const decoded = await (0, auth_1.getAuthFromToken)(authorization);
            return resolve(!!decoded);
        });
    }
};
AuthGurd = __decorate([
    (0, common_1.Injectable)()
], AuthGurd);
exports.AuthGurd = AuthGurd;
//# sourceMappingURL=AuthGurd.js.map