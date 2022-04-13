import { GetServerSidePropsContext } from 'next'
import { getErrorCode } from 'services/helpers/common/getErrorCode'
import { ssrGqlCommon } from 'services/helpers/common/ssrGqlCommon'
import client from '@/config/apollo-client'
import { userExists } from '@/graphql/auth/userExists'
import { getCookieValue } from '@/helpers/string'

export const authCheck = async (context: GetServerSidePropsContext) => {
  const { data, errors } = await client.query({
    query: userExists,
    variables: { token: getCookieValue(context.req.headers.cookie) },
    ...ssrGqlCommon(context),
  })
  const ret = {
    userInfo: data,
    isAuthenticated: getErrorCode(errors) !== 403,
    isUserExist: getErrorCode(errors) === 404,
  }

  return ret
}
