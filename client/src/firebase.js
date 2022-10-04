import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyB8CVAaGhtNq1_B5S2slAKwGXOMli_NaYk",
  authDomain: "fir-82383.firebaseapp.com",
  projectId: "fir-82383",
  storageBucket: "fir-82383.appspot.com",
  messagingSenderId: "233199971831",
  appId: "1:233199971831:web:54c960b269287ca08752f2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth() 
export const provider = new GoogleAuthProvider()

export default app;