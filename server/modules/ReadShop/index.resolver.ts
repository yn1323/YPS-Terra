import { UnauthorizedException } from '@nestjs/common'
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

  @Query(returns => Shop, { name: 'shop' })
  findShopByShopId(@Args() args: ReadShopArgs) {
    return this.ReadShopService.findOneByShopId(args)
  }
}
