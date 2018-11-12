"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloServer = require("apollo-server");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  type Book {\n    writerId: ID!\n    id: ID!\n    title: String!\n    writer: Writer!\n  }\n\n  type Writer {\n    id: ID!\n    name: String!\n    books: [Book]\n  }\n\n  type Mutation {\n    addBook(title: String!, writer: String!): Book!\n  }\n\n  type Query {\n    books: [Book]!\n    writer(name: String!): Writer\n  }\n\n  type Subscription {\n    newBook: Book!\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _apolloServer.gql)(_templateObject());

exports.default = _default;