import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, TwitterAuthProvider } from 'firebase/auth'
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

export const googleProvider = new GoogleAuthProvider()
export const twitterProvider = new TwitterAuthProvider()
export const auth = getAuth()
