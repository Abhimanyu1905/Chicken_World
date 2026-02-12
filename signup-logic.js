import { auth, createUserWithEmailAndPassword, updateProfile, db, doc, setDoc } from './firebase-config.js';

const signupForm = document.getElementById('signup-form');

if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email-address').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('password-confirm').value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            // 1. Create Auth User
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // 2. Update Profile Name
            await updateProfile(user, {
                displayName: name
            });

            // 3. Create Firestore User Document (Default Role: Client)
            await setDoc(doc(db, "users", user.uid), {
                name: name,
                email: email,
                role: 'client',
                createdAt: new Date().toISOString()
            });

            alert("Account created successfully!");
            window.location.href = 'client.html'; // Redirect to home/client page

        } catch (error) {
            console.error("Signup failed:", error);
            alert("Signup failed: " + error.message);
        }
    });
}
