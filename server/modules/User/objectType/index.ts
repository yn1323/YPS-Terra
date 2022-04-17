import { Field, ID, Int, IntersectionType, ObjectType } from '@nestjs/graphql'
import { Organization } from '@/models/Organization'
import { Shop } from '@/models/Shop'
import { User } from '@/models/User'

@ObjectType()
export class UserAndShop extends IntersectionType(User, Shop) {}

@ObjectType()
export class RegisterUserOrAdmin extends IntersectionType(
  UserAndShop,
  Organization
) {
  // NOTE: IntersectionTypeで配列は正常に継承できないかも
  @Field(type => [ID])
  memberOf: string[]

  @Field(type => [Int])
  closedWeekday: number[]

  @Field(type => [ID])
  shopOwnerIds: string[]

  @Field(type => [ID])
  organizationOwnerIds: string[]

  @Field(type => [ID])
  shopIds: string[]
}
