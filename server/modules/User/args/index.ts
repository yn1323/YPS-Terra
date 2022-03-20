import { ID, ArgsType, Field, PickType } from '@nestjs/graphql'
import { UserArgs } from '@/models/User'

@ArgsType()
export class CreateUserArgs extends PickType(UserArgs, ['userName'] as const) {
  @Field(type => ID)
  shopId: string
}
@ArgsType()
export class GetUserArgs extends PickType(UserArgs, ['userId'] as const) {}
