import { Module } from '@nestjs/common'
import { RequestResolver } from '@/modules/Request/index.resolver'
import { RequestService } from '@/modules/Request/index.service'

@Module({
  providers: [RequestService, RequestResolver],
})
export class RequestModule {}
