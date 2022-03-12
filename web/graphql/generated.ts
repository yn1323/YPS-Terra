import { useQuery, UseQueryOptions } from 'react-query'
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

function fetcher<TData, TVariables>(
  endpoint: string,
  requestInit: RequestInit,
  query: string,
  variables?: TVariables
) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    })

    const json = await res.json()

    if (json.errors) {
      const { message } = json.errors[0]

      throw new Error(message)
    }

    return json.data
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Query = {
  __typename?: 'Query'
  findAll: Array<Maybe<Todo>>
  findOneById: Todo
}

export type QueryFindOneByIdArgs = {
  id: Scalars['ID']
}

export type Todo = {
  __typename?: 'Todo'
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  title: Scalars['String']
}

export type TomatoQueryVariables = Exact<{ [key: string]: never }>

export type TomatoQuery = {
  __typename?: 'Query'
  findAll: Array<{ __typename?: 'Todo'; id: string } | null>
}

export const TomatoDocument = `
    query Tomato {
  findAll {
    id
  }
}
    `
export const useTomatoQuery = <TData = TomatoQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: TomatoQueryVariables,
  options?: UseQueryOptions<TomatoQuery, TError, TData>
) =>
  useQuery<TomatoQuery, TError, TData>(
    variables === undefined ? ['Tomato'] : ['Tomato', variables],
    fetcher<TomatoQuery, TomatoQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      TomatoDocument,
      variables
    ),
    options
  )
