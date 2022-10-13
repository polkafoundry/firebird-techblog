import { ApolloClient, InMemoryCache } from "@apollo/client"

const baseUrl = process.env.NEXT_PUBLIC_BASE_API

const client = new ApolloClient({
  uri: baseUrl,
  cache: new InMemoryCache()
})

export default client
