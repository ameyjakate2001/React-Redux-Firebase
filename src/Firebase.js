import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
import dotenv from 'dotenv'
dotenv.config()

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTO_DOMAIN,
  projectId: process.env.AUTO_DOMAINPROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APP_ID,
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
