import { Injectable, BadRequestException } from '@nestjs/common'
import { getRandomId, collections } from '@/firebase/common'
import { CreateShopArgs } from '@/modules/CreateShop/index.resolver'

@Injectable()
export class CreateShopService {
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
}
