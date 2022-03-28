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
    const result = await collections.temporaryClosed.add(args).catch(e => null)
    if (!result) {
      return new BadRequestException()
    }

    return {
      ...args,
    }
  }

  async getTempraryClosed(@Args() args: GetTemporaryClosedArgs) {
    let ret: TemporaryClosed[] = []

    const snapshot = await collections.temporaryClosed
      .where('organizationId', '==', args.organizationId)
      .where('shopId', '==', args.shopId)
      .get()
      .catch(e => null)

    if (!snapshot) {
      return new BadRequestException()
    }

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

    return ret
  }
}
