import { GetServerSidePropsContext } from 'next'
import { authCheck } from 'services/auth/authCheck'

export const loginPageRedirectTo = async (
  context: GetServerSidePropsContext
) => {
  const { isUserExist, isAuthenticated } = await authCheck(context)
  let destination = ''
  if (isAuthenticated && isUserExist) {
    destination = '/dashboard'
  }
  if (isAuthenticated && !isUserExist) {
    destination = '/register'
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
