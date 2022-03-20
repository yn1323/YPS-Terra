import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { User } from '@/models/user'
import { CreateUserArgs, GetUserArgs } from '@/modules/user/args/index'
import { UserService } from '@/modules/user/index.service'

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
}
