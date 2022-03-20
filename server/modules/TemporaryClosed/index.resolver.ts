import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { TemporaryClosed } from '@/models/TemporaryClosed'
import {
  GetTemporaryClosedArgs,
  AddTemporaryClosedArgs,
} from '@/modules/TemporaryClosed/args'
import { TemporaryClosedService } from '@/modules/TemporaryClosed/index.service'

@Resolver(of => TemporaryClosed)
export class TemporaryClosedResolver {
  constructor(private temporaryClosedService: TemporaryClosedService) {}

  @Query(returns => [TemporaryClosed], { name: 'temporaryClosed' })
  getTempraryClosed(@Args() args: GetTemporaryClosedArgs) {
    return this.temporaryClosedService.getTempraryClosed(args)
  }

  @Mutation(returns => TemporaryClosed, { name: 'temporaryClosed' })
  addTemporaryClosed(@Args() args: AddTemporaryClosedArgs) {
    return this.temporaryClosedService.addTemporaryClosed(args)
  }
}
