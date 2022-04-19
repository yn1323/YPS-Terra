import { ArgsType, Field, ID, PickType } from '@nestjs/graphql'
import { ShopArgs } from '@/models/Shop'

@ArgsType()
export class CreateShopArgs extends PickType(ShopArgs, [
  'shopName',
  'openTime',
  'closeTime',
  'timeUnit',
  'submitFrequency',
  'useTimeCard',
] as const) {}

@ArgsType()
export class GetShopArgs extends PickType(ShopArgs, ['shopId'] as const) {}

@ArgsType()
export class GetShopsArgs {
  @Field(type => [ID])
  shopIds: string[]
}
