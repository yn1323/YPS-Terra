import { GetServerSidePropsContext } from 'next'
import { authCheck } from 'services/auth/authCheck'

export const registerPageRedirectTo = async (
  context: GetServerSidePropsContext
) => {
  const { isUserExist, isAuthenticated } = await authCheck(context)
  let destination = ''
  if (!isAuthenticated) {
    destination = '/login'
  }
  if (isAuthenticated && isUserExist) {
    destination = '/dashboard'
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
