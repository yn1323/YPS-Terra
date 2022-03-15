import { Mutation, Resolver } from '@nestjs/graphql'
import { RegisterShop } from '@/models/registerShop'
import { RegisterShopService } from '@/modules/registerShop/index.service'

@Resolver(of => RegisterShop)
export class RegisterShopResolver {
  constructor(private registerShopService: RegisterShopService) {}
  @Mutation(type => RegisterShop, { name: 'registerShop' })
  registerShop() {
    return this.registerShopService.register()
  }
}
