import { Module } from '@nestjs/common'
import { DevOnlyResolver } from '@/modules/DevOnly/index.resolver'
import { DevOnlyService } from '@/modules/DevOnly/index.service'

@Module({
  providers: [DevOnlyService, DevOnlyResolver],
})
export class DevOnlyModule {}
