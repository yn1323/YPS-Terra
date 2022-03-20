import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { RequestCondition } from '@/models/RequestCondition'
import {
  GetRequestConditionArgs,
  AddRequestConditionArgs,
} from '@/modules/RequestCondition/args'
import { RequestConditionService } from '@/modules/RequestCondition/index.service'

@Resolver(of => RequestCondition)
export class RequestConditionResolver {
  constructor(private requestConditionService: RequestConditionService) {}

  @Query(returns => [RequestCondition], { name: 'requestCondition' })
  getRequestCondition(@Args() args: GetRequestConditionArgs) {
    return this.requestConditionService.getRequestCondition(args)
  }
  @Mutation(returns => RequestCondition, { name: 'requestCondition' })
  addRequestCondition(@Args() args: AddRequestConditionArgs) {
    return this.requestConditionService.addRequestCondition(args)
  }
}
