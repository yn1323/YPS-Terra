import { Module } from '@nestjs/common'
import { OrganizationService } from '@/modules/Organization/index.service'
import { ShopService } from '@/modules/Shop/index.service'
import { UserResolver } from '@/modules/User/index.resolver'
import { UserService } from '@/modules/User/index.service'

@Module({
  providers: [UserService, UserResolver, ShopService, OrganizationService],
})
export class UserModule {}
