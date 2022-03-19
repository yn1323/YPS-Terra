import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { getIdToken } from '@/firebase/auth'

@Injectable()
export class AuthGurd implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): Promise<boolean> {
    return new Promise(async (resolve, _) => {
      const { authorization, host } = context.getArgs()[2].req.headers

      // TODO: ADD Environment value
      if (host === 'localhost:3000') {
        resolve(true)
      }
      if (!authorization) {
        // NOTE: 403FORBIDDENになる
        resolve(false)
      }

      const decoded = await getIdToken(authorization)
      if (decoded) {
        return resolve(true)
      } else {
        return resolve(false)
      }
    })
  }
}
