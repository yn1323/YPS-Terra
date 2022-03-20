import { ArgsType, Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Organization {
  @Field(type => ID)
  organizationId: string

  @Field()
  organizationName: string

  @Field(type => [ID])
  shopIds: string[]

  @Field(type => [ID])
  organizationOwnerIds: string[]
}

@ArgsType()
export class OrganizationArgs extends Organization {}
