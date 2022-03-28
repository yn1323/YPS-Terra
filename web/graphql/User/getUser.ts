import { gql } from '@apollo/client'

export const getUser = gql`
  query getUser($userId: ID!) {
    user(userId: $userId) {
      userId
      userName
      avatar
      memberOf
    }
  }
`
