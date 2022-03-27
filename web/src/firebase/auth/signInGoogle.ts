import { signInWithPopup } from 'firebase/auth'
import type { User } from 'firebase/auth'
import { auth, googleProvider } from '@/firebase/common'

export const signInGoogle = async (): Promise<User | undefined> => {
  try {
    const { user } = await signInWithPopup(auth, googleProvider)
    return user
  } catch (e) {
    console.error(e)
    return
  }
}
