import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
import { getAuthFromToken } from '@/firebase/auth'
import { collections, getRandomId } from '@/firebase/common'
import { User } from '@/models/User'
import {
  CreateUserArgs,
  GetUserArgs,
  GetUserByTokenArgs,
} from '@/modules/User/args'

@Injectable()
export class UserService {
  async createUser(args: CreateUserArgs) {
    const userId = getRandomId()
    const data = {
      userId,
      userName: args.userName,
      avatar: '',
      memberOf: [args.shopId],
    }
    const result = await collections.user
      .doc(userId)
      .create({ ...data, isDeleted: false })
      .catch(e => null)
    if (!result) {
      return new BadRequestException()
    }
    return data
  }

  async findOneByUserId(args: GetUserArgs) {
    const snapshot = await collections.user
      .doc(args.userId)
      .get()
      .catch(e => null)

    if (!snapshot) {
      return new BadRequestException()
    }
    if (!snapshot.exists) {
      return new NotFoundException()
    }

    return snapshot.data() as User
  }

  async findOneByToken(args: GetUserByTokenArgs) {
    const idToken = await getAuthFromToken(args.token)
    if (!idToken) {
      return new UnauthorizedException()
    }
    return this.findOneByUserId({ userId: idToken.uid })
  }
}
