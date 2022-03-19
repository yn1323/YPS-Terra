import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const DOMAIN = 'http://localhost:3000'

const httpLink = createHttpLink({
  uri: `${DOMAIN}/graphql`,
})

// 3. headerをリクエストを送る前のコンテキストに追加する
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token') ?? ''
  return {
    headers: {
      ...headers,
      authorization: token,
    },
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false,
  }),
  link: authLink.concat(httpLink),
})

export default client
