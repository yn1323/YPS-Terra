import { Mutation, Resolver, Args } from '@nestjs/graphql'
import { ShiftSubmitFrequency, ShiftTimeUnit } from '@/constants/validations'
import { RegisterShop } from '@/models/registerShop'
import { RegisterShopService } from '@/modules/registerShop/index.service'

@Resolver(of => RegisterShop)
export class RegisterShopResolver {
  constructor(private registerShopService: RegisterShopService) {}
  @Mutation(type => RegisterShop, { name: 'registerShop' })
  registerShop(
    @Args('shopName') shopName: string,
    @Args('openTime') openTime: Date,
    @Args('closeTime') closeTime: Date,
    @Args('timeUnit') timeUnit: ShiftTimeUnit,
    @Args('submitFrequency') submitFrequency: ShiftSubmitFrequency,
    @Args('useTimeCard') useTimeCard: boolean
  ) {
    console.log(shopName)
    console.log(openTime)
    console.log(closeTime)
    console.log(timeUnit)
    console.log(submitFrequency)
    console.log(useTimeCard)
    return this.registerShopService.register()
  }
}
