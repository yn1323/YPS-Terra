"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomId = exports.firebaseInit = exports.db = exports.collections = void 0;
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
exports.collections = {
    organization: null,
    shop: null,
    user: null,
    operation: null,
    requestCondition: null,
    request: null,
    shift: null,
    timeCard: null,
    temporaryClosed: null,
    announce: null,
};
const firebaseInit = () => {
    (0, app_1.initializeApp)({
        credential: (0, app_1.cert)({
            projectId: process.env.project_id,
            clientEmail: process.env.client_email,
            privateKey: process.env.private_key,
        }),
    });
    exports.db = (0, firestore_1.getFirestore)();
    Object.keys(exports.collections).forEach(collectionName => (exports.collections[collectionName] = exports.db.collection(collectionName)));
};
exports.firebaseInit = firebaseInit;
const getRandomId = () => exports.db.collection('any').doc().id;
exports.getRandomId = getRandomId;
//# sourceMappingURL=common.js.map