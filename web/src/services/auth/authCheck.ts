import { GetServerSidePropsContext } from 'next'
import client from '@/config/apollo-client'
import { userExists } from '@/graphql/Auth/userExists'
import { getCookieValue } from '@/helpers/string'
import { ssrGqlCommon } from '@/services/common/ssrGqlCommon'

export const authCheck = async (context: GetServerSidePropsContext) => {
  const { data, errors } = await client.query({
    query: userExists,
    variables: { token: getCookieValue(context.req.headers.cookie) },
    ...ssrGqlCommon(context),
  })
  const ret = {
    userInfo: data,
    isAuthenticated: !!errors,
    isUserExist: !!data,
  }
  // console.log(ret)

  return ret
}
