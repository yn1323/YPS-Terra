import { ArgsType, Field, ID, PickType } from '@nestjs/graphql'
import { OrganizationArgs } from '@/models/Organization'
import { ShopArgs } from '@/models/Shop'

@ArgsType()
export class GetOrganizationArgs extends PickType(OrganizationArgs, [
  'organizationId',
] as const) {}

@ArgsType()
export class CreateOrganizationArgs extends PickType(OrganizationArgs, [
  'organizationName',
] as const) {
  @Field(type => ID)
  shopId: string

  @Field(type => ID)
  organizationOwnerId: string
}

@ArgsType()
export class GetOrganizationByShopIdArgs extends PickType(ShopArgs, [
  'shopId',
] as const) {}
