import { ArgsType, Field, ID } from '@nestjs/graphql'
import { ShiftSubmitFrequency, ShiftTimeUnit } from '@/constants/validations'

@ArgsType()
export class CreateShopArgs {
  @Field()
  shopName: string

  @Field()
  openTime: Date

  @Field()
  closeTime: Date

  @Field()
  timeUnit: ShiftTimeUnit

  @Field()
  submitFrequency: ShiftSubmitFrequency

  @Field()
  useTimeCard: boolean
}

@ArgsType()
export class GetShopArgs {
  @Field(type => ID)
  shopId: string
}
