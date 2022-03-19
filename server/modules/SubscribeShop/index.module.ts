import { Module } from '@nestjs/common'
import { SubscribeShopResolver } from '@/modules/SubscribeShop/index.resolver'

@Module({
  providers: [SubscribeShopResolver],
})
export class SubscribeShopModule {}
