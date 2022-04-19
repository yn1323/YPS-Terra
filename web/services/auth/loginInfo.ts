import { GetServerSidePropsContext } from 'next'
import client from '@/config/apollo-client'
import { getLoginInfo } from '@/graphql/user/getLoginInfo'
import { getCookieValue } from '@/helpers/string'
import { getErrorCode } from '@/services/helpers/common/getErrorCode'
import { ssrGqlCommon } from '@/services/helpers/common/ssrGqlCommon'

export const loginInfo = async (context: GetServerSidePropsContext) => {
  const { data, errors } = await client.query({
    query: getLoginInfo,
    variables: { userId: getCookieValue(context.req.headers.cookie, 'uid') },
    ...ssrGqlCommon(context),
  })

  const ret = {
    loginInfo: data,
    isError: getErrorCode(errors) !== 200,
  }

  return ret
}
