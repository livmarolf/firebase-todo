import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { connectAuthEmulator, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7PyCM_rZftdwVTQcwp5hAjntOarkjGz0",
  authDomain: "todo-list-ec5ea.firebaseapp.com",
  projectId: "todo-list-ec5ea",
  storageBucket: "todo-list-ec5ea.appspot.com",
  messagingSenderId: "8128504267",
  appId: "1:8128504267:web:6a67c888bb39f88c0b564e",
  measurementId: "G-W983B16WY3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);

if (window.location.hostname === "localhost") {
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
}
console.log(window.location.hostname);

export { auth, db };
