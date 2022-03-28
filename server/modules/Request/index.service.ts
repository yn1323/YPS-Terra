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
  async addRequest(@Args() args: AddRequestArgs) {
    const result = await collections.request.add(args).catch(e => null)
    if (!result) {
      return new BadRequestException()
    }

    return args
  }

  async getRequest(@Args() args: GetRequestArgs) {
    let ret: Request[] = []

    const snapshot = await collections.request
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
        } as Request,
      ]
    })

    if (!ret.length) {
      return new NotFoundException()
    }

    return ret
  }
}
