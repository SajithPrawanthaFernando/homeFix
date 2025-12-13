import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDay7Y-nFQrRYeGMVaVm_Jov7k8nQNPQRs",
  authDomain: "homefix-5cc2d.firebaseapp.com",
  projectId: "homefix-5cc2d",
  storageBucket: "homefix-5cc2d.firebasestorage.app",
  messagingSenderId: "511996607160",
  appId: "1:511996607160:web:b46428e1b099bd4337924d",
  measurementId: "G-FMGSX8R8E7",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
