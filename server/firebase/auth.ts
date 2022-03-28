import { DecodedIdToken, getAuth } from 'firebase-admin/auth'

export const getAuthFromToken = async (
  authorization: string
): Promise<DecodedIdToken | null> => {
  return getAuth()
    .verifyIdToken(authorization)
    .catch(e => null)
}
