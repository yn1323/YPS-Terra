import { ArgsType, Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Shift {
  @Field(type => ID)
  userId: string

  @Field(type => ID)
  shopId: string

  @Field()
  workFrom: Date

  @Field()
  workTo: Date

  @Field()
  breakFrom: Date

  @Field()
  breakTo: Date
}

@ArgsType()
export class ShiftArgs extends Shift {}
