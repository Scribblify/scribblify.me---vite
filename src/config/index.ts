import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  TwitterAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbrO0XP9UHJQ57KD1JRkzHuP8r05vH82s",
  authDomain: "scribblify-auth.firebaseapp.com",
  projectId: "scribblify-auth",
  storageBucket: "scribblify-auth.appspot.com",
  messagingSenderId: "209366142794",
  appId: "1:209366142794:web:958317c688536668b57bb3",
  measurementId: "G-7P2MVEN91G",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();
const twitterAuthProvider = new TwitterAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, googleAuthProvider);
const signInWithFacebook = () => signInWithPopup(auth, facebookAuthProvider);
const signInWithTwitter = () => signInWithPopup(auth, twitterAuthProvider);

export { signInWithGoogle, signInWithFacebook, signInWithTwitter };
