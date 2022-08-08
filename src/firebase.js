// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAt9aa3YPodpkb5eAR92uuXjlNsK4y3aW8",
    authDomain: "slack-clone-635d0.firebaseapp.com",
    projectId: "slack-clone-635d0",
    storageBucket: "slack-clone-635d0.appspot.com",
    messagingSenderId: "111511444079",
    appId: "1:111511444079:web:00c815ceb06aee87f90b9a",
    measurementId: "G-86HYZZKXSZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {auth, provider}; 
  export default db;