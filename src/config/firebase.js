import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwU2WGgXdvYsXcQAkc1oup_C4Gsxsny8s",
  authDomain: "chatizard-app.firebaseapp.com",
  projectId: "chatizard-app",
  storageBucket: "chatizard-app.appspot.com",
  messagingSenderId: "686740541171",
  appId: "1:686740541171:web:91531144f01d20b2387186",
  measurementId: "G-C0WY76SLZH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()

export { auth, app }