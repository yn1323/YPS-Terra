import { Module } from '@nestjs/common'
import { RequestConditionResolver } from '@/modules/RequestCondition/index.resolver'
import { RequestConditionService } from '@/modules/RequestCondition/index.service'

@Module({
  providers: [RequestConditionService, RequestConditionResolver],
})
export class RequestConditionModule {}
