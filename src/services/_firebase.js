import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import settings from 'src/settings'

// Your web app's Firebase configuration
const CONFIG = {
  apiKey: settings.FIREBASE_KEY,
  authDomain: "workshop20230611.firebaseapp.com",
  projectId: "workshop20230611",
  storageBucket: "workshop20230611.appspot.com",
  messagingSenderId: "688303938341",
  appId: settings.FIREBASE_ID,
}

// Initialize Firebase
const app = initializeApp(CONFIG)
const db = getFirestore(app)
const auth = getAuth(app)

export { auth, db }
