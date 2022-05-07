import { useRouter } from 'next/router'
import { useLogIn } from '@/hooks/useLogIn'
import { showToast } from '@/localHelpers/ui'

type PropTypes = {
  email: string
  password: string
}

export const useEmailLogin = () => {
  const router = useRouter()
  const {
    query: { shopId = '' },
  } = router
  const { signUp, refreshPassword, signIn, isLoading } = useLogIn()

  const emailSignUp = async ({ email, password }: PropTypes) => {
    const result = await signUp({ email, password })
    if (result) {
      if (shopId) {
        router.push({ pathname: '/register', query: { shopId } })
      } else {
        router.push('/register')
      }
    } else {
      showToast({
        title: 'メールアドレスが既に使用されています',
        description:
          '[パスワードを忘れた方]からパスワードをリセットしてください',
        status: 'error',
      })
    }
  }

  const emailLogin = async ({ email, password }: PropTypes) => {
    const result = await signIn('mail', { email, password })
    if (result) {
      if (shopId) {
        router.push({ pathname: '/register', query: { shopId } })
      } else {
        router.push('/register')
      }
    } else {
      showToast({
        title: 'メールアドレスまたは、パスワードが誤っています',
        status: 'error',
      })
    }
  }

  const emailReset = async ({ email }: { email: string }) => {
    const result = await refreshPassword({ email })
    if (result) {
      showToast({
        title: '記載のメールアドレスにリセット用URLを送付しました',
        status: 'success',
      })
    } else {
      showToast({
        title: '未登録のメールアドレスです',
        status: 'error',
      })
    }
  }

  return {
    emailSignUp,
    emailLogin,
    emailReset,
    isLoading,
  }
}
