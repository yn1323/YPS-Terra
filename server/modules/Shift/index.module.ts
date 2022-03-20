import { Module } from '@nestjs/common'
import { ShiftResolver } from '@/modules/Shift/index.resolver'
import { ShiftService } from '@/modules/Shift/index.service'

@Module({
  providers: [ShiftService, ShiftResolver],
})
export class ShiftModule {}
