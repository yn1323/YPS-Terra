import { ID, ArgsType, Field } from '@nestjs/graphql'

@ArgsType()
export class GetDevOnlyArgs {
  @Field(type => ID)
  id: string
}
