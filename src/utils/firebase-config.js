import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0jbXv5Ca7msFGqrnkrtUao30k_nqm56M",
  authDomain: "netflix-v1-8052a.firebaseapp.com",
  projectId: "netflix-v1-8052a",
  storageBucket: "netflix-v1-8052a.appspot.com",
  messagingSenderId: "148642743774",
  appId: "1:148642743774:web:7f0aea98f40987fa0a894f",
  measurementId: "G-3VSWT4EHRY",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth, db };
