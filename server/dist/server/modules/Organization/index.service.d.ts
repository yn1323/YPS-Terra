import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Organization } from '@/models/Organization';
import { CreateOrganizationArgs, GetOrganizationArgs, GetOrganizationsByShopIdsArgs } from '@/modules/Organization/args';
export declare class OrganizationService {
    createOrganizationData(args: CreateOrganizationArgs & {
        organizationId: string;
    }): {
        organizationId: string;
        organizationName: string;
        organizationOwnerIds: string[];
        shopIds: string[];
    };
    createOrganization(args: CreateOrganizationArgs): Promise<BadRequestException | {
        organizationId: string;
        organizationName: string;
        shopIds: string[];
        organizationOwnerIds: string[];
    }>;
    findOneByOrganizationId(args: GetOrganizationArgs): Promise<BadRequestException | NotFoundException | Organization>;
    findOrganizationsByShopIds({ shopIds }: GetOrganizationsByShopIdsArgs): Promise<Organization[]>;
}
