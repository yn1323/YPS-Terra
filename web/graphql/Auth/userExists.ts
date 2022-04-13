import { gql } from '@apollo/client'
import type { TypedDocumentNode } from '@apollo/client'

export const userExists: TypedDocumentNode = gql`
  query userExists($token: ID!) {
    userExists(token: $token) {
      userId
      userName
      avatar
      memberOf
    }
  }
`
