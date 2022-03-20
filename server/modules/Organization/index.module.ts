import { Module } from '@nestjs/common'
import { OrganizationResolver } from '@/modules/Organization/index.resolver'
import { OrganizationService } from '@/modules/Organization/index.service'

@Module({
  providers: [OrganizationService, OrganizationResolver],
})
export class OrganizationModule {}
