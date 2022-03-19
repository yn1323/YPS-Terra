import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

type Collections = {
  [key in string]: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>
}
export const collections: Collections = {
  organization: null,
  shop: null,
  user: null,
  operation: null,
  requestCondition: null,
  request: null,
  shift: null,
  timeCard: null,
  temporaryClosed: null,
  announce: null,
} as const
let db: FirebaseFirestore.Firestore

export const firebaseInit = () => {
  initializeApp({
    credential: cert({
      projectId: process.env.project_id,
      clientEmail: process.env.client_email,
      privateKey: process.env.private_key,
    }),
  })
  db = getFirestore()
  Object.keys(collections).forEach(
    collectionName =>
      (collections[collectionName] = db.collection(collectionName))
  )
}
export const getRandomId = () => db.collection('any').doc().id
