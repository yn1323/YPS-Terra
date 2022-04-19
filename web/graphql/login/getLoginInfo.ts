import { gql } from '@apollo/client'

export const getLoginInfo = gql`
  query loginInfo($userId: ID!) {
    loginInfo(userId: $userId) {
      user {
        userId
        userName
        avatar
        memberOf
      }
      shops {
        shopId
        shopName
        openTime
        closeTime
        timeUnit
        submitFrequency
        avatar
        useTimeCard
        closedWeekday
        shopOwnerIds
      }
      organizations {
        organizationId
        organizationName
        shopIds
        organizationOwnerIds
      }
      structure {
        organizationId
        shopId
        userId
      }
      names {
        user {
          id
          name
        }
        shop {
          id
          name
        }
        organization {
          id
          name
        }
      }
    }
  }
`
