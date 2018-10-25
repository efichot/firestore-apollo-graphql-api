import { ApolloError, ValidationError } from 'apollo-server'
import db from '../firebase'

export default {
  Book: {
    async writer (book) {
      try {
        const doc = await db.collection('writers').doc(book.writerId).get()
        return doc.data()
      } catch (e) {
        return new ApolloError(e)
      }
    }
  },

  Writer: {
    async books (writer) {
      try {
        const docs = await db
          .collection('books')
          .where('writerId', '==', writer.id)
          .get()
        return docs.docs.map(doc => doc.data())
      } catch (e) {
        return new ApolloError(e)
      }
    }
  },

  Query: {
    async books () {
      try {
        const docs = await db.collection('books').get()
        return docs.docs.map(doc => doc.data())
      } catch (e) {
        return new ApolloError(e)
      }
    },

    async writer (_, args) {
      try {
        const docs = await db
          .collection('writers')
          .where('name', '==', args.name)
          .get()
        return docs.docs[0].data() || new ValidationError('writer not found')
      } catch (e) {
        return new ApolloError(e)
      }
    }
  }
}
