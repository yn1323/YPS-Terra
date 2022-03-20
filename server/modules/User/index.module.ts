import { Module } from '@nestjs/common'
import { UserResolver } from '@/modules/User/index.resolver'
import { UserService } from '@/modules/User/index.service'

@Module({
  providers: [UserService, UserResolver],
})
export class UserModule {}
