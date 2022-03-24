import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { logOut } from '@/firebase/auth/logOut'
import { userInfoState, defaultUserInfo } from '@/recoil/userInfo'

export const useLogout = () => {
  const [isLoading, setIsLoading] = useState(false)
  const setUserInfo = useSetRecoilState(userInfoState)

  const singOut = async () => {
    setIsLoading(true)
    await logOut()
    setUserInfo({ ...defaultUserInfo })

    setIsLoading(false)
  }
  return {
    isLoading,
    singOut,
  }
}