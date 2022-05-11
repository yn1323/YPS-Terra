"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthFromToken = void 0;
const auth_1 = require("firebase-admin/auth");
const getAuthFromToken = async (authorization) => {
    return await (0, auth_1.getAuth)()
        .verifyIdToken(authorization)
        .catch(e => console.log(e));
};
exports.getAuthFromToken = getAuthFromToken;
//# sourceMappingURL=auth.js.map