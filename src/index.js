import '@babel/polyfill'
import express from 'express'
import { createServer } from 'http'
import { ApolloServer } from 'apollo-server-express'
import dotenv from 'dotenv'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

dotenv.config()
const PORT = process.env.PORT || 4000

const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: {
    apiKey: process.env.APOLLO_ENGINE_API_KEY
  },
  introspection: true
})

server.applyMiddleware({ app })

const httpServer = createServer(app)
server.installSubscriptionHandlers(httpServer)

httpServer.listen({ port: PORT }, () => {
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
  console.log(
    `🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`
  )
})
