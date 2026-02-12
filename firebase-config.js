import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, query, where, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyChizyl6zNhjt556nsiaPyHrRiMTf2IdgM",
    authDomain: "chicken-world-e27fe.firebaseapp.com",
    projectId: "chicken-world-e27fe",
    storageBucket: "chicken-world-e27fe.firebasestorage.app",
    messagingSenderId: "834738842921",
    appId: "1:834738842921:web:6a80bfaf0676dd87831b38",
    measurementId: "G-VSL9QWK47B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, db, googleProvider, signInWithPopup, signOut, onAuthStateChanged, collection, addDoc, getDocs, doc, deleteDoc, query, where, getDoc, setDoc, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile };
