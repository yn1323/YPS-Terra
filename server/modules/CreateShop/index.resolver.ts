import { Mutation, Resolver, Args, Int, ArgsType, Field } from '@nestjs/graphql'
import { ShiftSubmitFrequency, ShiftTimeUnit } from '@/constants/validations'
import { Shop } from '@/models/Shop'
import { CreateShopService } from '@/modules/CreateShop/index.service'

@ArgsType()
export class CreateShopArgs {
  @Field()
  shopName: string

  @Field()
  openTime: Date

  @Field()
  closeTime: Date

  @Field(type => Int)
  timeUnit: ShiftTimeUnit

  @Field()
  submitFrequency: ShiftSubmitFrequency

  @Field()
  useTimeCard: boolean
}

@Resolver(of => Shop)
export class CreateShopResolver {
  constructor(private createShopService: CreateShopService) {}
  @Mutation(type => Shop, { name: 'createShop' })
  createShop(@Args() args: CreateShopArgs) {
    return this.createShopService.register(args)
  }
}
