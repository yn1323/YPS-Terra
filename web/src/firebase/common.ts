import { initializeApp } from 'firebase/app'
import {
  getAuth,
  onAuthStateChanged as onFirebaseAuthStateChanged,
  GoogleAuthProvider,
  signInAnonymously,
  signOut,
} from 'firebase/auth'
import { env } from '@/config/env'

export type User = {
  displayName: string | null | undefined
  email: string | null | undefined
}

const firebaseConfig = {
  apiKey: env.apiKey,
  authDomain: env.authDomain,
  projectId: env.projectId,
  storageBucket: env.storageBucket,
  messagingSenderId: env.messagingSenderId,
  appId: env.appId,
}

const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()

export function login(): void {
  const auth = getAuth(app)
  signInAnonymously(auth)

  onAuthStateChanged()
}

export function logout(): Promise<void> {
  return new Promise((resolve, reject) => {
    const auth = getAuth(app)
    signOut(auth)
      .then(() => resolve())
      .catch(error => reject(error))
  })
}

export const onAuthStateChanged = () => {
  const auth = getAuth(app)
  // TODO: ログインごとに重複して実行されて増える
  onFirebaseAuthStateChanged(auth, user => {
    const userInfo: User | null = user
      ? {
          displayName: user?.displayName,
          email: user?.email,
        }
      : null
    console.log(user)
    user?.getIdToken().then(token => (document.cookie = `yps-token=${token}`))
  })
}
