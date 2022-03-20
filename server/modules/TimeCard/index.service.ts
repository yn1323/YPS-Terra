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
  async addTimeCard(@Args() args: AddTimeCardArgs) {
    try {
      await collections.timeCard.add(args)
    } catch (e) {
      console.log(e)
      return new BadRequestException()
    }

    return args
  }
  async getTimeCard(@Args() args: GetTimeCardArgs) {
    let ret: TimeCard[] = []

    try {
      const snapshot = await collections.timeCard
        .where('userId', '==', args.userId)
        .where('shopId', '==', args.shopId)
        .get()
      snapshot.forEach(d => {
        const dd = d.data()
        ret = [
          ...ret,
          {
            ...dd,
            workFrom: dd.workFrom.toDate(),
            workTo: dd.workTo.toDate(),
            breakFrom: dd.breakFrom.toDate(),
            breakTo: dd.breakTo.toDate(),
          } as TimeCard,
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
