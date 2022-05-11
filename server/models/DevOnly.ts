import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class DevOnly {
  @Field()
  succeeded: boolean
}
