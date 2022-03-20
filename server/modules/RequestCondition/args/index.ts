import { ArgsType, PickType } from '@nestjs/graphql'
import { RequestConditionArgs } from '@/models/RequestCondition'

@ArgsType()
export class AddRequestConditionArgs extends PickType(RequestConditionArgs, [
  'userId',
  'shopId',
  'dateFrom',
  'dateTo',
  'done',
] as const) {}

@ArgsType()
export class GetRequestConditionArgs extends PickType(RequestConditionArgs, [
  'userId',
  'shopId',
] as const) {}
