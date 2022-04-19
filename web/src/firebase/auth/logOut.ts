import { signOut } from 'firebase/auth'
import { auth } from '@/firebase/common'

export const logOut = async () => {
  await signOut(auth).catch(e => console.log(e))
}
