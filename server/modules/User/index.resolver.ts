import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { User } from '@/models/User'
import { CreateUserArgs, GetUserArgs } from '@/modules/User/args/index'
import { UserService } from '@/modules/User/index.service'

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
