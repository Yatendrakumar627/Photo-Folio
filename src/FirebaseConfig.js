
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANsrQselHMt5SWGMQiVossSK3POnCV5B4",
  authDomain: "photo-folio-ec384.firebaseapp.com",
  projectId: "photo-folio-ec384",
  storageBucket: "photo-folio-ec384.appspot.com",
  messagingSenderId: "1071140592647",
  appId: "1:1071140592647:web:b11f78fb6c7a5769759ea2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);