
    // Konfigurasi Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyDXGmUP5ei7cxXy08mZgSVWJK0nbO0gD_E",
      authDomain: "visitor-3839d.firebaseapp.com",
      databaseURL: "https://visitor-3839d-default-rtdb.firebaseio.com",
      projectId: "visitor-3839d",
      storageBucket: "visitor-3839d.appspot.com",
      messagingSenderId: "1002009536999",
      appId: "1:1002009536999:web:a1dea89b6af6a3af657542",
      measurementId: "G-WHWEVV4XM9"
    };

    // Inisialisasi Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();

    function sanitizePath(path) {
      return path.replace(/[.#$\[\]/\\]/g, "_");
    }

    const rawPath = location.pathname || "visitor_profile";
    const safePath = sanitizePath(rawPath);

    const pageRef = db.ref('page_visits/' + safePath);
    const globalRef = db.ref('global_visits');

    // Tambah global + halaman
    globalRef.transaction((curr) => (curr || 0) + 1);
    pageRef.transaction((curr) => (curr || 0) + 1);

    // Tampilkan count per halaman
    pageRef.on('value', (snapshot) => {
      document.getElementById("visitor-profile").innerText = snapshot.val();
    });
  