import { ArgsType, Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Operation {
  @Field(type => ID)
  operationId: string

  @Field()
  operationName: string

  @Field()
  icon: string

  @Field()
  color: string
}

@ArgsType()
export class OperationArgs extends Operation {}
