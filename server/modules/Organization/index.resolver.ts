import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Organization } from '@/models/Organization'
import {
  CreateOrganizationArgs,
  GetOrganizationArgs,
} from '@/modules/Organization/args/index'
import { OrganizationService } from '@/modules/Organization/index.service'

@Resolver(of => Organization)
export class OrganizationResolver {
  constructor(private organizationService: OrganizationService) {}

  @Mutation(returns => Organization, { name: 'organization' })
  createShop(@Args() args: CreateOrganizationArgs) {
    return this.organizationService.createOrganization(args)
  }
  @Query(returns => Organization, { name: 'organization' })
  findShopByShopId(@Args() args: GetOrganizationArgs) {
    return this.organizationService.findOneByOrganizationId(args)
  }
}
