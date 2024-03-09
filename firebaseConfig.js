import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCln1SGFG3UJcunR8a9nq91uHTGAWgBxLc",
    authDomain: "hackher-cjy.firebaseapp.com",
    projectId: "hackher-cjy",
    storageBucket: "hackher-cjy.appspot.com",
    messagingSenderId: "549557750825",
    appId: "1:549557750825:web:5a77d9704ae10f7bcea038",
    measurementId: "G-5QQ2243KDF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };