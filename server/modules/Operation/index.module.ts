import { Module } from '@nestjs/common'
import { OperationResolver } from '@/modules/Operation/index.resolver'
import { OperationService } from '@/modules/Operation/index.service'

@Module({
  providers: [OperationService, OperationResolver],
})
export class OperationModule {}
