import { getStorage } from "@firebase/storage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: "fgrf-dc455",
  storageBucket: "fgrf-dc455.appspot.com",
  messagingSenderId: "888051572078",
  appId: "1:888051572078:web:8bdc54d2fe7ab74953b57f",
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const facebookAuth = new FacebookAuthProvider();

export {
  db,
  storage,
  serverTimestamp,
  auth,
  provider,
  facebookAuth,
  analytics,
};
