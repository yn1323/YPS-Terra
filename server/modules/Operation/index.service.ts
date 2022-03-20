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

  async findAllByShopId(args: GetOperationsArgs) {
    let ret: Operation[] = []

    try {
      const snapshot = await collections.organization
        .where('shopId', '==', args.shopId)
        .get()
      snapshot.forEach(d => {
        ret = [...ret, d.data() as Operation]
      })
      if (!ret.length) {
        return new NotFoundException()
      }
    } catch (e) {
      return new BadRequestException()
    }

    return ret
  }
  async createOperations(args: CreateOperationsArgs) {
    let ret: Operation[] = []
    const operationId = getRandomId()
    const target = collections.operation
      .doc(args.shopId)
      .collection('operation')
      .doc(operationId)
    try {
      for (const { operationName, color, icon } of this.defaultOperations) {
        const operationId = getRandomId()
        const d = {
          operationId,
          operationName,
          color,
          icon,
        }
        await target.create(d)
        ret = [...ret, d]
      }
    } catch (e) {
      return new BadRequestException()
    }

    return ret
  }
}
