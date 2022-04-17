import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class StructureCombination {
  @Field(type => ID)
  organizationId: string

  @Field(type => ID)
  shopId: string

  @Field(type => ID)
  userId: string
}
