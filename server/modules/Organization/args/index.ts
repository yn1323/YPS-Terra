import { ArgsType, Field, ID, PickType } from '@nestjs/graphql'
import { OrganizationArgs } from '@/models/Organization'

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
