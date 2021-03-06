import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { env } from '@/config/env'
import { getCookieValue } from '@/helpers/string'

const DOMAIN = env.endpoint

const httpLink = createHttpLink({
  uri: `${DOMAIN}/graphql`,
})

const authLink = setContext((_, { headers }) => {
  if (typeof window === 'undefined') {
    return {
      headers: {
        ...headers,
      },
    }
  }
  const token = getCookieValue(document.cookie)
  return {
    headers: {
      ...headers,
      authorization: token,
    },
  }
})

const client = new ApolloClient({
  ssrMode: true,
  cache: new InMemoryCache({
    addTypename: false,
  }),
  link: authLink.concat(httpLink),
})

export default client
