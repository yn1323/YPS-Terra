import { initializeApp } from 'firebase/app'
import {
  getAuth,
  onAuthStateChanged as onFirebaseAuthStateChanged,
  signInWithRedirect,
  GoogleAuthProvider,
  signInAnonymously,
  signOut,
} from 'firebase/auth'

export type User = {
  displayName: string | null | undefined
  email: string | null | undefined
}

const firebaseConfig = {
  apiKey: 'AIzaSyB30ohJVC66S-573ggnuSq6vavzLOelNhE',
  authDomain: 'yps-development.firebaseapp.com',
  projectId: 'yps-development',
  storageBucket: 'yps-development.appspot.com',
  messagingSenderId: '665154729569',
  appId: '1:665154729569:web:5bf43467034141e8e0dc20',
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
  onFirebaseAuthStateChanged(auth, user => {
    const userInfo: User | null = user
      ? {
          displayName: user?.displayName,
          email: user?.email,
        }
      : null
    // TODO: 脆弱性対策(https://qiita.com/NewGyu/items/0b3111b61405366a76c5)
    user?.getIdToken().then(token => localStorage.setItem('token', token ?? ''))
  })
}
