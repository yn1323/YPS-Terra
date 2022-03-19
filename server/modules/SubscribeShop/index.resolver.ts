import {
  Args,
  ID,
  Field,
  Resolver,
  Subscription,
  ArgsType,
} from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'
import { collections } from '@/firebase/common'
import { Shop } from '@/models/Shop'

@ArgsType()
export class SubscribeShopArgs {
  @Field(type => ID)
  shopId: string
}

@Resolver(of => Shop)
export class SubscribeShopResolver {
  private pubSub: PubSub
  private subscribes = {}
  constructor() {
    this.pubSub = new PubSub()
  }

  subscribeOneShopFromFirestore({ shopId }: SubscribeShopArgs) {
    if (this.subscribes[shopId]) {
      this.subscribes[shopId]()
    }
    const subscribe = collections.shop.doc(shopId).onSnapshot(docSnapshot => {
      const d = docSnapshot.data()
      this.pubSub.publish('shop', {
        ...d,
        closeTime: d.closeTime.toDate(),
        openTime: d.openTime.toDate(),
      })
    })
    this.subscribes[shopId] = subscribe

    return {
      shopId,
    }
  }

  @Subscription(returns => Shop, {
    resolve: (payload: SubscribeShopResolver, _) => {
      console.log(payload)
      return payload
    },
    name: 'shop',
  })
  subscribeOneShopByShopId(@Args() args: SubscribeShopArgs) {
    this.subscribeOneShopFromFirestore(args)
    return this.pubSub.asyncIterator('shop')
  }
}
