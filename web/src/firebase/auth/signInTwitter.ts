import { signInWithPopup } from 'firebase/auth'
import type { User } from 'firebase/auth'
import { auth, twitterProvider } from '@/firebase/common'

export const signInTwitter = async (): Promise<User | undefined> => {
  try {
    const { user } = await signInWithPopup(auth, twitterProvider)
    return user
  } catch (e) {
    console.error(e)
    return
  }
}
