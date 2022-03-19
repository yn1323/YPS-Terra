import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** `Date` type as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any
}

export type Mutation = {
  __typename?: 'Mutation'
  shop: Shop
}

export type MutationShopArgs = {
  closeTime: Scalars['Timestamp']
  openTime: Scalars['Timestamp']
  shopName: Scalars['String']
  submitFrequency: Scalars['String']
  timeUnit: Scalars['Int']
  useTimeCard: Scalars['Boolean']
}

export type Query = {
  __typename?: 'Query'
  shop: Shop
}

export type QueryShopArgs = {
  shopId: Scalars['ID']
}

export type Shop = {
  __typename?: 'Shop'
  closeTime: Scalars['Timestamp']
  openTime: Scalars['Timestamp']
  shopId: Scalars['ID']
  shopName: Scalars['String']
  submitFrequency: Scalars['String']
  timeUnit: Scalars['Int']
  useTimeCard: Scalars['Boolean']
}

export type Subscription = {
  __typename?: 'Subscription'
  shop: Shop
}

export type SubscriptionShopArgs = {
  shopId: Scalars['ID']
}

export type ShopQueryVariables = Exact<{
  shopId: Scalars['ID']
}>

export type ShopQuery = {
  __typename?: 'Query'
  shop: {
    __typename?: 'Shop'
    shopId: string
    shopName: string
    openTime: any
    closeTime: any
    timeUnit: number
    submitFrequency: string
    useTimeCard: boolean
  }
}

export const ShopDocument = gql`
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

/**
 * __useShopQuery__
 *
 * To run a query within a React component, call `useShopQuery` and pass it any options that fit your needs.
 * When your component renders, `useShopQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShopQuery({
 *   variables: {
 *      shopId: // value for 'shopId'
 *   },
 * });
 */
export function useShopQuery(
  baseOptions: Apollo.QueryHookOptions<ShopQuery, ShopQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ShopQuery, ShopQueryVariables>(ShopDocument, options)
}
export function useShopLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ShopQuery, ShopQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ShopQuery, ShopQueryVariables>(
    ShopDocument,
    options
  )
}
export type ShopQueryHookResult = ReturnType<typeof useShopQuery>
export type ShopLazyQueryHookResult = ReturnType<typeof useShopLazyQuery>
export type ShopQueryResult = Apollo.QueryResult<ShopQuery, ShopQueryVariables>
