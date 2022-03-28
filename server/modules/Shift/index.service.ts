import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common'
import { Args } from '@nestjs/graphql'
import { collections } from '@/firebase/common'
import { Shift } from '@/models/Shift'
import { AddShiftArgs, GetShiftArgs } from '@/modules/Shift/args'

@Injectable()
export class ShiftService {
  async addShift(@Args() args: AddShiftArgs) {
    const result = await collections.shift.add(args).catch(e => null)
    if (!result) {
      return new BadRequestException()
    }

    return args
  }
  async getShift(@Args() args: GetShiftArgs) {
    let ret: Shift[] = []

    const snapshot = await collections.shift
      .where('userId', '==', args.userId)
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
          workFrom: dd.workFrom.toDate(),
          workTo: dd.workTo.toDate(),
          breakFrom: dd.breakFrom.toDate(),
          breakTo: dd.breakTo.toDate(),
        } as Shift,
      ]
    })
    if (!ret.length) {
      return new NotFoundException()
    }

    return ret
  }
}
