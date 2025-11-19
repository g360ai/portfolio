// Gerekli fonksiyonları Firebase SDK'dan içe aktarıyoruz
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// 🛑 ÖNEMLİ: Kodu, Vercel'e girdiğin gizli Environment Variables'ı (VITE_APP_ ile başlayan) okuması için düzenliyoruz.
// Bu, "Demo Modu" hatasını çözecek olan yapıdır.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
  // measurementId, analytics için zorunlu değildir, kodun içindeki diğer dosyalar bunu okuyacaktır.
};

// 1. Firebase Uygulamasını Başlat
const app = initializeApp(firebaseConfig);

// 2. Gerekli Servisleri (Veritabanı ve Depolama) Başlat
const db = getFirestore(app);
const storage = getStorage(app);

// 3. Servisleri dışarıya aktar
export { db, storage };
