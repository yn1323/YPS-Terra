import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { getIdToken } from '@/firebase/auth'
import { env } from '@/helpers/env'

@Injectable()
export class AuthGurd implements CanActivate {
  canActivate(context: ExecutionContext): Promise<boolean> {
    return new Promise(async (resolve, _) => {
      const isDevelopment = env().env === 'development'
      const { req } = context.getArgs()[2]
      const isGraphiQL = !req
      if (isDevelopment && isGraphiQL) {
        return resolve(true)
      }

      const { authorization } = req.headers
      const userAgent = context.getArgs()[2].req.headers['user-agent']

      if (isDevelopment && userAgent && userAgent.includes('Postman')) {
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
