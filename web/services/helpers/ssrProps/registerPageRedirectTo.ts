import { GetServerSidePropsContext } from 'next'
import { authCheck } from '@/services/auth/authCheck'

export const registerPageRedirectTo = async (
  context: GetServerSidePropsContext
) => {
  const { isUserExist, isAuthenticated, userInfo } = await authCheck(context)
  let destination = ''
  const ret: { [key: string]: any } = {
    isUserExist,
  }
  const shopId = Array.isArray(context.query.shopId)
    ? context.query.shopId.join(',')
    : context.query.shopId || ''

  const alreadyRegisteredShop: boolean =
    isUserExist && userInfo && userInfo.userExists.memberOf.includes(shopId)

  if (!shopId) {
    if (isAuthenticated && isUserExist) {
      destination = '/dashboard'
    }
  } else {
    if (isAuthenticated && alreadyRegisteredShop) {
      destination = '/dashboard'
    }
  }

  if (!isAuthenticated) {
    destination = '/login'
  }
  if (destination) {
    ret.redirect = {
      redirect: {
        permanent: false,
        destination,
      },
    }
  }

  return ret
}
