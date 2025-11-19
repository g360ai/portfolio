import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// ------------------------------------------------------------------
// Firebase Yapılandırma Bilgileri (Production)
// ------------------------------------------------------------------

const firebaseConfig = {
  apiKey: "AIzaSyDHB8lFY_Icwn2t56CCb6orvXLDHQpDUEg",
  authDomain: "portfolyo-g360.firebaseapp.com",
  projectId: "portfolyo-g360",
  storageBucket: "portfolyo-g360.firebasestorage.app",
  messagingSenderId: "334475755534",
  appId: "1:334475755534:web:9e9da7401385bab7097c5f",
  measurementId: "G-ZVNQNCG9PR"
};

// ------------------------------------------------------------------

// Initialize Firebase (compat check for existing apps)
// Prevents double initialization in hot-reload environments
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = app.storage();

export { db, storage };