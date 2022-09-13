import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvYgiMiFrd7UnrzZunAJSaf1U4OdMUn9o",
  authDomain: "react-emart-b1228.firebaseapp.com",
  projectId: "react-emart-b1228",
  storageBucket: "react-emart-b1228.appspot.com",
  messagingSenderId: "358713826028",
  appId: "1:358713826028:web:4bccc70e719f3c30c9a3c9"
};

// Use this to initialize the firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig);

// Use for db
const db = firebaseapp.firestore()
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, googleProvider, facebookProvider } 
  