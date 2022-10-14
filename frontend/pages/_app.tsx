import { ApolloProvider } from "@apollo/client"
import type { AppProps } from "next/app"
import "tippy.js/dist/tippy.css"
import client from "../helpers/apollo-client"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
