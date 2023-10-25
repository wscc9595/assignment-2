// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
} from "@env";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDCIjF8tn_FwnLLHuNxjn3B_eNxb_80wMM",
//   authDomain: "newone-c765a.firebaseapp.com",
//   projectId: "newone-c765a",
//   storageBucket: "newone-c765a.appspot.com",
//   messagingSenderId: "43530961392",
//   appId: "1:43530961392:web:52c6bb206809678d625d35"
// };
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  };
console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);