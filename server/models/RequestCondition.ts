import { ArgsType, Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class RequestCondition {
  @Field(type => ID)
  shopId: string

  @Field(type => ID)
  userId: string

  @Field()
  dateFrom: Date

  @Field()
  dateTo: Date

  @Field()
  done: boolean
}

@ArgsType()
export class RequestConditionArgs extends RequestCondition {}
