import { gql } from '@apollo/client'

export const userExists = gql`
  query userExists($token: ID!) {
    userExists(token: $token) {
      userId
      userName
      avatar
      memberOf
    }
  }
`
