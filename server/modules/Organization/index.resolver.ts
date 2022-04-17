import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Organization } from '@/models/Organization'
import {
  CreateOrganizationArgs,
  GetOrganizationArgs,
  GetOrganizationByShopIdArgs,
} from '@/modules/Organization/args/index'
import { OrganizationService } from '@/modules/Organization/index.service'

@Resolver(of => Organization)
export class OrganizationResolver {
  constructor(private organizationService: OrganizationService) {}

  @Mutation(returns => Organization, { name: 'organization' })
  createOrganization(@Args() args: CreateOrganizationArgs) {
    return this.organizationService.createOrganization(args)
  }

  @Query(returns => Organization, { name: 'organization' })
  findShopByOrganizationId(@Args() args: GetOrganizationArgs) {
    return this.organizationService.findOneByOrganizationId(args)
  }

  @Query(returns => [Organization], { name: 'findOrganizationsByShopId' })
  findOrganizationsByShopId(@Args() args: GetOrganizationByShopIdArgs) {
    return this.organizationService.findOrganizationsByShopId(args)
  }
}
