import { signOut } from 'firebase/auth'
import { auth } from '@/firebase/common'

export const logOut = async () => {
  try {
    await signOut(auth)
  } catch (e) {
    console.error(e)
  }
}
