import { signInWithPopup } from 'firebase/auth'
import { auth, twitterProvider } from '@/firebase/common'

export const signInTwitter = async () => {
  const result = await signInWithPopup(auth, twitterProvider).catch(e => null)
  return !!result
}
