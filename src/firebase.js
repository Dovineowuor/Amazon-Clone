import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "clone-b539a.firebaseapp.com",
    projectId: "clone-b539a",
    storageBucket: "clone-b539a.appspot.com",
    messagingSenderId: "932798090690",
    appId: "1:932798090690:web:2e7e03cbba50c2d6c01a5b",
    measurementId: "G-54TNTEEJMG"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

export {db, auth}