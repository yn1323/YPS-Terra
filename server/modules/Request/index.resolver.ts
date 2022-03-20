import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Request } from '@/models/Request'
import { GetRequestArgs, AddRequestArgs } from '@/modules/Request/args'
import { RequestService } from '@/modules/Request/index.service'

@Resolver(of => Request)
export class RequestResolver {
  constructor(private requestService: RequestService) {}

  @Mutation(returns => Request, { name: 'request' })
  addRequest(@Args() args: AddRequestArgs) {
    return this.requestService.addRequest(args)
  }

  @Query(returns => [Request], { name: 'request' })
  getRequest(@Args() args: GetRequestArgs) {
    return this.requestService.getRequest(args)
  }
}
