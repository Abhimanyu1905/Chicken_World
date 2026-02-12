import { auth, googleProvider, signInWithPopup, onAuthStateChanged, db, doc, getDoc, collection, query, where, getDocs, signInWithEmailAndPassword } from './firebase-config.js';

const loginForm = document.getElementById('login-form');

// Handle Email/Password Login
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email-address').value;
        const password = document.getElementById('password').value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            // onAuthStateChanged will handle redirect
            console.log("Logged in with Email/Password");
        } catch (error) {
            console.error("Login failed:", error);
            alert("Login failed: " + error.message);
        }
    });
}

// Check if already logged in and redirect based on role
onAuthStateChanged(auth, async (user) => {
    if (user) {
        console.log("User is logged in:", user.email);

        // Check/Create User Doc in Firestore if needed (optional for login, usually done at signup)
        // For now, redirect.
        if (user.email === 'admin@chicken.com') {
            window.location.href = 'admin.html';
        } else {
            // Basic redirect to client. In a real app we'd fetch role from Firestore.
            // We can assume 'client' for now or add a Firestore check here later.
            window.location.href = 'client.html';
        }
    }
});

window.handleGoogleLogin = async function () {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        console.log("Logged in with Google:", user);
        // onAuthStateChanged will handle redirect
    } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed: " + error.message);
    }
}
