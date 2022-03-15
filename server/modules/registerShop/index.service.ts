import { Injectable } from '@nestjs/common'
import { getRandomId, collections } from '@/firebase/common'
import { RegisterShop } from '@/models/registerShop'

@Injectable()
export class RegisterShopService {
  private registerShopStatus: RegisterShop = { shopId: null, succeeded: false }
  async register() {
    const shopId = getRandomId()
    try {
      await collections.shop.doc(shopId).create({
        shopId,
        first: 'Alan',
        middle: 'Mathison',
        last: 'Turing',
        born: 1912,
      })
    } catch (e) {
      console.error(e)
      return this.registerShopStatus
    }
    return {
      shopId,
      succeeded: true,
    }
  }
}
