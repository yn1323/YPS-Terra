import { Module } from '@nestjs/common'
import { CreateShopResolver } from '@/modules/CreateShop/index.resolver'
import { CreateShopService } from '@/modules/CreateShop/index.service'

@Module({
  providers: [CreateShopService, CreateShopResolver],
})
export class CreateShopModule {}
