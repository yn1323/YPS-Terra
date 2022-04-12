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

    for (const { operationName, color, icon } of this.defaultOperations) {
      const operationId = getRandomId()
      const d: Operation = {
        operationId,
        operationName,
        color,
        icon,
      }
      const result = await target
        .doc(operationId)
        .create(d)
        .catch(e => console.log(e))
      if (!result) {
        return new BadRequestException()
      }

      ret = [...ret, d]
    }

    return ret
  }

  async findAllByShopId(args: GetOperationsArgs) {
    let ret: Operation[] = []

    const snapshot = await collections.operation
      .doc(args.shopId)
      .collection('operation')
      .get()
      .catch(e => console.log(e))
    if (!snapshot) {
      return new BadRequestException()
    }

    snapshot.forEach(d => {
      ret = [...ret, d.data() as Operation]
    })
    if (!ret.length) {
      return new NotFoundException()
    }

    return ret
  }
}
