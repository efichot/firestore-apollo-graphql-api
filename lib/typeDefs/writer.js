'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  extend type Query {\n    writer(name: String!): Writer\n  }\n\n  extend type Mutation {\n\n  }\n\n  type Writer {\n    id: ID!\n    name: String!\n    books: [Book]\n  }\n'], ['\n  extend type Query {\n    writer(name: String!): Writer\n  }\n\n  extend type Mutation {\n\n  }\n\n  type Writer {\n    id: ID!\n    name: String!\n    books: [Book]\n  }\n']);

var _apolloServer = require('apollo-server');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var writer = (0, _apolloServer.gql)(_templateObject);

exports.default = writer;