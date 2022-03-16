import { Field, ObjectType } from '@nestjs/graphql'
// import type {
//   ShiftSubmitFrequency,
//   ShiftTimeUnit,
// } from '@/constants/validations'

@ObjectType()
export class RegisterShop {
  @Field({ description: 'shopId' })
  shopId: string

  @Field({ defaultValue: false })
  succeeded: boolean

  @Field()
  openTime: Date

  @Field()
  closeTime: Date

  // @Field()
  // timeUnit: ShiftTimeUnit

  // @Field()
  // submitFrequency: ShiftSubmitFrequency

  // @Field()
  // useTimeCard: boolean
}
