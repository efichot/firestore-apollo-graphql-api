'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  extend type Query {\n    books: [Book]!\n  }\n\n  extend type Mutation {\n\n  }\n\n  type Book {\n    writerId: ID!\n    id: ID!\n    title: String!\n    writer: Writer!\n  }\n'], ['\n  extend type Query {\n    books: [Book]!\n  }\n\n  extend type Mutation {\n\n  }\n\n  type Book {\n    writerId: ID!\n    id: ID!\n    title: String!\n    writer: Writer!\n  }\n']);

var _apolloServer = require('apollo-server');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var book = (0, _apolloServer.gql)(_templateObject);

exports.default = book;