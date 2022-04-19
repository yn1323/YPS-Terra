import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
import { getAuthFromToken } from '@/firebase/auth'
import { collections, db, getRandomId } from '@/firebase/common'
import {
  getGroupNames,
  organizationAndShopCombination,
} from '@/helpers/structure'
import { User } from '@/models/User'
import { OrganizationService } from '@/modules/Organization/index.service'
import { ShopService } from '@/modules/Shop/index.service'
import {
  CreateUserArgs,
  GetUserArgs,
  GetUserByTokenArgs,
  RegisterAdminArgs,
  RegisterUserArgs,
} from '@/modules/User/args'

@Injectable()
export class UserService {
  constructor(
    private shopService: ShopService,
    private origanizationService: OrganizationService
  ) {}

  createUserData(args: CreateUserArgs) {
    return {
      userId: args.userId,
      userName: args.userName,
      avatar: '',
      memberOf: [args.shopId],
    }
  }

  async createUser(args: CreateUserArgs) {
    const { userId } = args
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
    const organizationId = getRandomId()

    const userCollection = collections.user.doc(userId)
    const shopCollection = collections.shop.doc(shopId)
    const organizationCollection = collections.organization.doc(organizationId)

    const result = await db
      .runTransaction(async t => {
        const [userDoc, shopDoc, organizationDoc] = await Promise.all([
          await t.get(userCollection),
          await t.get(shopCollection),
          await t.get(organizationCollection),
        ])

        if (userDoc.exists || shopDoc.exists || organizationDoc.exists) {
          return new BadRequestException()
        }

        const userInfo = this.createUserData({ ...args, shopId })
        const shopInfo = this.shopService.createShopData({ ...args, shopId })
        const organizationInfo =
          this.origanizationService.createOrganizationData({
            organizationId,
            organizationName: args.shopName,
            organizationOwnerId: userId,
            shopId,
          })
        await Promise.all([
          await t.set(userCollection, userInfo),
          await t.set(shopCollection, shopInfo),
          await t.set(organizationCollection, organizationInfo),
        ])
        return this.getLoginInfo({ userId })
      })
      .catch(e => console.log(e))

    return result
  }

  async registerUser(args: RegisterUserArgs) {
    const { userId, shopId } = args

    const userCollection = collections.user.doc(userId)
    const shopCollection = collections.shop.doc(shopId)

    const result = await db
      .runTransaction(async t => {
        const [userDoc, shopDoc] = await Promise.all([
          await t.get(userCollection),
          await t.get(shopCollection),
        ])

        if (!shopDoc.exists) {
          return new NotFoundException()
        }
        const userInfo = this.createUserData({ ...args, shopId })

        if (userDoc.exists) {
          await t.update(userCollection, userInfo)
        } else {
          await t.set(userCollection, userInfo)
        }
        return this.getLoginInfo({ userId })
      })
      .catch(e => console.log(e))

    return result
  }

  async addMemberOf(args: { userId: string; shopId: string }) {
    const { userId, shopId } = args

    const userCollection = collections.user.doc(userId)
    const shopCollection = collections.shop.doc(shopId)

    const result = await db
      .runTransaction(async t => {
        const [userDoc, shopDoc] = await Promise.all([
          await t.get(userCollection),
          await t.get(shopCollection),
        ])

        if (!shopDoc.exists || !userDoc.exists) {
          return new NotFoundException()
        }

        const { memberOf } = userDoc.data()
        const newMemberOf = Array.from(new Set([...memberOf, shopId]))
        await userCollection.update({ memberOf: newMemberOf })

        return newMemberOf
      })
      .catch(e => console.log(e))
    return result
  }

  async getLoginInfo({ userId }: { userId: string }) {
    const userCollection = collections.user.doc(userId)

    const loginAllInfo = await db
      .runTransaction(async t => {
        const userDoc = await t.get(userCollection)
        if (!userDoc.exists) {
          return new NotFoundException()
        }

        const user = userDoc.data() as User
        const shopIds: string[] = user.memberOf

        const [shops, organizations] = await Promise.all([
          await this.shopService.findShopsByShopIds({
            shopIds,
          }),
          await this.origanizationService.findOrganizationsByShopIds({
            shopIds,
          }),
        ])

        const structure = organizationAndShopCombination({
          userId,
          shops,
          organizations,
        })

        const names = getGroupNames({ user, shops, organizations })

        return {
          user,
          shops,
          organizations,
          structure,
          names,
        }
      })
      .catch(e => console.log(e))
    return loginAllInfo
  }
}
