import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common'
import { Args } from '@nestjs/graphql'
import { collections } from '@/firebase/common'
import { Request } from '@/models/Request'
import { AddRequestArgs, GetRequestArgs } from '@/modules/Request/args'

@Injectable()
export class RequestService {
  async getRequest(@Args() args: GetRequestArgs) {
    let ret: Request[] = []

    try {
      const snapshot = await collections.request
        .where('organizationId', '==', args.userId)
        .where('shopId', '==', args.shopId)
        .get()
      snapshot.forEach(d => (ret = [...ret, d.data() as Request]))
      if (!ret.length) {
        return new NotFoundException()
      }
    } catch (e) {
      return new BadRequestException()
    }

    return ret
  }
  async addRequest(@Args() args: AddRequestArgs) {
    try {
      await collections.announce.add(args)
    } catch (e) {
      return new BadRequestException()
    }

    return args
  }
}
