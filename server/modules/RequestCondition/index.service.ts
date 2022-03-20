import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common'
import { Args } from '@nestjs/graphql'
import { collections } from '@/firebase/common'
import { RequestCondition } from '@/models/RequestCondition'
import {
  AddRequestConditionArgs,
  GetRequestConditionArgs,
} from '@/modules/RequestCondition/args'

@Injectable()
export class RequestConditionService {
  async addRequestCondition(@Args() args: AddRequestConditionArgs) {
    try {
      await collections.requestCondition.add(args)
    } catch (e) {
      console.log(e)
      return new BadRequestException()
    }

    return args
  }

  async getRequestCondition(@Args() args: GetRequestConditionArgs) {
    let ret: RequestCondition[] = []

    try {
      const snapshot = await collections.requestCondition
        .where('userId', '==', args.userId)
        .where('shopId', '==', args.shopId)
        .get()
      snapshot.forEach(d => {
        const dd = d.data()
        ret = [
          ...ret,
          {
            ...dd,
            dateFrom: dd.dateFrom.toDate(),
            dateTo: dd.dateTo.toDate(),
          } as RequestCondition,
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
