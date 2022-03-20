import { PickType, ArgsType } from '@nestjs/graphql'
import { TemporaryClosedArgs } from '@/models/TemporaryClosed'

@ArgsType()
export class GetTemporaryClosedArgs extends PickType(TemporaryClosedArgs, [
  'organizationId',
  'shopId',
] as const) {}

@ArgsType()
export class AddTemporaryClosedArgs extends TemporaryClosedArgs {}
