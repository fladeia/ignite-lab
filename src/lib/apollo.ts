import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q8oioo394801xx12u968qt/master',
  cache: new InMemoryCache()
})
