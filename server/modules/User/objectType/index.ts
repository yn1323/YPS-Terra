import { Field, ID, Int, IntersectionType, ObjectType } from '@nestjs/graphql'
import { Shop } from '@/models/Shop'
import { User } from '@/models/User'

@ObjectType()
export class UserAndShop extends IntersectionType(User, Shop) {
  // NOTE: IntersectionTypeで配列は正常に継承できないかも
  @Field(type => [ID])
  memberOf: string[]

  @Field(type => [Int])
  closedWeekday: number[]

  @Field(type => [ID])
  shopOwnerIds: string[]
}
