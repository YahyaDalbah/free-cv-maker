// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDi-zSBgRVTS7rZ6EuzX6ykm3BFBfqtoHs",
  authDomain: "freecv-c1b21.firebaseapp.com",
  projectId: "freecv-c1b21",
  storageBucket: "freecv-c1b21.appspot.com",
  messagingSenderId: "145605412516",
  appId: "1:145605412516:web:77f68f2b91279d8aa5c831",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const usersColRef = collection(db, "users");
export const provider = new GoogleAuthProvider();
