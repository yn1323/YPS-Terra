import { ArgsType, PickType } from '@nestjs/graphql'
import { RequestArgs } from '@/models/Request'

@ArgsType()
export class GetRequestArgs extends PickType(RequestArgs, [
  'userId',
  'shopId',
] as const) {}

@ArgsType()
export class AddRequestArgs extends RequestArgs {}
