import { Module } from '@nestjs/common'
import { ShopResolver } from '@/modules/Shop/index.resolver'
import { ShopService } from '@/modules/Shop/index.service'

@Module({
  providers: [ShopService, ShopResolver],
})
export class ShopModule {}
