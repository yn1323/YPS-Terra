import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '@/firebase/common'

type Args = {
  email: string
}
export const forgotPassword = async ({ email }: Args) => {
  let result = true
  await sendPasswordResetEmail(auth, email).catch(e => {
    console.log(e)
    result = false
  })
  return result
}
