import { Module } from '@nestjs/common'
import { ReadShopResolver } from '@/modules/ReadShop/index.resolver'
import { ReadShopService } from '@/modules/ReadShop/index.service'

@Module({
  providers: [ReadShopService, ReadShopResolver],
})
export class ReadShopModule {}
