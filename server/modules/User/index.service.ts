import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { collections, getRandomId } from '@/firebase/common'
import { User } from '@/models/user'
import { CreateUserArgs, GetUserArgs } from '@/modules/user/args'

@Injectable()
export class UserService {
  async findOneByUserId(args: GetUserArgs) {
    let ret

    try {
      const snapshot = await collections.user.doc(args.userId).get()
      if (!snapshot.exists) {
        return new NotFoundException()
      }
      ret = snapshot.data() as User
    } catch (e) {
      return new BadRequestException()
    }

    return ret
  }

  async createUser(args: CreateUserArgs) {
    const userId = getRandomId()
    const data = {
      userId,
      userName: args.userName,
      avatar: '',
      memberOf: [args.shopId],
    }
    try {
      await collections.user.doc(userId).create({ ...data, isDeleted: false })
    } catch (e) {
      return new BadRequestException()
    }

    return data
  }
}
