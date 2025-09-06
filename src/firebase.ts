import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2p8rBHB9aYR-e4rQ_vaj-bRlIiq1iKeo",
  authDomain: "amaranoctypescript.firebaseapp.com",
  databaseURL: "https://amaranoctypescript-default-rtdb.firebaseio.com",
  projectId: "amaranoctypescript",
  storageBucket: "amaranoctypescript.firebasestorage.app",
  messagingSenderId: "635003527078",
  appId: "1:635003527078:web:19cf3aef01754a8c803967",
  measurementId: "G-WHPLFH1N2V"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app); 
