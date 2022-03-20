import { Field, ID, ObjectType, ArgsType } from '@nestjs/graphql'

@ObjectType()
export class {{ inputs.query | pascal }} {
  @Field(type => ID)
  id: string

  @Field()
  title: string

  @Field({ nullable: true })
  description: string
}

@ArgsType()
export class  {{ inputs.query | pascal }}Args extends  {{ inputs.query | pascal }} {}