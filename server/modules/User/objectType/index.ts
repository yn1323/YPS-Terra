import { Field, ObjectType } from '@nestjs/graphql'
import { Organization } from '@/models/Organization'
import { Shop } from '@/models/Shop'
import { StructureCombination } from '@/models/StructureCombination'
import { User } from '@/models/User'

@ObjectType()
export class LoginInfo {
  @Field(type => User)
  user: User

  @Field(type => [Shop])
  shops: Shop[]

  @Field(type => [Organization])
  organizations: Organization[]

  @Field(type => [StructureCombination])
  structure: StructureCombination
}
