import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { logOut as authLogout } from '@/firebase/auth/logOut'
import { userInfoState, defaultUserInfo } from '@/recoil/userInfo'

export const useLogout = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const setUserInfo = useSetRecoilState(userInfoState)

  const logout = async () => {
    setIsLoading(true)
    await authLogout()
    setUserInfo({ ...defaultUserInfo })
    document.cookie = `yps-token=; max-age=0`
    document.cookie = `uid=; max-age=0`

    setIsLoading(false)
    router.push('/')
  }
  return {
    isLoading,
    logout,
  }
}
