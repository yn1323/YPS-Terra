import { onAuthStateChanged } from 'firebase/auth'
import type { User, Unsubscribe } from 'firebase/auth'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { auth } from '@/firebase/common'
import { userInfoState } from '@/recoil/userInfo'

const unsubscribe: { [key: string]: Unsubscribe | null } = {
  authChange: null,
}

export const useOnAuthStateChanged = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState)

  useEffect(() => {
    if (unsubscribe.authChange) {
      unsubscribe.authChange()
    }

    unsubscribe.authChange = onAuthStateChanged(auth, user => {
      if (!user) {
        return
      }
      // eslint-disable-next-line
      const tmp: User & { [key: string]: any } = user
      const { uid, accessToken = '', isAnonymous } = tmp
      setUserInfo({ ...userInfo, token: accessToken, uid, isAnonymous })
      document.cookie = `yps-token=${accessToken}`
      document.cookie = `uid=${uid}`
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
