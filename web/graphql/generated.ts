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

export type Announce = {
  __typename?: 'Announce'
  announceDateFrom: Scalars['Timestamp']
  announceDateTo: Scalars['Timestamp']
  message: Scalars['String']
  organizationId: Scalars['ID']
  shopId: Scalars['ID']
}

export type Mutation = {
  __typename?: 'Mutation'
  announce: Announce
  operation: Array<Operation>
  organization: Organization
  request: Request
  requestCondition: RequestCondition
  shift: Shift
  shop: Shop
  temporaryClosed: TemporaryClosed
  timeCard: TimeCard
  user: User
}

export type MutationAnnounceArgs = {
  announceDateFrom: Scalars['Timestamp']
  announceDateTo: Scalars['Timestamp']
  message: Scalars['String']
  organizationId: Scalars['ID']
  shopId: Scalars['ID']
}

export type MutationOperationArgs = {
  shopId: Scalars['ID']
}

export type MutationOrganizationArgs = {
  organizationName: Scalars['String']
  organizationOwnerId: Scalars['ID']
  shopId: Scalars['ID']
}

export type MutationRequestArgs = {
  breakFrom: Scalars['Timestamp']
  breakTo: Scalars['Timestamp']
  shopId: Scalars['ID']
  userId: Scalars['ID']
  workFrom: Scalars['Timestamp']
  workTo: Scalars['Timestamp']
}

export type MutationRequestConditionArgs = {
  dateFrom: Scalars['Timestamp']
  dateTo: Scalars['Timestamp']
  done: Scalars['Boolean']
  shopId: Scalars['ID']
  userId: Scalars['ID']
}

export type MutationShiftArgs = {
  breakFrom: Scalars['Timestamp']
  breakTo: Scalars['Timestamp']
  shopId: Scalars['ID']
  userId: Scalars['ID']
  workFrom: Scalars['Timestamp']
  workTo: Scalars['Timestamp']
}

export type MutationShopArgs = {
  closeTime: Scalars['Timestamp']
  openTime: Scalars['Timestamp']
  shopName: Scalars['String']
  submitFrequency: Scalars['String']
  timeUnit: Scalars['Int']
  useTimeCard: Scalars['Boolean']
}

export type MutationTemporaryClosedArgs = {
  date: Scalars['Timestamp']
  organizationId: Scalars['ID']
  shopId: Scalars['ID']
}

export type MutationTimeCardArgs = {
  breakFrom: Scalars['Timestamp']
  breakTo: Scalars['Timestamp']
  shopId: Scalars['ID']
  userId: Scalars['ID']
  workFrom: Scalars['Timestamp']
  workTo: Scalars['Timestamp']
}

export type MutationUserArgs = {
  shopId: Scalars['ID']
  userName: Scalars['String']
}

export type Operation = {
  __typename?: 'Operation'
  color: Scalars['String']
  icon: Scalars['String']
  operationId: Scalars['ID']
  operationName: Scalars['String']
}

export type Organization = {
  __typename?: 'Organization'
  organizationId: Scalars['ID']
  organizationName: Scalars['String']
  organizationOwnerIds: Array<Scalars['ID']>
  shopIds: Array<Scalars['ID']>
}

export type Query = {
  __typename?: 'Query'
  announce: Array<Announce>
  operations: Array<Operation>
  organization: Organization
  request: Array<Request>
  requestCondition: Array<RequestCondition>
  shift: Array<Shift>
  shop: Shop
  temporaryClosed: Array<TemporaryClosed>
  timeCard: Array<TimeCard>
  user: User
}

export type QueryAnnounceArgs = {
  organizationId: Scalars['ID']
  shopId: Scalars['ID']
}

export type QueryOperationsArgs = {
  shopId: Scalars['ID']
}

export type QueryOrganizationArgs = {
  organizationId: Scalars['ID']
}

export type QueryRequestArgs = {
  shopId: Scalars['ID']
  userId: Scalars['ID']
}

export type QueryRequestConditionArgs = {
  shopId: Scalars['ID']
  userId: Scalars['ID']
}

export type QueryShiftArgs = {
  shopId: Scalars['ID']
  userId: Scalars['ID']
}

export type QueryShopArgs = {
  shopId: Scalars['ID']
}

export type QueryTemporaryClosedArgs = {
  organizationId: Scalars['ID']
  shopId: Scalars['ID']
}

export type QueryTimeCardArgs = {
  shopId: Scalars['ID']
  userId: Scalars['ID']
}

export type QueryUserArgs = {
  userId: Scalars['ID']
}

export type Request = {
  __typename?: 'Request'
  breakFrom: Scalars['Timestamp']
  breakTo: Scalars['Timestamp']
  shopId: Scalars['ID']
  userId: Scalars['ID']
  workFrom: Scalars['Timestamp']
  workTo: Scalars['Timestamp']
}

export type RequestCondition = {
  __typename?: 'RequestCondition'
  dateFrom: Scalars['Timestamp']
  dateTo: Scalars['Timestamp']
  done: Scalars['Boolean']
  shopId: Scalars['ID']
  userId: Scalars['ID']
}

export type Shift = {
  __typename?: 'Shift'
  breakFrom: Scalars['Timestamp']
  breakTo: Scalars['Timestamp']
  shopId: Scalars['ID']
  userId: Scalars['ID']
  workFrom: Scalars['Timestamp']
  workTo: Scalars['Timestamp']
}

export type Shop = {
  __typename?: 'Shop'
  avatar: Scalars['String']
  closeTime: Scalars['Timestamp']
  closedWeekday: Array<Scalars['Int']>
  openTime: Scalars['Timestamp']
  shopId: Scalars['ID']
  shopName: Scalars['String']
  shopOwnerIds: Array<Scalars['ID']>
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

export type TemporaryClosed = {
  __typename?: 'TemporaryClosed'
  date: Scalars['Timestamp']
  organizationId: Scalars['ID']
  shopId: Scalars['ID']
}

export type TimeCard = {
  __typename?: 'TimeCard'
  breakFrom: Scalars['Timestamp']
  breakTo: Scalars['Timestamp']
  shopId: Scalars['ID']
  userId: Scalars['ID']
  workFrom: Scalars['Timestamp']
  workTo: Scalars['Timestamp']
}

export type User = {
  __typename?: 'User'
  avatar: Scalars['String']
  memberOf: Array<Scalars['ID']>
  userId: Scalars['ID']
  userName: Scalars['String']
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

export type GetUserQueryVariables = Exact<{
  userId: Scalars['ID']
}>

export type GetUserQuery = {
  __typename?: 'Query'
  user: {
    __typename?: 'User'
    userId: string
    userName: string
    avatar: string
    memberOf: Array<string>
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
export const GetUserDocument = gql`
  query getUser($userId: ID!) {
    user(userId: $userId) {
      userId
      userName
      avatar
      memberOf
    }
  }
`

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options
  )
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options
  )
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>
export type GetUserQueryResult = Apollo.QueryResult<
  GetUserQuery,
  GetUserQueryVariables
>
