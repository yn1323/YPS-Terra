import {
  ID,
  ArgsType,
  Field,
  PickType,
  IntersectionType,
} from '@nestjs/graphql'
import { ShopArgs } from '@/models/Shop'
import { UserArgs } from '@/models/User'
@ArgsType()
export class CreateUserArgs extends PickType(UserArgs, [
  'userName',
  'userId',
] as const) {
  @Field(type => ID)
  shopId: string
}
@ArgsType()
export class GetUserArgs extends PickType(UserArgs, ['userId'] as const) {}

@ArgsType()
export class GetUserByTokenArgs {
  @Field(type => ID)
  token: string
}

@ArgsType()
class _RegisterAdminArgsUser extends PickType(UserArgs, [
  'userId',
  'userName',
] as const) {}

@ArgsType()
class _RegisterAdminArgsShop extends PickType(ShopArgs, [
  'shopName',
  'openTime',
  'closeTime',
  'timeUnit',
  'submitFrequency',
  'useTimeCard',
] as const) {}
@ArgsType()
export class RegisterAdminArgs extends IntersectionType(
  _RegisterAdminArgsShop,
  _RegisterAdminArgsUser
) {}

@ArgsType()
class _RegisterUserArgsUser extends PickType(UserArgs, [
  'userId',
  'userName',
] as const) {}

@ArgsType()
class _RegisterUserArgsShop extends PickType(ShopArgs, ['shopId'] as const) {}
@ArgsType()
export class RegisterUserArgs extends IntersectionType(
  _RegisterUserArgsUser,
  _RegisterUserArgsShop
) {}

@ArgsType()
export class LoginInfoArgs extends PickType(UserArgs, ['userId'] as const) {}
