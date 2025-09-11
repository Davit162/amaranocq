import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2p8rBHB9aYR-e4rQ_vaj-bRlIiq1iKeo",
  authDomain: "amaranoctypescript.firebaseapp.com",
  databaseURL: "https://amaranoctypescript-default-rtdb.firebaseio.com",
  projectId: "amaranoctypescript",
  storageBucket: "amaranoctypescript.firebasestorage.app",
  messagingSenderId: "635003527078",
  appId: "1:635003527078:web:09cd7b1b7ed71931803967",
  measurementId: "G-585CJRL86Z"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);   
