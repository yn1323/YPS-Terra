import { signInWithEmailAndPassword } from 'firebase/auth'
import type { User } from 'firebase/auth'
import { auth } from '@/firebase/common'

type Args = {
  email: string
  password: string
}
export const signInMail = async ({
  email,
  password,
}: Args): Promise<User | undefined> => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    return user
  } catch (e) {
    console.error(e)
    return
  }
}
