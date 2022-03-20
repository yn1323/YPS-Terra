import { ArgsType, PickType } from '@nestjs/graphql'
import { ShopArgs } from '@/models/Shop'
@ArgsType()
export class CreateOperationsArgs extends PickType(ShopArgs, [
  'shopId',
] as const) {}

@ArgsType()
export class GetOperationsArgs extends PickType(ShopArgs, [
  'shopId',
] as const) {}
