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

  async createShop(args: CreateShopArgs) {
    const shopId = getRandomId()
    const d: Shop = {
      shopId,
      avatar: '',
      closedWeekday: [],
      shopOwnerIds: [],
      ...args,
    }
    try {
      await collections.shop.doc(shopId).create(d)
    } catch (e) {
      console.log(e)
      return new BadRequestException()
    }

    return d
  }
  async findOneByShopId({ shopId }: GetShopArgs) {
    let ret

    try {
      const snapshot = await collections.shop.doc(shopId).get()
      if (!snapshot.exists) {
        return new NotFoundException()
      }
      ret = snapshot.data() as Shop
    } catch (e) {
      console.log(e)
      return new BadRequestException()
    }

    return {
      ...ret,
      openTime: ret.openTime.toDate(),
      closeTime: ret.closeTime.toDate(),
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
