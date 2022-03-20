import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Shift } from '@/models/Shift'
import { GetShiftArgs, AddShiftArgs } from '@/modules/Shift/args'
import { ShiftService } from '@/modules/Shift/index.service'

@Resolver(of => Shift)
export class ShiftResolver {
  constructor(private shiftService: ShiftService) {}

  @Mutation(returns => Shift, { name: 'shift' })
  addShift(@Args() args: AddShiftArgs) {
    return this.shiftService.addShift(args)
  }
  @Query(returns => [Shift], { name: 'shift' })
  getShift(@Args() args: GetShiftArgs) {
    return this.shiftService.getShift(args)
  }
}
