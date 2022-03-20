import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common'
import { Args } from '@nestjs/graphql'
import { collections } from '@/firebase/common'
import { Announce } from '@/models/Announce'
import { AddAnnounceArgs, GetAnnounceArgs } from '@/modules/Announce/args'

@Injectable()
export class AnnounceService {
  async getAnnounce(@Args() args: GetAnnounceArgs) {
    let ret: Announce[] = []

    try {
      const snapshot = await collections.announce
        .where('organizationId', '==', args.organizationId)
        .where('shopId', '==', args.shopId)
        .get()
      snapshot.forEach(d => (ret = [...ret, d.data() as Announce]))
      if (!ret.length) {
        return new NotFoundException()
      }
    } catch (e) {
      return new BadRequestException()
    }

    return ret
  }
  async addAnnounce(@Args() args: AddAnnounceArgs) {
    try {
      await collections.announce.add(args)
    } catch (e) {
      return new BadRequestException()
    }

    return args
  }
}
