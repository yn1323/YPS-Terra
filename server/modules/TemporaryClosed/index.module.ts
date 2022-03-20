import { Module } from '@nestjs/common'
import { TemporaryClosedResolver } from '@/modules/TemporaryClosed/index.resolver'
import { TemporaryClosedService } from '@/modules/TemporaryClosed/index.service'

@Module({
  providers: [TemporaryClosedService, TemporaryClosedResolver],
})
export class TemporaryClosedModule {}
