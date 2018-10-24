'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  type Book {\n    writerId: ID!\n    id: ID!\n    title: String!\n    writer: Writer!\n  }\n\n  type Writer {\n    id: ID!\n    name: String!\n    books: [Book]\n  }\n\n  type Query {\n    books: [Book]!\n    writer(name: String!): Writer\n  }\n'], ['\n  type Book {\n    writerId: ID!\n    id: ID!\n    title: String!\n    writer: Writer!\n  }\n\n  type Writer {\n    id: ID!\n    name: String!\n    books: [Book]\n  }\n\n  type Query {\n    books: [Book]!\n    writer(name: String!): Writer\n  }\n']);

var _apolloServer = require('apollo-server');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = (0, _apolloServer.gql)(_templateObject);