import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqm5QaxCfsf89l13zU2CvLHsVqPWASFP8",
  authDomain: "clone-redux-25805.firebaseapp.com",
  projectId: "clone-redux-25805",
  storageBucket: "clone-redux-25805.appspot.com",
  messagingSenderId: "125654078688",
  appId: "1:125654078688:web:98124bdda2c238088eac85"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth()

export { db, auth, provider }