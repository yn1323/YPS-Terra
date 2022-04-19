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
    const result = await collections.announce
      .add(args)
      .catch(e => console.log(e))
    if (!result) {
      return new BadRequestException()
    }

    return args
  }

  async getAnnounce(@Args() args: GetAnnounceArgs) {
    let ret: Announce[] = []

    const snapshot = await collections.announce
      .where('organizationId', '==', args.organizationId)
      .where('shopId', '==', args.shopId)
      .get()
      .catch(e => console.log(e))

    if (!snapshot) {
      return new BadRequestException()
    }

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

    return ret
  }
}
