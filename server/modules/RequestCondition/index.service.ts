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
  async getRequestCondition(@Args() args: GetRequestConditionArgs) {
    let ret: RequestCondition[] = []

    try {
      const snapshot = await collections.requestCondition
        .where('organizationId', '==', args.userId)
        .where('shopId', '==', args.shopId)
        .get()
      snapshot.forEach(d => (ret = [...ret, d.data() as RequestCondition]))
      if (!ret.length) {
        return new NotFoundException()
      }
    } catch (e) {
      return new BadRequestException()
    }

    return ret
  }
  async addRequestCondition(@Args() args: AddRequestConditionArgs) {
    try {
      await collections.announce.add(args)
    } catch (e) {
      return new BadRequestException()
    }

    return args
  }
}
