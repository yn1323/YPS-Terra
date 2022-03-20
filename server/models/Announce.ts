import { ArgsType, Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Announce {
  @Field(type => ID)
  organizationId: string

  @Field(type => ID)
  shopId: string

  @Field()
  announceDateFrom: Date

  @Field()
  announceDateTo: Date

  @Field()
  message: string
}

@ArgsType()
export class AnnounceArgs extends Announce {}
