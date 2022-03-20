import { Module } from '@nestjs/common'
import { TimeCardResolver } from '@/modules/TimeCard/index.resolver'
import { TimeCardService } from '@/modules/TimeCard/index.service'

@Module({
  providers: [TimeCardService, TimeCardResolver],
})
export class TimeCardModule {}
