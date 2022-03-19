import { Field, ObjectType, Int, ID } from '@nestjs/graphql'
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
}
