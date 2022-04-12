import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/common'

type Args = {
  email: string
  password: string
}
export const signInMail = async ({ email, password }: Args) => {
  const result = await signInWithEmailAndPassword(auth, email, password).catch(
    e => console.log(e)
  )
  return !!result
}
