"use strict";

require("@babel/polyfill");

var _express = _interopRequireDefault(require("express"));

var _http = require("http");

var _apolloServerExpress = require("apollo-server-express");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _typeDefs = _interopRequireDefault(require("./typeDefs"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var PORT = process.env.PORT || 4000;
var app = (0, _express.default)();
var server = new _apolloServerExpress.ApolloServer({
  typeDefs: _typeDefs.default,
  resolvers: _resolvers.default,
  engine: {
    apiKey: process.env.APOLLO_ENGINE_API_KEY
  },
  introspection: true
});
server.applyMiddleware({
  app: app
});
var httpServer = (0, _http.createServer)(app);
server.installSubscriptionHandlers(httpServer);
httpServer.listen({
  port: PORT
}, function () {
  console.log("\uD83D\uDE80 Server ready at http://localhost:".concat(PORT).concat(server.graphqlPath));
  console.log("\uD83D\uDE80 Subscriptions ready at ws://localhost:".concat(PORT).concat(server.subscriptionsPath));
});