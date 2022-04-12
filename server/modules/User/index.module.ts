import { Module } from '@nestjs/common'
import { ShopService } from '@/modules/Shop/index.service'
import { UserResolver } from '@/modules/User/index.resolver'
import { UserService } from '@/modules/User/index.service'

@Module({
  providers: [UserService, UserResolver, ShopService],
})
export class UserModule {}
