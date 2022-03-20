import { gql } from '@apollo/client'

export const getShop = gql`
  query shop($shopId: ID!) {
    shop(shopId: $shopId) {
      shopId
      shopName
      openTime
      closeTime
      timeUnit
      submitFrequency
      useTimeCard
    }
  }
`
