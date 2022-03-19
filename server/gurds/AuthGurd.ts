import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { getIdToken } from '@/firebase/auth'
import { env } from '@/helpers/env'

@Injectable()
export class AuthGurd implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): Promise<boolean> {
    return new Promise(async (resolve, _) => {
      const { authorization, referer } = context.getArgs()[2].req.headers
      const userAgent = context.getArgs()[2].req.headers['user-agent']

      const isDevelopment = env().env === 'development'

      if (isDevelopment) {
        // GraphiQL & Postman
        if (
          (referer && referer.includes('/graphql')) ||
          (userAgent && userAgent.includes('Postman'))
        )
          return resolve(true)
      }

      if (!authorization) {
        // NOTE: 403FORBIDDENになる
        return resolve(false)
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
