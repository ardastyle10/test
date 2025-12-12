
  // Konfigurasi Firebase
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

  // Inisialisasi Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  const visitorRef = db.ref('visitor_ecommerce_customer'); // GLOBAL COUNT

  // Tambah 1 ke visitor count
  visitorRef.transaction((current) => {
    return (current || 0) + 1;
  });

  // Ambil & tampilkan
  visitorRef.on('value', (snapshot) => {
    document.getElementById("visitor-ecommerce-customer").innerText = snapshot.val();
  });

