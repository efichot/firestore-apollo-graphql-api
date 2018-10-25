import { gql } from 'apollo-server'

export default gql`
  type Book {
    writerId: ID!
    id: ID!
    title: String!
    writer: Writer!
  }

  type Writer {
    id: ID!
    name: String!
    books: [Book]
  }

  type Mutation {
    addBook(title: String!, writer: String!): Book!
  }

  type Query {
    books: [Book]!
    writer(name: String!): Writer
  }
`
