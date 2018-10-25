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
      console.log('TCL: asyncbooks -> writer', writer)
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

  Mutation: {
    async addBook (root, args, context, info) {
      try {
        const { title, writer } = args
        const snapWriter = await db
          .collection('writers')
          .where('name', '==', writer)
          .get()
        if (snapWriter && snapWriter.docs[0] && snapWriter.docs[0].exists) {
          const writerId = snapWriter.docs[0].id
          const snapBook = await db
            .collection('books')
            .where('title', '==', title)
            .get()
          if (snapBook && snapBook.docs[0] && snapBook.docs[0].exists) {
            return new ApolloError('Book already created!')
          }
          db.collection('books').add({
            title,
            writerId
          })
          return {
            title,
            writerId
          }
        }
        const docWriter = await db.collection('writers').add({
          name: writer
        })
        db.collection('books').add({
          title,
          writerId: docWriter.id
        })
        return {
          title,
          writerId: docWriter.id
        }
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

    async writer (root, args) {
      try {
        const { name } = args
        const snap = await db
          .collection('writers')
          .where('name', '==', name)
          .get()
        return (
          { ...snap.docs[0].data(), id: snap.docs[0].id } ||
          new ValidationError('writer not found')
        )
      } catch (e) {
        return new ApolloError(e)
      }
    }
  }
}
