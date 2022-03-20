import { Module } from '@nestjs/common'
import { AnnounceResolver } from '@/modules/Announce/index.resolver'
import { AnnounceService } from '@/modules/Announce/index.service'

@Module({
  providers: [AnnounceService, AnnounceResolver],
})
export class AnnounceModule {}
