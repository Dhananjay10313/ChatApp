import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlRUuLLpfuyxznYXdpUq178Sad6zfisvs",
  authDomain: "chatapp-a23d8.firebaseapp.com",
  projectId: "chatapp-a23d8",
  storageBucket: "chatapp-a23d8.appspot.com",
  messagingSenderId: "440945457484",
  appId: "1:440945457484:web:0a4bc957861e164c8e77e9"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
