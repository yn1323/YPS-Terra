import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Announce } from '@/models/announce'
import { GetAnnounceArgs, AddAnnounceArgs } from '@/modules/Announce/args'
import { AnnounceService } from '@/modules/Announce/index.service'

@Resolver(of => Announce)
export class AnnounceResolver {
  constructor(private announceService: AnnounceService) {}

  @Query(returns => [Announce], { name: 'announce' })
  getAnnounce(@Args() args: GetAnnounceArgs) {
    return this.announceService.getAnnounce(args)
  }
  @Mutation(returns => Announce, { name: 'announce' })
  addAnnounce(@Args() args: AddAnnounceArgs) {
    return this.announceService.addAnnounce(args)
  }
}
