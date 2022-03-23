import { useState } from 'react'
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
    let result
    if (type === 'google') {
      result = await signInGoogle()
    } else if (type === 'mail') {
      result = await signInMail(options)
    } else if (type === 'anonymously') {
      result = await signInAnonymously()
    }
    console.log(result)
    setIsLoading(false)
  }
  return {
    isLoading,
    signIn,
  }
}
