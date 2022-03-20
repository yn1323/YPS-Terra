import { ArgsType, PickType } from '@nestjs/graphql'
import { RequestArgs } from '@/models/Request'

@ArgsType()
export class AddRequestArgs extends PickType(RequestArgs, [
  'userId',
  'shopId',
  'workFrom',
  'workTo',
  'breakFrom',
  'breakTo',
] as const) {}

@ArgsType()
export class GetRequestArgs extends PickType(RequestArgs, [
  'userId',
  'shopId',
] as const) {}
