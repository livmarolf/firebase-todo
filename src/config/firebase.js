// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7PyCM_rZftdwVTQcwp5hAjntOarkjGz0",
  authDomain: "todo-list-ec5ea.firebaseapp.com",
  projectId: "todo-list-ec5ea",
  storageBucket: "todo-list-ec5ea.appspot.com",
  messagingSenderId: "8128504267",
  appId: "1:8128504267:web:6a67c888bb39f88c0b564e",
  measurementId: "G-W983B16WY3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
