import { ArgsType, PickType } from '@nestjs/graphql'
import { ShiftArgs } from '@/models/Shift'

@ArgsType()
export class GetShiftArgs extends PickType(ShiftArgs, [
  'userId',
  'shopId',
] as const) {}

@ArgsType()
export class AddShiftArgs extends ShiftArgs {}
