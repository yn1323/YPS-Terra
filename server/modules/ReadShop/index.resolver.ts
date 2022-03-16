import { Args, ID, Field, Query, Resolver, ArgsType } from '@nestjs/graphql'
import { Shop } from '@/models/Shop'
import { ReadShopService } from '@/modules/ReadShop/index.service'

@ArgsType()
export class ReadShopArgs {
  @Field(type => ID)
  shopId: string
}

@Resolver(of => Shop)
export class ReadShopResolver {
  constructor(private ReadShopService: ReadShopService) {}

  @Query(type => Shop, { name: 'findShopByShopId' })
  findShopByShopId(@Args() args: ReadShopArgs) {
    return this.ReadShopService.findOneByShopId(args)
  }
}
