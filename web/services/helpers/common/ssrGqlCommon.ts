import type { ErrorPolicy } from '@apollo/client'
import { GetServerSidePropsContext } from 'next'
import { getCookieValue } from '@/helpers/string'

export const ssrGqlCommon = (context: GetServerSidePropsContext) => {
  return {
    context: {
      headers: {
        authorization: getCookieValue(context.req.headers.cookie),
      },
    },
    errorPolicy: 'all' as ErrorPolicy,
  }
}
