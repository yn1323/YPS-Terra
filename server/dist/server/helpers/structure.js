"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGroupNames = exports.organizationAndShopCombination = void 0;
const organizationAndShopCombination = ({ userId, shops, organizations, }) => {
    const ret = [];
    const shopIdsInShops = shops.map(({ shopId }) => shopId);
    organizations.forEach(({ shopIds, organizationId }) => {
        shopIds.forEach(shopId => {
            if (shopIdsInShops.includes(shopId)) {
                ret.push({
                    organizationId,
                    shopId,
                    userId,
                });
            }
        });
    });
    return ret;
};
exports.organizationAndShopCombination = organizationAndShopCombination;
const getGroupNames = ({ user, shops, organizations, }) => {
    return {
        user: [{ id: user.userId, name: user.userName }],
        shop: shops.map(({ shopId, shopName }) => ({ id: shopId, name: shopName })),
        organization: organizations.map(({ organizationId, organizationName }) => ({
            id: organizationId,
            name: organizationName,
        })),
    };
};
exports.getGroupNames = getGroupNames;
//# sourceMappingURL=structure.js.map