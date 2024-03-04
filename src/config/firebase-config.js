import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKn7kvBcJ6BnvBhgadHcd95QCqJJbz1v8",
  authDomain: "tutorial-firebase-react-3e800.firebaseapp.com",
  projectId: "tutorial-firebase-react-3e800",
  storageBucket: "tutorial-firebase-react-3e800.appspot.com",
  messagingSenderId: "16040314780",
  appId: "1:16040314780:web:fcc719b539450c3c002a59",
  measurementId: "G-LH7R2Q3RT8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();