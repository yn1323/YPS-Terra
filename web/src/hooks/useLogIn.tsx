import { useState } from 'react'
import { createUser } from '@/firebase/auth/createUser'
import { forgotPassword } from '@/firebase/auth/forgotPassword'
import { signInGoogle } from '@/firebase/auth/signInGoogle'
import { signInMail } from '@/firebase/auth/signInMail'
import { signInTwitter } from '@/firebase/auth/signInTwitter'
import { signInAnonymously } from '@/firebase/auth/singInAnonymously'

type EmailSignIn = {
  email: string
  password: string
}

export const useLogIn = () => {
  const [isLoading, setIsLoading] = useState(false)
  const signIn = async (
    type: 'google' | 'mail' | 'anonymously' | 'twitter',
    options: EmailSignIn = { email: '', password: '' }
  ) => {
    let result = false
    setIsLoading(true)
    if (type === 'google') {
      result = await signInGoogle()
    } else if (type === 'mail') {
      result = await signInMail(options)
    } else if (type === 'anonymously') {
      result = await signInAnonymously()
    } else if (type === 'twitter') {
      result = await signInTwitter()
    }
    if (!result) {
      setIsLoading(false)
    }
    return result
  }

  const signUp = async (options: EmailSignIn = { email: '', password: '' }) => {
    setIsLoading(true)
    const result = await createUser(options)
    setIsLoading(false)
    return result
  }
  const refreshPassword = async ({ email }: { email: string }) => {
    setIsLoading(true)
    const result = await forgotPassword({ email })
    setIsLoading(false)
    return result
  }
  return {
    isLoading,
    signIn,
    signUp,
    forgotPassword,
    refreshPassword,
  }
}
