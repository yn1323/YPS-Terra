import { Args, ID,  ArgsType, Field } from '@nestjs/graphql'

@ArgsType()
export class {{ inputs.query | pascal }}Args {
  @Field(type => ID)
  id: string
}