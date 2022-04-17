import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { User } from '@/models/User'
import {
  CreateUserArgs,
  GetUserArgs,
  GetUserByTokenArgs,
  LoginInfoArgs,
  RegisterAdminArgs,
  RegisterUserArgs,
} from '@/modules/User/args/index'
import { UserService } from '@/modules/User/index.service'
import { LoginInfo } from '@/modules/User/objectType'

@Resolver(of => User)
export class UserResolver {
  constructor(private userService: UserService) {}

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

  @Mutation(returns => LoginInfo, {
    name: 'registerAdminUserAndShop',
  })
  async registerAdminUserAndShop(@Args() args: RegisterAdminArgs) {
    return this.userService.registerAdminUserAndShop(args)
  }

  @Mutation(returns => LoginInfo, { name: 'registerUser' })
  async registerUser(@Args() args: RegisterUserArgs) {
    return this.userService.registerUser(args)
  }

  @Query(returns => LoginInfo, { name: 'loginInfo' })
  async getLoginInfo(@Args() args: LoginInfoArgs) {
    return this.userService.getLoginInfo(args)
  }
}
