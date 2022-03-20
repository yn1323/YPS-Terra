import { ArgsType, PickType } from '@nestjs/graphql'
import { AnnounceArgs } from '@/models/Announce'

@ArgsType()
export class GetAnnounceArgs extends PickType(AnnounceArgs, [
  'organizationId',
  'shopId',
] as const) {}

@ArgsType()
export class AddAnnounceArgs extends AnnounceArgs {}
