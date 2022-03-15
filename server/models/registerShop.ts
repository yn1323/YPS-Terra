import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class RegisterShop {
  @Field({ description: 'shopId' })
  shopId: string

  @Field({ defaultValue: false })
  succeeded: boolean
}
