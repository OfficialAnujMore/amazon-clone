import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBblncZDrohxWd9BterIIJDPGlSpuXMk0Y",
  authDomain: "amzon-clone-firebase-30c00.firebaseapp.com",
  projectId: "amzon-clone-firebase-30c00",
  storageBucket: "amzon-clone-firebase-30c00.appspot.com",
  messagingSenderId: "91234929948",
  appId: "1:91234929948:web:0910dedf57275790717ed9",
  measurementId: "G-YLYES12BEN",
});

const app = firebaseConfig;
export const auth = getAuth(app);
// export default app;

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
