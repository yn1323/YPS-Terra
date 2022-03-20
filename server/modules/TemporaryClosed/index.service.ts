import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common'
import { Args } from '@nestjs/graphql'
import { collections } from '@/firebase/common'
import { TemporaryClosed } from '@/models/TemporaryClosed'
import {
  AddTemporaryClosedArgs,
  GetTemporaryClosedArgs,
} from '@/modules/TemporaryClosed/args'

@Injectable()
export class TemporaryClosedService {
  async addTemporaryClosed(@Args() args: AddTemporaryClosedArgs) {
    try {
      await collections.temporaryClosed.add(args)
    } catch (e) {
      console.log(e)
      return new BadRequestException()
    }

    return {
      ...args,
    }
  }
  async getTempraryClosed(@Args() args: GetTemporaryClosedArgs) {
    let ret: TemporaryClosed[] = []

    try {
      const snapshot = await collections.temporaryClosed
        .where('organizationId', '==', args.organizationId)
        .where('shopId', '==', args.shopId)
        .get()
      snapshot.forEach(d => {
        const dd = d.data()
        ret = [
          ...ret,
          {
            ...dd,
            date: dd.date.toDate(),
          } as TemporaryClosed,
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
