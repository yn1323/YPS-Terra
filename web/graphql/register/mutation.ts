import { gql } from '@apollo/client'

export const registerAdminUserAndShop = gql`
  mutation registerAdminUserAndShop(
    $userId: ID!
    $userName: String!
    $shopName: String!
    $openTime: Timestamp!
    $closeTime: Timestamp!
    $timeUnit: Int!
    $submitFrequency: String!
    $useTimeCard: Boolean!
  ) {
    registerAdminUserAndShop(
      userId: $userId
      userName: $userName
      shopName: $shopName
      openTime: $openTime
      closeTime: $closeTime
      timeUnit: $timeUnit
      submitFrequency: $submitFrequency
      useTimeCard: $useTimeCard
    ) {
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
    }
  }
`

export const registerUser = gql`
  mutation registerUser($userId: ID!, $shopId: ID!, $userName: String!) {
    registerUser(userId: $userId, shopId: $shopId, userName: $userName) {
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
    }
  }
`
