import { onAuthStateChanged } from 'firebase/auth'
import type { User } from 'firebase/auth'
import type { Unsubscribe } from 'firebase/auth'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { auth } from '@/firebase/common'
import { userInfoState } from '@/recoil/userInfo'

type UpdateObjects = {
  uid: string
  token: string
}

const unsubscribe: { [key: string]: Unsubscribe | null } = {
  authChange: null,
}

export const useOnAuthStateChanged = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState)

  const updateUserInfo = ({ uid, token }: UpdateObjects) => {
    setUserInfo({ ...userInfo, jwt: token, uid })
    document.cookie = `yps-token=${token}`
  }

  useEffect(() => {
    if (unsubscribe.authChange) {
      unsubscribe.authChange()
    }

    unsubscribe.authChange = onAuthStateChanged(auth, user => {
      if (!user) {
        return
      }
      const hoge: User & { [key: string]: any } = user
      const { uid, accessToken = '' } = hoge
      updateUserInfo({ uid, token: accessToken })
    })
  }, [])
}
