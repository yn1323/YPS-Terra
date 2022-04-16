import { DecodedIdToken, getAuth } from 'firebase-admin/auth'

export const getAuthFromToken = async (
  authorization: string
): Promise<DecodedIdToken | void> => {
  return await getAuth()
    .verifyIdToken(authorization)
    .catch(e => console.log(e))
}
