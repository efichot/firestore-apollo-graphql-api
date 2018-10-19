import * as admin from 'firebase-admin';
import { ApolloServer, ApolloError, ValidationError, gql } from 'apollo-server';
const serviceAccount = require('../service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

const typeDefs = gql`
  type Book {
    auteurId: ID!
    id: ID!
    title: String!
    auteur: Auteur!
  }

  type Auteur {
    id: ID!
    name: String!
    books: [Book]
  }

  type Query {
    books: [Book]!
    auteur(name: String!): Auteur
  }
`;

const resolvers = {
  Book: {
    async auteur(book) {
      try {
        const doc = await db
          .collection('auteurs')
          .doc(book.auteurId)
          .get();
        return doc.data();
      } catch (e) {
        throw new ApolloError(e);
      }
    }
  },

  Auteur: {
    async books(user) {
      try {
        const docs = await db
          .collection('books')
          .where('auteurId', '==', user.id)
          .get();
        return docs.docs.map(doc => doc.data());
      } catch (e) {
        throw new ApolloError(e);
      }
    }
  },

  Query: {
    async books() {
      try {
        const docs = await db.collection('books').get();
        return docs.docs.map(doc => doc.data());
      } catch (e) {
        throw new ApolloError(e);
      }
    },

    async auteur(_, args) {
      try {
        const docs = await db
          .collection('auteurs')
          .where('name', '==', args.name)
          .get();
        return docs.docs[0].data();
      } catch (e) {
        throw new ApolloError(e);
      }
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
