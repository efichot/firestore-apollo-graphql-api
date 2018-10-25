import admin from 'firebase-admin'
import serviceAccount from '../service-account.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()
const settings = { timestampsInSnapshots: true }
db.settings(settings)

export default db
