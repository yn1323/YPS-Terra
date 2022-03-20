import { ArgsType, PickType } from '@nestjs/graphql'
import { ShiftArgs } from '@/models/Shift'

@ArgsType()
export class AddShiftArgs extends PickType(ShiftArgs, [
  'userId',
  'shopId',
  'workFrom',
  'workTo',
  'breakFrom',
  'breakTo',
] as const) {}

@ArgsType()
export class GetShiftArgs extends PickType(ShiftArgs, [
  'userId',
  'shopId',
] as const) {}
