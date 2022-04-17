import { GetServerSidePropsContext } from 'next'
import client from '@/config/apollo-client'
import { userExists } from '@/graphql/check/user'
import { getCookieValue } from '@/helpers/string'
import { getErrorCode } from '@/services/helpers/common/getErrorCode'
import { ssrGqlCommon } from '@/services/helpers/common/ssrGqlCommon'

export const authCheck = async (context: GetServerSidePropsContext) => {
  const { data, errors } = await client.query({
    query: userExists,
    variables: { token: getCookieValue(context.req.headers.cookie) },
    ...ssrGqlCommon(context),
  })
  const ret = {
    userInfo: data,
    isAuthenticated: getErrorCode(errors) !== 403,
    isUserExist: getErrorCode(errors) !== 404 && !!data?.userExists?.userId,
  }

  return ret
}
