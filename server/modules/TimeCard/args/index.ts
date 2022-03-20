import { ArgsType, PickType } from '@nestjs/graphql'
import { TimeCardArgs } from '@/models/TimeCard'

@ArgsType()
export class GetTimeCardArgs extends PickType(TimeCardArgs, [
  'userId',
  'shopId',
] as const) {}

@ArgsType()
export class AddTimeCardArgs extends TimeCardArgs {}
