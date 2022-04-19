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

export type LoginInfo = {
  __typename?: 'LoginInfo'
  names: Names
  organizations: Array<Organization>
  shops: Array<Shop>
  structure: Array<StructureCombination>
  user: User
}

export type Mutation = {
  __typename?: 'Mutation'
  announce: Announce
  operation: Array<Operation>
  organization: Organization
  registerAdminUserAndShop: LoginInfo
  registerUser: LoginInfo
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

export type MutationRegisterAdminUserAndShopArgs = {
  closeTime: Scalars['Timestamp']
  openTime: Scalars['Timestamp']
  shopName: Scalars['String']
  submitFrequency: Scalars['String']
  timeUnit: Scalars['Int']
  useTimeCard: Scalars['Boolean']
  userId: Scalars['ID']
  userName: Scalars['String']
}

export type MutationRegisterUserArgs = {
  shopId: Scalars['ID']
  userId: Scalars['ID']
  userName: Scalars['String']
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
  userId: Scalars['ID']
  userName: Scalars['String']
}

export type NameObject = {
  __typename?: 'NameObject'
  id: Scalars['ID']
  name: Scalars['String']
}

export type Names = {
  __typename?: 'Names'
  organization: Array<NameObject>
  shop: Array<NameObject>
  user: Array<NameObject>
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
  findOrganizationsByShopIds: Array<Organization>
  loginInfo: LoginInfo
  operations: Array<Operation>
  organization: Organization
  request: Array<Request>
  requestCondition: Array<RequestCondition>
  shift: Array<Shift>
  shop: Shop
  shops: Array<Shop>
  temporaryClosed: Array<TemporaryClosed>
  timeCard: Array<TimeCard>
  user: User
  userExists: User
}

export type QueryAnnounceArgs = {
  organizationId: Scalars['ID']
  shopId: Scalars['ID']
}

export type QueryFindOrganizationsByShopIdsArgs = {
  shopIds: Array<Scalars['ID']>
}

export type QueryLoginInfoArgs = {
  userId: Scalars['ID']
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

export type QueryShopsArgs = {
  shopIds: Array<Scalars['ID']>
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

export type QueryUserExistsArgs = {
  token: Scalars['ID']
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

export type StructureCombination = {
  __typename?: 'StructureCombination'
  organizationId: Scalars['ID']
  shopId: Scalars['ID']
  userId: Scalars['ID']
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

export type UserExistsQueryVariables = Exact<{
  token: Scalars['ID']
}>

export type UserExistsQuery = {
  __typename?: 'Query'
  userExists: {
    __typename?: 'User'
    userId: string
    userName: string
    avatar: string
    memberOf: Array<string>
  }
}

export type RegisterAdminUserAndShopMutationVariables = Exact<{
  userId: Scalars['ID']
  userName: Scalars['String']
  shopName: Scalars['String']
  openTime: Scalars['Timestamp']
  closeTime: Scalars['Timestamp']
  timeUnit: Scalars['Int']
  submitFrequency: Scalars['String']
  useTimeCard: Scalars['Boolean']
}>

export type RegisterAdminUserAndShopMutation = {
  __typename?: 'Mutation'
  registerAdminUserAndShop: {
    __typename?: 'LoginInfo'
    user: {
      __typename?: 'User'
      userId: string
      userName: string
      avatar: string
      memberOf: Array<string>
    }
    shops: Array<{
      __typename?: 'Shop'
      shopId: string
      shopName: string
      openTime: any
      closeTime: any
      timeUnit: number
      submitFrequency: string
      avatar: string
      useTimeCard: boolean
      closedWeekday: Array<number>
      shopOwnerIds: Array<string>
    }>
    organizations: Array<{
      __typename?: 'Organization'
      organizationId: string
      organizationName: string
      shopIds: Array<string>
      organizationOwnerIds: Array<string>
    }>
  }
}

export type RegisterUserMutationVariables = Exact<{
  userId: Scalars['ID']
  shopId: Scalars['ID']
  userName: Scalars['String']
}>

export type RegisterUserMutation = {
  __typename?: 'Mutation'
  registerUser: {
    __typename?: 'LoginInfo'
    user: {
      __typename?: 'User'
      userId: string
      userName: string
      avatar: string
      memberOf: Array<string>
    }
    shops: Array<{
      __typename?: 'Shop'
      shopId: string
      shopName: string
      openTime: any
      closeTime: any
      timeUnit: number
      submitFrequency: string
      avatar: string
      useTimeCard: boolean
      closedWeekday: Array<number>
      shopOwnerIds: Array<string>
    }>
    organizations: Array<{
      __typename?: 'Organization'
      organizationId: string
      organizationName: string
      shopIds: Array<string>
      organizationOwnerIds: Array<string>
    }>
  }
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

export type Unnamed_1_QueryVariables = Exact<{
  userId: Scalars['ID']
}>

export type Unnamed_1_Query = {
  __typename?: 'Query'
  loginInfo: {
    __typename?: 'LoginInfo'
    user: {
      __typename?: 'User'
      userId: string
      userName: string
      avatar: string
      memberOf: Array<string>
    }
    shops: Array<{
      __typename?: 'Shop'
      shopId: string
      shopName: string
      openTime: any
      closeTime: any
      timeUnit: number
      submitFrequency: string
      avatar: string
      useTimeCard: boolean
      closedWeekday: Array<number>
      shopOwnerIds: Array<string>
    }>
    organizations: Array<{
      __typename?: 'Organization'
      organizationId: string
      organizationName: string
      shopIds: Array<string>
      organizationOwnerIds: Array<string>
    }>
    structure: Array<{
      __typename?: 'StructureCombination'
      organizationId: string
      shopId: string
      userId: string
    }>
    names: {
      __typename?: 'Names'
      user: Array<{ __typename?: 'NameObject'; id: string; name: string }>
      shop: Array<{ __typename?: 'NameObject'; id: string; name: string }>
      organization: Array<{
        __typename?: 'NameObject'
        id: string
        name: string
      }>
    }
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

export const UserExistsDocument = gql`
  query userExists($token: ID!) {
    userExists(token: $token) {
      userId
      userName
      avatar
      memberOf
    }
  }
`

/**
 * __useUserExistsQuery__
 *
 * To run a query within a React component, call `useUserExistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserExistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserExistsQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useUserExistsQuery(
  baseOptions: Apollo.QueryHookOptions<
    UserExistsQuery,
    UserExistsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UserExistsQuery, UserExistsQueryVariables>(
    UserExistsDocument,
    options
  )
}
export function useUserExistsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserExistsQuery,
    UserExistsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UserExistsQuery, UserExistsQueryVariables>(
    UserExistsDocument,
    options
  )
}
export type UserExistsQueryHookResult = ReturnType<typeof useUserExistsQuery>
export type UserExistsLazyQueryHookResult = ReturnType<
  typeof useUserExistsLazyQuery
>
export type UserExistsQueryResult = Apollo.QueryResult<
  UserExistsQuery,
  UserExistsQueryVariables
>
export const RegisterAdminUserAndShopDocument = gql`
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
export type RegisterAdminUserAndShopMutationFn = Apollo.MutationFunction<
  RegisterAdminUserAndShopMutation,
  RegisterAdminUserAndShopMutationVariables
>

/**
 * __useRegisterAdminUserAndShopMutation__
 *
 * To run a mutation, you first call `useRegisterAdminUserAndShopMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterAdminUserAndShopMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerAdminUserAndShopMutation, { data, loading, error }] = useRegisterAdminUserAndShopMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      userName: // value for 'userName'
 *      shopName: // value for 'shopName'
 *      openTime: // value for 'openTime'
 *      closeTime: // value for 'closeTime'
 *      timeUnit: // value for 'timeUnit'
 *      submitFrequency: // value for 'submitFrequency'
 *      useTimeCard: // value for 'useTimeCard'
 *   },
 * });
 */
export function useRegisterAdminUserAndShopMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterAdminUserAndShopMutation,
    RegisterAdminUserAndShopMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    RegisterAdminUserAndShopMutation,
    RegisterAdminUserAndShopMutationVariables
  >(RegisterAdminUserAndShopDocument, options)
}
export type RegisterAdminUserAndShopMutationHookResult = ReturnType<
  typeof useRegisterAdminUserAndShopMutation
>
export type RegisterAdminUserAndShopMutationResult =
  Apollo.MutationResult<RegisterAdminUserAndShopMutation>
export type RegisterAdminUserAndShopMutationOptions =
  Apollo.BaseMutationOptions<
    RegisterAdminUserAndShopMutation,
    RegisterAdminUserAndShopMutationVariables
  >
export const RegisterUserDocument = gql`
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
export type RegisterUserMutationFn = Apollo.MutationFunction<
  RegisterUserMutation,
  RegisterUserMutationVariables
>

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      shopId: // value for 'shopId'
 *      userName: // value for 'userName'
 *   },
 * });
 */
export function useRegisterUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterUserMutation,
    RegisterUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    RegisterUserMutation,
    RegisterUserMutationVariables
  >(RegisterUserDocument, options)
}
export type RegisterUserMutationHookResult = ReturnType<
  typeof useRegisterUserMutation
>
export type RegisterUserMutationResult =
  Apollo.MutationResult<RegisterUserMutation>
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<
  RegisterUserMutation,
  RegisterUserMutationVariables
>
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
export const Document = gql`
  query ($userId: ID!) {
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

/**
 * __useQuery__
 *
 * To run a query within a React component, call `useQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useQuery(
  baseOptions: Apollo.QueryHookOptions<Query, QueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<Query, QueryVariables>(Document, options)
}
export function useLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Query, QueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<Query, QueryVariables>(Document, options)
}
export type QueryHookResult = ReturnType<typeof useQuery>
export type LazyQueryHookResult = ReturnType<typeof useLazyQuery>
export type QueryResult = Apollo.QueryResult<Query, QueryVariables>
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
