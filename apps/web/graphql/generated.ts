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
  recipe: Recipe
}

export type QueryRecipeArgs = {
  id: Scalars['String']
}

export type Recipe = {
  __typename?: 'Recipe'
  id: Scalars['ID']
  name: Scalars['String']
}

export type RecipesQueryVariables = Exact<{ [key: string]: never }>

export type RecipesQuery = {
  __typename?: 'Query'
  recipe: { __typename?: 'Recipe'; id: string; name: string }
}

export const RecipesDocument = `
    query Recipes {
  recipe(id: "1") {
    id
    name
  }
}
    `
export const useRecipesQuery = <TData = RecipesQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: RecipesQueryVariables,
  options?: UseQueryOptions<RecipesQuery, TError, TData>
) =>
  useQuery<RecipesQuery, TError, TData>(
    variables === undefined ? ['Recipes'] : ['Recipes', variables],
    fetcher<RecipesQuery, RecipesQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      RecipesDocument,
      variables
    ),
    options
  )
