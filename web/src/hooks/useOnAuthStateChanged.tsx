import { onAuthStateChanged } from 'firebase/auth'
import type { User, Unsubscribe } from 'firebase/auth'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { auth } from '@/firebase/common'
import { UserInfo, userInfoState } from '@/recoil/userInfo'

const unsubscribe: { [key: string]: Unsubscribe | null } = {
  authChange: null,
}

export const useOnAuthStateChanged = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState)

  const updateUserInfo = ({ uid, token, isAnonymous }: UserInfo) => {
    setUserInfo({ ...userInfo, token, uid, isAnonymous })
    document.cookie = `yps-token=${token}`
  }

  useEffect(() => {
    if (unsubscribe.authChange) {
      unsubscribe.authChange()
    }
    if (!onAuthStateChanged) {
      return
    }

    unsubscribe.authChange = onAuthStateChanged(auth, user => {
      if (!user) {
        return
      }
      const tmp: User & { [key: string]: any } = user
      const { uid, accessToken = '', isAnonymous } = tmp
      updateUserInfo({ uid, token: accessToken, isAnonymous })
    })
  }, [])
}
