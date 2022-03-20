import { Module } from '@nestjs/common'
import { UserResolver } from '@/modules/user/index.resolver'
import { UserService } from '@/modules/user/index.service'

@Module({
  providers: [UserService, UserResolver],
})
export class UserModule {}
