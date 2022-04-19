import { signInAnonymously as singIn } from 'firebase/auth'
import { auth } from '@/firebase/common'

export const signInAnonymously = async () => {
  const result = await singIn(auth).catch(e => console.log(e))
  return !!result
}
