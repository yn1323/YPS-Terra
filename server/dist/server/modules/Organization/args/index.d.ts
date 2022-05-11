import { OrganizationArgs } from '@/models/Organization';
declare const GetOrganizationArgs_base: import("@nestjs/common").Type<Pick<OrganizationArgs, "organizationId">>;
export declare class GetOrganizationArgs extends GetOrganizationArgs_base {
}
declare const CreateOrganizationArgs_base: import("@nestjs/common").Type<Pick<OrganizationArgs, "organizationName">>;
export declare class CreateOrganizationArgs extends CreateOrganizationArgs_base {
    shopId: string;
    organizationOwnerId: string;
}
export declare class GetOrganizationsByShopIdsArgs {
    shopIds: string[];
}
export {};
