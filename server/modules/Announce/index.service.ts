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
  async addAnnounce(@Args() args: AddAnnounceArgs) {
    try {
      await collections.announce.add(args)
    } catch (e) {
      console.log(e)
      return new BadRequestException()
    }

    return args
  }

  async getAnnounce(@Args() args: GetAnnounceArgs) {
    let ret: Announce[] = []

    try {
      const snapshot = await collections.announce
        .where('organizationId', '==', args.organizationId)
        .where('shopId', '==', args.shopId)
        .get()
      snapshot.forEach(d => {
        const dd = d.data()
        ret = [
          ...ret,
          {
            ...dd,
            announceDateFrom: dd.announceDateFrom.toDate(),
            announceDateTo: dd.announceDateTo.toDate(),
          } as Announce,
        ]
      })
      if (!ret.length) {
        return new NotFoundException()
      }
    } catch (e) {
      console.log(e)
      return new BadRequestException()
    }

    return ret
  }
}
