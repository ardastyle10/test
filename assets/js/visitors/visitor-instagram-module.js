// visitor-instagram.js

// Import modul Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, onValue, runTransaction } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// Config Firebase kamu
const firebaseConfig = {
  apiKey: "AIzaSyDXGmUP5ei7cxXy08mZgSVWJK0nbO0gD_E",
  authDomain: "visitor-3839d.firebaseapp.com",
  databaseURL: "https://visitor-3839d-default-rtdb.firebaseio.com",
  projectId: "visitor-3839d",
  storageBucket: "visitor-3839d.firebasestorage.app",
  messagingSenderId: "1002009536999",
  appId: "1:1002009536999:web:a1dea89b6af6a3af657542",
  measurementId: "G-WHWEVV4XM9"
};

// Inisialisasi Firebase & Database
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const visitorRef = ref(db, 'visitor_count'); // Global Counter

// Tambah 1 ke visitor count
runTransaction(visitorRef, (current) => {
  return (current || 0) + 1;
});

// Ambil & tampilkan visitor count
onValue(visitorRef, (snapshot) => {
  document.getElementById("visitor-instagram").innerText = snapshot.val();
});
