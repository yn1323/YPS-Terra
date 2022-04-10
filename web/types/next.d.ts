import { NextPage } from 'next'
import type { Router } from 'next/dist/client/router'
import type { CompletePrivateRouteInfo } from 'next/dist/shared/lib/router/router'
import { ReactElement } from 'react'

declare module 'next' {
  type NextPageWithLayout<P = { [key: string]: any }, IP = P> = NextPage<
    P,
    IP
  > & {
    getLayout?: (page: ReactElement) => ReactElement
  }
}

declare module 'next/app' {
  export declare type AppProps = Pick<
    CompletePrivateRouteInfo,
    'Component' | 'err'
  > & { router: Router } & Record<string, any> & {
      Component: {
        getLayout?: (page: JSX.Element) => JSX.Element
      }
    }
}
