<<<<<<< Updated upstream
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
=======
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyAWkZwOScfoezFEbhCoLY_5TwQjoDIqwk4",
  authDomain: "challege-329f3.firebaseapp.com",
  databaseURL: "https://challege-329f3.firebaseio.com",
  projectId: "challege-329f3",
  storageBucket: "challege-329f3.appspot.com",
  messagingSenderId: "842104251510",
  appId: "1:842104251510:web:4a384a0c568a05fc992b57",
  measurementId: "G-DPJP6LF7GV"
};
 const firebaseApp = firebase.initializeApp(firebaseConfig);

 const db = firebaseApp.firestore();

 const auth = firebase.auth()

 export { db, auth};
>>>>>>> Stashed changes
