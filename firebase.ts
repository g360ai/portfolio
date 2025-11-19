import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// ------------------------------------------------------------------
// ADIM 1: Firebase Konsolundan aldığın "firebaseConfig" nesnesini 
// aşağıdaki alana yapıştır.
// ------------------------------------------------------------------

const firebaseConfig = {
  apiKey: "BURAYA_KENDI_API_KEYINI_YAPISTIR",
  authDomain: "proje-id.firebaseapp.com",
  projectId: "proje-id",
  storageBucket: "proje-id.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:xxxxxx"
};

// ------------------------------------------------------------------

// Log warning if still using placeholders
if (firebaseConfig.apiKey === "BURAYA_KENDI_API_KEYINI_YAPISTIR") {
    console.warn(
        "%cFIREBASE YAPILANDIRILMADI!", 
        "color: red; font-size: 16px; font-weight: bold; background-color: black; padding: 10px;"
    );
    console.warn("Lütfen 'firebase.ts' dosyasını açın ve kendi Firebase proje bilgilerinizi girin.");
}

// Initialize Firebase (compat check for existing apps)
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();
const storage = app.storage();

export { db, storage };