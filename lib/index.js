'use strict';

require('@babel/polyfill');

var _apolloServer = require('apollo-server');

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _typeDefs = require('./typeDefs');

var _typeDefs2 = _interopRequireDefault(_typeDefs);

var _resolvers = require('./resolvers');

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var server = new _apolloServer.ApolloServer({
  typeDefs: _typeDefs2.default,
  resolvers: _resolvers2.default,
  engine: {
    apiKey: process.env.APOLLO_ENGINE_API_KEY
  },
  introspection: true
});

server.listen({ port: process.env.PORT || 4000 }).then(function (_ref) {
  var url = _ref.url;

  console.log('\uD83D\uDE80  Server ready at ' + url);
});