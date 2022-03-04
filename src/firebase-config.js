import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBDyHRujKOsM-szJ4aRFxFSsXR_7CkZV4U",
    authDomain: "wbi-firebase.firebaseapp.com",
    projectId: "wbi-firebase",
    storageBucket: "wbi-firebase.appspot.com",
    messagingSenderId: "728261743933",
    appId: "1:728261743933:web:417fefd6bff488b4cb2154",
    measurementId: "G-S03BK9CK3R"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);