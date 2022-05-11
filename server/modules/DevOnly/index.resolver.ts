import { Query, Resolver } from '@nestjs/graphql'
import { env } from '@/helpers/env'
import { DevOnly } from '@/models/DevOnly'
import { DevOnlyService } from '@/modules/DevOnly/index.service'

@Resolver(of => DevOnly)
export class DevOnlyResolver {
  constructor(private DevOnlyService: DevOnlyService) {}
  @Query(returns => DevOnly, { name: 'deleteAllCollections' })
  deleteAllCollections() {
    if (env().env === 'production') {
      return { succeeded: false }
    }

    return this.DevOnlyService.deleteAllCollections()
  }
}
