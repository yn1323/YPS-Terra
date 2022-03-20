import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { PubSub } from 'graphql-subscriptions'
import { collections, getRandomId } from '@/firebase/common'
import { Shop } from '@/models/Shop'
import { CreateShopArgs, GetShopArgs } from '@/modules/Shop/args'

@Injectable()
export class ShopService {
  private subscribes = {}
  async findOneByShopId({ shopId }: GetShopArgs) {
    let ret

    try {
      const snapshot = await collections.shop.doc(shopId).get()
      if (!snapshot.exists) {
        return new NotFoundException()
      }
      ret = snapshot.data() as Shop
    } catch (e) {
      return new BadRequestException()
    }

    return {
      ...ret,
      openTime: ret.openTime.toDate(),
      closeTime: ret.closeTime.toDate(),
    }
  }
  async register(args: CreateShopArgs) {
    const shopId = getRandomId()
    try {
      await collections.shop.doc(shopId).create({
        shopId,
        ...args,
      })
    } catch (e) {
      return new BadRequestException()
    }

    return {
      shopId,
      ...args,
    }
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
