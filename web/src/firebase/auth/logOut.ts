import { signOut } from 'firebase/auth'
import { auth } from '@/firebase/common'

export const logOut = async () => {
  const result = await signOut(auth).catch(e => console.log(e))
  return !!result
}
