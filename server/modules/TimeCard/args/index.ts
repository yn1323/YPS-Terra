import { ArgsType, PickType } from '@nestjs/graphql'
import { TimeCardArgs } from '@/models/TimeCard'

@ArgsType()
export class AddTimeCardArgs extends PickType(TimeCardArgs, [
  'userId',
  'shopId',
  'workFrom',
  'workTo',
  'breakFrom',
  'breakTo',
] as const) {}

@ArgsType()
export class GetTimeCardArgs extends PickType(TimeCardArgs, [
  'userId',
  'shopId',
] as const) {}
