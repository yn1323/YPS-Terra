import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Request } from '@/models/Request'
import { GetRequestArgs, AddRequestArgs } from '@/modules/Request/args'
import { RequestService } from '@/modules/Request/index.service'

@Resolver(of => Request)
export class RequestResolver {
  constructor(private requestService: RequestService) {}

  @Query(returns => [Request], { name: 'shift' })
  getRequest(@Args() args: GetRequestArgs) {
    return this.requestService.getRequest(args)
  }
  @Mutation(returns => Request, { name: 'shift' })
  addRequest(@Args() args: AddRequestArgs) {
    return this.requestService.addRequest(args)
  }
}
