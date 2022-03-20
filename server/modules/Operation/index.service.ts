import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common'
import { collections, getRandomId } from '@/firebase/common'
import { Operation } from '@/models/Operation'
import {
  CreateOperationsArgs,
  GetOperationsArgs,
} from '@/modules/Operation/args'

@Injectable()
export class OperationService {
  private defaultOperations = [
    { operationName: '業務1', icon: 'home', color: '#f00' },
    { operationName: '業務2', icon: 'home', color: '#0f0' },
    { operationName: '業務3', icon: 'home', color: '#00f' },
  ]

  async createOperations(args: CreateOperationsArgs) {
    let ret: Operation[] = []
    const target = collections.operation
      .doc(args.shopId)
      .collection('operation')

    try {
      for (const { operationName, color, icon } of this.defaultOperations) {
        const operationId = getRandomId()
        const d: Operation = {
          operationId,
          operationName,
          color,
          icon,
        }
        await target.doc(operationId).create(d)
        ret = [...ret, d]
      }
    } catch (e) {
      console.log(e)
      return new BadRequestException()
    }

    return ret
  }

  async findAllByShopId(args: GetOperationsArgs) {
    let ret: Operation[] = []

    try {
      const snapshot = await collections.operation
        .doc(args.shopId)
        .collection('operation')
        .get()
      snapshot.forEach(d => {
        ret = [...ret, d.data() as Operation]
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
