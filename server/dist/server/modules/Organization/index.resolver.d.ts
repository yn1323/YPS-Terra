import { Organization } from '@/models/Organization';
import { CreateOrganizationArgs, GetOrganizationArgs, GetOrganizationsByShopIdsArgs } from '@/modules/Organization/args/index';
import { OrganizationService } from '@/modules/Organization/index.service';
export declare class OrganizationResolver {
    private organizationService;
    constructor(organizationService: OrganizationService);
    createOrganization(args: CreateOrganizationArgs): Promise<import("@nestjs/common").BadRequestException | {
        organizationId: string;
        organizationName: string;
        shopIds: string[];
        organizationOwnerIds: string[];
    }>;
    findShopByOrganizationId(args: GetOrganizationArgs): Promise<import("@nestjs/common").BadRequestException | import("@nestjs/common").NotFoundException | Organization>;
    findOrganizationsByShopIds(args: GetOrganizationsByShopIdsArgs): Promise<Organization[]>;
}
