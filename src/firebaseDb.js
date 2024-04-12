import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDc4LnJqrNGFG-ayE5hoW5vgDehXOGFKh0",
    authDomain: "quasartodolist-5a33d.firebaseapp.com",
    projectId: "quasartodolist-5a33d",
    storageBucket: "quasartodolist-5a33d.appspot.com",
    messagingSenderId: "351454872905",
    appId: "1:351454872905:web:584fa4b306ef2070d3c698"
  };

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
