import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Organization } from '@/models/Organization'
import { Shop } from '@/models/Shop'
import { StructureCombination } from '@/models/StructureCombination'
import { User } from '@/models/User'

@ObjectType()
class NameObject {
  @Field(type => ID)
  id: string

  @Field(type => String)
  name: string
}

@ObjectType()
class Names {
  @Field(type => [NameObject])
  user: NameObject

  @Field(type => [NameObject])
  shop: NameObject

  @Field(type => [NameObject])
  organization: NameObject
}

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

  @Field(type => Names)
  names: Names
}
