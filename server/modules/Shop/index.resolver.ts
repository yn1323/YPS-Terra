import { Args, Resolver, Query, Mutation, Subscription } from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'
import { Shop } from '@/models/Shop'
import { CreateShopArgs, GetShopArgs } from '@/modules/Shop/args'
import { ShopService } from '@/modules/Shop/index.service'

@Resolver(of => Shop)
export class ShopResolver {
  private pubSub: PubSub
  constructor(private shopService: ShopService) {
    this.pubSub = new PubSub()
  }

  @Mutation(returns => Shop, { name: 'shop' })
  createShop(@Args() args: CreateShopArgs) {
    return this.shopService.createShop(args)
  }
  @Query(returns => Shop, { name: 'shop' })
  findShopByShopId(@Args() args: GetShopArgs) {
    return this.shopService.findOneByShopId(args)
  }

  @Subscription(returns => Shop, {
    resolve: (payload: ShopResolver, _) => payload,
    name: 'shop',
  })
  subscribeOneShopByShopId(@Args() args: GetShopArgs) {
    this.shopService.subscribeOneShopFromFirestore(args, this.pubSub)
    // TODO:  キー名が一意なので不具合が起きそう
    return this.pubSub.asyncIterator('shop')
  }
}
