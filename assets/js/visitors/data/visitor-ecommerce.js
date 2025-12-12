    // Firebase config
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

    // Init Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();

	// Ambil Data untuk menambah
	const dataVisitorEcommerce = db.ref('visitor_ecommerce'); 
	// Tambah 1 ke visitor count
	dataVisitorEcommerce.transaction((current) => { return (current || 0) + 1; });
	// Ambil & tampilkan
	dataVisitorEcommerce.on('value', snapshot => { document.getElementById("visitor-ecommerce").innerText = snapshot.val(); });	
	
    // Ambil data visitor tanpa menambah
    const dataVisitorReqMixtape = db.ref('visitor_ecommerce_soundcloud');
    const dataVisitorInjectSosmed = db.ref('visitor_inject_sosmed_instagram');
    const dataVisitorShopee = db.ref('visitor_ecommerce_shopee');

	// Ambil & Tampilkan
    dataVisitorReqMixtape.on('value', snapshot => { document.getElementById("daVisReqSC").innerText = snapshot.val(); });
    dataVisitorInjectSosmed.on('value', snapshot => { document.getElementById("daVisInjectSosmed").innerText = snapshot.val(); });
    dataVisitorShopee.on('value', snapshot => { document.getElementById("daVisShopee").innerText = snapshot.val(); });
    
	