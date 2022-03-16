import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common'
import { collections } from '@/firebase/common'
import { Shop } from '@/models/Shop'
import { ReadShopArgs } from '@/modules/ReadShop/index.resolver'

@Injectable()
export class ReadShopService {
  async findOneByShopId({ shopId }: ReadShopArgs) {
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
}
