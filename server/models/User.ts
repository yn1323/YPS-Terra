import { Field, ObjectType, ID, ArgsType } from '@nestjs/graphql'

@ObjectType()
export class User {
  @Field(type => ID)
  userId: string

  @Field()
  userName: string

  @Field()
  avatar: string

  @Field(type => [ID])
  memberOf: string[]
}

@ArgsType()
export class UserArgs extends User {}
