import { userInfo } from 'os'
import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
import { getAuthFromToken } from '@/firebase/auth'
import { collections, db, getRandomId } from '@/firebase/common'
import { Shop } from '@/models/Shop'
import { User } from '@/models/User'
import { ShopService } from '@/modules/Shop/index.service'
import {
  CreateUserArgs,
  GetUserArgs,
  GetUserByTokenArgs,
  RegisterAdminArgs,
} from '@/modules/User/args'

@Injectable()
export class UserService {
  constructor(private shopService: ShopService) {}

  createUserData(args: CreateUserArgs) {
    return {
      userId: args.userId,
      userName: args.userName,
      avatar: '',
      memberOf: [args.shopId],
    }
  }

  async createUser(args: CreateUserArgs) {
    const userId = args.userId
    const data = this.createUserData(args)

    const result = await collections.user
      .doc(userId)
      .create({ ...data, isDeleted: false })
      .catch(e => console.log(e))
    if (!result) {
      return new BadRequestException()
    }
    return data
  }

  async findOneByUserId(args: GetUserArgs) {
    const snapshot = await collections.user
      .doc(args.userId)
      .get()
      .catch(e => console.log(e))

    if (!snapshot) {
      return new BadRequestException()
    }
    if (!snapshot.exists) {
      return new NotFoundException()
    }

    return snapshot.data() as User
  }

  async findOneByToken(args: GetUserByTokenArgs) {
    const idToken = await getAuthFromToken(args.token)
    if (!idToken) {
      return new UnauthorizedException()
    }
    return this.findOneByUserId({ userId: idToken.uid })
  }

  async registerAdminUserAndShop(args: RegisterAdminArgs) {
    const userId = args.userId
    const shopId = getRandomId()

    const userCollection = collections.user.doc(userId)
    const shopCollection = collections.shop.doc(shopId)

    const result = await db
      .runTransaction(async t => {
        const userDoc = await t.get(userCollection)
        const shopDoc = await t.get(shopCollection)

        if (userDoc.exists || shopDoc.exists) {
          return new BadRequestException()
        }

        const userInfo = this.createUserData({ ...args, shopId })
        const shopInfo = this.shopService.createShopData({ ...args, shopId })

        await t.set(userCollection, userInfo)
        await t.set(shopCollection, shopInfo)
        return { ...userInfo, ...shopInfo }
      })
      .catch(e => console.log(e))
    return result
  }
}
