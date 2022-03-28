import { signInAnonymously as singIn } from 'firebase/auth'
import type { User } from 'firebase/auth'
import { auth } from '@/firebase/common'

export const signInAnonymously = async (): Promise<User | undefined> => {
  try {
    const { user } = await singIn(auth)
    return user
  } catch (e) {
    console.error(e)
    return
  }
}
