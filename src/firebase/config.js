import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyD4vhfQHFPP8Xp05n83Wciu7bY37c3kJe4',
  authDomain: 'hornoapp.firebaseapp.com',
  databaseURL: 'https://hornoapp.firebaseio.com',
  projectId: 'hornoapp',
  storageBucket: 'hornoapp.appspot.com',
  messagingSenderId: '860763548265',
  appId: '1:860763548265:web:d1e0adcbd3e080f4f010f8',
  measurementId: 'G-F6741WMWKH',
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

//separting database API and authentication
const db = firebase.database()
const auth = firebase.auth()
const firestore = firebase.firestore()

export { firebase, db, auth, firestore }
