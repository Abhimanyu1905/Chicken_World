# Chicken World — Firebase backend integration

This project now includes a lightweight Firestore-backed service to replace the localStorage/sessionStorage backend.

What I added
- `firebase-init.js`: initializes Firebase (Firestore) and exposes a `window.firebaseService` with `init()`, `getData()`, `setData()`, `login()`, `register()`, `logout()`, and `getCurrentUser()`.
- Updated `script.js` to delegate storage/auth to `window.firebaseService` when available, with localStorage fallback.
- Updated `index.html`, `client.html`, `admin.html`, and `shopkeeper.html` to load `firebase-init.js` and await initialization.

Quick setup
1. Open the Firebase console and create a project (or use existing). Enable Firestore.
2. If you need to use a different Firebase project, update the config in `firebase-init.js`.
3. Serve the site (open `index.html`) — the app will create default users and food items in Firestore on first run.

Notes
- The current implementation uses Firestore as the data backend but keeps a simple username/password check stored in Firestore (no Firebase Authentication). This keeps compatibility with the existing UI which uses `username` + `password` + `role`.
- Reads are served from an in-memory cache loaded at startup so existing synchronous `getData()` calls continue to work.
- Writes to Firestore are performed asynchronously; UI updates rely on the local cache so they remain responsive.

If you want full Firebase Authentication (email/password, properly secured), I can refactor the auth flow to use `firebase/auth` and adjust the UI accordingly — tell me if you want that.
