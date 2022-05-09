import { GetServerSidePropsContext } from 'next'
import { authCheck } from '@/services/auth/authCheck'

export const registerPageRedirectTo = async (
  context: GetServerSidePropsContext
) => {
  const {
    isUserExist,
    isAuthenticated,
    userInfo: { userExists },
  } = await authCheck(context)
  let destination = ''
  const { shopId = '' } = context.query

  const alreadyRegisteredShop: boolean =
    isUserExist && userExists.memberOf.includes(shopId)

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
    return {
      redirect: {
        permanent: false,
        destination,
      },
    }
  }
}
