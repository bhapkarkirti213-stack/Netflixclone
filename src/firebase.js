import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAFKoOlNQ7jLiDq03ts3nam-YqvtHbRESo",
    authDomain: "netflix-clone-109db.firebaseapp.com",
    projectId: "netflix-clone-109db",
    storageBucket: "netflix-clone-109db.firebasestorage.app",
    messagingSenderId: "953287062044",
    appId: "1:953287062044:web:09631deefa174cab7ae5d9",
    measurementId: "G-WK3WRB978C"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);