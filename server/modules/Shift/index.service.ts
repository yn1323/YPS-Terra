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
  async getShift(@Args() args: GetShiftArgs) {
    let ret: Shift[] = []

    try {
      const snapshot = await collections.shift
        .where('organizationId', '==', args.userId)
        .where('shopId', '==', args.shopId)
        .get()
      snapshot.forEach(d => (ret = [...ret, d.data() as Shift]))
      if (!ret.length) {
        return new NotFoundException()
      }
    } catch (e) {
      return new BadRequestException()
    }

    return ret
  }
  async addShift(@Args() args: AddShiftArgs) {
    try {
      await collections.announce.add(args)
    } catch (e) {
      return new BadRequestException()
    }

    return args
  }
}
