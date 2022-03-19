import { getAuth } from 'firebase-admin/auth'

export const getIdToken = async (authorization: string) => {
  return getAuth().verifyIdToken(authorization)
}
