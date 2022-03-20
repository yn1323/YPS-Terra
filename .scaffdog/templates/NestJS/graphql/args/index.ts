import { ID,  ArgsType, Field } from '@nestjs/graphql'

@ArgsType()
export class Get{{ inputs.query | pascal }}Args {
  @Field(type => ID)
  id: string
}