import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common'
import { Args } from '@nestjs/graphql'
import { collections } from '@/firebase/common'
import { TimeCard } from '@/models/TimeCard'
import { AddTimeCardArgs, GetTimeCardArgs } from '@/modules/TimeCard/args'

@Injectable()
export class TimeCardService {
  async getTimeCard(@Args() args: GetTimeCardArgs) {
    let ret: TimeCard[] = []

    try {
      const snapshot = await collections.timeCard
        .where('organizationId', '==', args.userId)
        .where('shopId', '==', args.shopId)
        .get()
      snapshot.forEach(d => (ret = [...ret, d.data() as TimeCard]))
      if (!ret.length) {
        return new NotFoundException()
      }
    } catch (e) {
      return new BadRequestException()
    }

    return ret
  }
  async addTimeCard(@Args() args: AddTimeCardArgs) {
    try {
      await collections.announce.add(args)
    } catch (e) {
      return new BadRequestException()
    }

    return args
  }
}
