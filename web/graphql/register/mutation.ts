import { gql } from '@apollo/client'

export const registerAdmin = gql`
  mutation ($shopId: ID!, $userName: String!) {
    registerAdmin {
      userId
      userName
      avatar
      memberOf
    }
  }
`

// export const createAdmin = gql`
//   mutation createAdmin(
//     $shopName: String!
//     $openTime: Timestamp!
//     $closeTime: Timestamp!
//     $timeUnit: Int!
//     $submitFrequency: String!
//     $useTimeCard: Boolean!
//   ) {
//     shop(
//       shopName: $shopName
//       openTime: $openTime
//       closeTime: $closeTime
//       timeUnit: $timeUnit
//       submitFrequency: $submitFrequency
//       useTimeCard: $useTimeCard
//     ) {
//       shopId
//       shopName
//       openTime
//       closeTime
//       timeUnit
//       submitFrequency
//       avatar
//       useTimeCard
//       closedWeekday
//       shopOwnerIds
//     }
//     user(shopId: $shopId, userName: $userName) {
//       userId
//       userName
//       avatar
//       memberOf
//     }
//   }
// `

// export const createUser = gql`
//   mutation createUser($shopId: ID!, $userName: String!) {
//     user(shopId: $shopId, userName: $userName) {
//       userId
//       userName
//       avatar
//       memberOf
//     }
//   }
// `
