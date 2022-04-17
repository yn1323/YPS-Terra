import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { PubSub } from 'graphql-subscriptions'
import { collections, getRandomId } from '@/firebase/common'
import { Shop } from '@/models/Shop'
import { CreateShopArgs, GetShopArgs, GetShopsArgs } from '@/modules/Shop/args'

@Injectable()
export class ShopService {
  private subscribes = {}

  createShopData(args: CreateShopArgs & { shopId: string }): Shop {
    return {
      shopId: args.shopId,
      avatar: '',
      closedWeekday: [],
      shopOwnerIds: [],
      ...args,
    }
  }

  async createShop(args: CreateShopArgs) {
    const shopId = getRandomId()
    const d = this.createShopData({ ...args, shopId })
    const result = await collections.shop
      .doc(shopId)
      .create(d)
      .catch(e => console.log(e))

    if (!result) {
      return new BadRequestException()
    }

    return d
  }
  async findOneByShopId({ shopId }: GetShopArgs) {
    const snapshot = await collections.shop
      .doc(shopId)
      .get()
      .catch(e => console.log(e))

    if (!snapshot) {
      return new BadRequestException()
    }

    if (!snapshot.exists) {
      return new NotFoundException()
    }
    const ret = snapshot.data()

    return {
      ...ret,
      openTime: ret.openTime.toDate(),
      closeTime: ret.closeTime.toDate(),
    }
  }

  async findShopsByShopIds({ shopIds }: GetShopsArgs) {
    const shops = await Promise.all(
      shopIds.map(async shopId =>
        (await collections.shop.doc(shopId).get()).data()
      )
    )
    return shops.map(shop => ({
      ...shop,
      openTime: shop.openTime.toDate(),
      closeTime: shop.closeTime.toDate(),
    }))
  }

  subscribeOneShopFromFirestore({ shopId }: GetShopArgs, pubSub: PubSub) {
    if (this.subscribes[shopId]) {
      this.subscribes[shopId]()
    }
    const subscribe = collections.shop.doc(shopId).onSnapshot(docSnapshot => {
      const d = docSnapshot.data()
      pubSub.publish('shop', {
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
}
