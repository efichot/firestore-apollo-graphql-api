import '@babel/polyfill'
import { ApolloServer } from 'apollo-server'
import dotenv from 'dotenv'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

dotenv.config()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: {
    apiKey: process.env.APOLLO_ENGINE_API_KEY
  },
  introspection: true
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
