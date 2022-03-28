import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/common'

type Args = {
  email: string
  password: string
}
export const createUser = async ({ email, password }: Args) => {
  const result = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  ).catch(e => null)
  return !!result
}
