import { Module } from '@nestjs/common'
import { RegisterShopResolver } from '@/modules/registerShop/index.resolver'
import { RegisterShopService } from '@/modules/registerShop/index.service'

@Module({
  providers: [RegisterShopService, RegisterShopResolver],
})
export class RegisterShopModule {}
