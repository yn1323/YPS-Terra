import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { TimeCard } from '@/models/TimeCard'
import { GetTimeCardArgs, AddTimeCardArgs } from '@/modules/TimeCard/args'
import { TimeCardService } from '@/modules/TimeCard/index.service'

@Resolver(of => TimeCard)
export class TimeCardResolver {
  constructor(private timeCardService: TimeCardService) {}

  @Mutation(returns => TimeCard, { name: 'timeCard' })
  addTimeCard(@Args() args: AddTimeCardArgs) {
    return this.timeCardService.addTimeCard(args)
  }

  @Query(returns => [TimeCard], { name: 'timeCard' })
  getTimeCard(@Args() args: GetTimeCardArgs) {
    return this.timeCardService.getTimeCard(args)
  }
}
