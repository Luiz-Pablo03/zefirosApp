import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAZi-9MDRJxn1hCdfuHEBVFTKHId2AFgVY",
  authDomain: "projeto-final-6d753.firebaseapp.com",
  databaseURL: "https://projeto-final-6d753-default-rtdb.firebaseio.com",
  projectId: "projeto-final-6d753",
  storageBucket: "projeto-final-6d753.appspot.com",
  messagingSenderId: "154304801401",
  appId: "1:154304801401:web:cbe04c6ff155506f3782a8",
  measurementId: "G-WDMPLD3T4E"
}

if (firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();
export { db };

