import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '@/firebase/common'

type Args = {
  email: string
}
export const forgotPassword = async ({ email }: Args) => {
  try {
    await sendPasswordResetEmail(auth, email)
  } catch (e) {
    console.error(e)
  }
}
