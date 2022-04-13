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
      userId
      userName
      avatar
      memberOf
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
  }
`
