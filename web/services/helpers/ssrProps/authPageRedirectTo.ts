import { GetServerSidePropsContext } from 'next'
import { authCheck } from '@/services/auth/authCheck'

export const authPageRedirectTo = async (
  context: GetServerSidePropsContext
) => {
  const { isUserExist, isAuthenticated } = await authCheck(context)
  let destination = ''
  if (!isAuthenticated) {
    destination = '/login'
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
