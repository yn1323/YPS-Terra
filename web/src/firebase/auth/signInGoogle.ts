import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '@/firebase/common'

export const signInGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider).catch(e => null)
  return !!result
}
