import { ArgsType, Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class TemporaryClosed {
  @Field(type => ID)
  organizationId: string

  @Field(type => ID)
  shopId: string

  @Field()
  date: Date
}

@ArgsType()
export class TemporaryClosedArgs extends TemporaryClosed {}
