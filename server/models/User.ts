import { Field, ObjectType, ID } from '@nestjs/graphql'

@ObjectType()
export class User {
  @Field(type => ID)
  userId: string

  @Field()
  userName: string

  @Field(type => [ID])
  memberOf: string[]
}
