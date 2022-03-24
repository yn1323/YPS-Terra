import { useState } from 'react'
import { createUser } from '@/firebase/auth/createUser'
import { forgotPassword } from '@/firebase/auth/forgotPassword'
import { signInGoogle } from '@/firebase/auth/signInGoogle'
import { signInMail } from '@/firebase/auth/signInMail'
import { signInAnonymously } from '@/firebase/auth/singInAnonymously'
type EmailSignIn = {
  email: string
  password: string
}
export const useLogIn = () => {
  const [isLoading, setIsLoading] = useState(false)
  const signIn = async (
    type: 'google' | 'mail' | 'anonymously',
    options: EmailSignIn = { email: '', password: '' }
  ) => {
    setIsLoading(true)
    if (type === 'google') {
      await signInGoogle()
    } else if (type === 'mail') {
      await signInMail(options)
    } else if (type === 'anonymously') {
      await signInAnonymously()
    }
    setIsLoading(false)
  }
  const signUp = async (options: EmailSignIn = { email: '', password: '' }) => {
    setIsLoading(true)
    await createUser(options)
    setIsLoading(false)
  }
  const refreshPassword = async ({ email }: { email: string }) => {
    setIsLoading(true)
    await forgotPassword({ email })
    setIsLoading(false)
  }
  return {
    isLoading,
    signIn,
    signUp,
    forgotPassword,
    refreshPassword,
  }
}
