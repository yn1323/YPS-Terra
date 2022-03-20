import { ArgsType, PickType } from '@nestjs/graphql'
import { RequestConditionArgs } from '@/models/RequestCondition'

@ArgsType()
export class GetRequestConditionArgs extends PickType(RequestConditionArgs, [
  'userId',
  'shopId',
] as const) {}

@ArgsType()
export class AddRequestConditionArgs extends RequestConditionArgs {}
