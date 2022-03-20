import { Field, ObjectType, Int, ID, ArgsType } from '@nestjs/graphql'
import type {
  ShiftSubmitFrequency,
  ShiftTimeUnit,
} from '@/constants/validations'

@ObjectType()
export class Shop {
  @Field(type => ID)
  shopId: string

  @Field()
  shopName: string

  @Field()
  openTime: Date

  @Field()
  closeTime: Date

  @Field(type => Int)
  timeUnit: ShiftTimeUnit

  @Field()
  submitFrequency: ShiftSubmitFrequency

  @Field()
  useTimeCard: boolean

  @Field()
  avatar: string

  @Field(type => [Int])
  closedWeekday: number[]

  @Field(type => [ID])
  shopOwnerIds: string[]
}

@ArgsType()
export class ShopArgs extends Shop {}
