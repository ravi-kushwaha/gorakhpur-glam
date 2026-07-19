import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA_XMMDHshLK1d-pqrDn9BmFtRBKWr1_hY",
  authDomain: "gorakhpur-glam.firebaseapp.com",
  projectId: "gorakhpur-glam",
  storageBucket: "gorakhpur-glam.firebasestorage.app",
  messagingSenderId: "437220468755",
  appId: "1:437220468755:web:6a05e97bdcba37e3de37e6",
  measurementId: "G-8KQLNG50L2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);

export default app;