import { BadRequestException } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { User } from '@/models/User'
import { ShopService } from '@/modules/Shop/index.service'
import {
  CreateUserArgs,
  GetUserArgs,
  GetUserByTokenArgs,
  RegisterAdminArgs,
} from '@/modules/User/args/index'
import { UserService } from '@/modules/User/index.service'
import { UserAndShop } from '@/modules/User/objectType'

@Resolver(of => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private shopService: ShopService
  ) {}

  @Mutation(returns => User, { name: 'user' })
  createUser(@Args() args: CreateUserArgs) {
    return this.userService.createUser(args)
  }

  @Query(returns => User, { name: 'user' })
  findOneByUserId(@Args() args: GetUserArgs) {
    return this.userService.findOneByUserId(args)
  }

  @Query(returns => User, { name: 'userExists' })
  findOneByToken(@Args() args: GetUserByTokenArgs) {
    return this.userService.findOneByToken(args)
  }

  @Mutation(returns => UserAndShop, { name: 'registerAdmin' })
  async registerAdmin(@Args() args: RegisterAdminArgs) {
    const shopInfo = await this.shopService.createShop(args)

    if (!('shopId' in shopInfo)) {
      return new BadRequestException()
    }

    const userInfo = await this.userService.createUser({
      ...args,
      shopId: shopInfo.shopId,
    })

    if (!('userId' in userInfo)) {
      return new BadRequestException()
    }
    return { ...userInfo, ...shopInfo }
  }
}
