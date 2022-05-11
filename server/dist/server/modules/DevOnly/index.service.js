"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevOnlyService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("../../firebase/common");
let DevOnlyService = class DevOnlyService {
    async deleteAllCollections() {
        const deleteCollection = (db, collectionRef, batchSize) => {
            const query = collectionRef.orderBy('__name__').limit(batchSize);
            return new Promise((resolve, reject) => {
                deleteQueryBatch(db, query, batchSize, resolve, reject);
            });
        };
        const deleteQueryBatch = (db, query, batchSize, resolve, reject) => {
            query
                .get()
                .then(snapshot => {
                if (snapshot.size == 0) {
                    return 0;
                }
                const batch = db.batch();
                snapshot.docs.forEach(doc => {
                    batch.delete(doc.ref);
                });
                return batch.commit().then(() => {
                    return snapshot.size;
                });
            })
                .then(numDeleted => {
                if (numDeleted == 0) {
                    resolve();
                    return;
                }
                process.nextTick(() => {
                    deleteQueryBatch(db, query, batchSize, resolve, reject);
                });
            })
                .catch(reject);
        };
        Object.keys(common_2.collections).forEach(collectionName => {
            const colRef = common_2.db.collection(collectionName);
            deleteCollection(common_2.db, colRef, 500);
        });
        return { succeeded: true };
    }
};
DevOnlyService = __decorate([
    (0, common_1.Injectable)()
], DevOnlyService);
exports.DevOnlyService = DevOnlyService;
//# sourceMappingURL=index.service.js.map