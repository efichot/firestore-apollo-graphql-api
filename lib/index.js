"use strict";

require("@babel/polyfill");

var _apolloServer = require("apollo-server");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _typeDefs = _interopRequireDefault(require("./typeDefs"));

var _resolvers = _interopRequireDefault(require("./resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var server = new _apolloServer.ApolloServer({
  typeDefs: _typeDefs.default,
  resolvers: _resolvers.default,
  engine: {
    apiKey: process.env.APOLLO_ENGINE_API_KEY
  },
  introspection: true
});
server.listen({
  port: process.env.PORT || 4000
}).then(function (_ref) {
  var url = _ref.url;
  console.log("\uD83D\uDE80  Server ready at ".concat(url));
});