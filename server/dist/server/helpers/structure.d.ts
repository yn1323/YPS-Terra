import { Organization } from '@/models/Organization';
import { Shop } from '@/models/Shop';
import { StructureCombination } from '@/models/StructureCombination';
import { User } from '@/models/User';
declare type OrganizationAndShopCombination = {
    userId: string;
    shops: Shop[];
    organizations: Organization[];
};
export declare const organizationAndShopCombination: ({ userId, shops, organizations, }: OrganizationAndShopCombination) => StructureCombination[];
declare type GetGroupNamesArgs = {
    user: User;
    shops: Shop[];
    organizations: Organization[];
};
export declare const getGroupNames: ({ user, shops, organizations, }: GetGroupNamesArgs) => {
    user: {
        id: string;
        name: string;
    }[];
    shop: {
        id: string;
        name: string;
    }[];
    organization: {
        id: string;
        name: string;
    }[];
};
export {};
