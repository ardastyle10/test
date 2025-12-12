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

// ------------------------------
// 1️⃣ ID untuk menambah visitor
// ------------------------------
const visitorAddConfigs = {
  "visitor-admin": "visitor_admin",
  "visitor-apps-bookmark": "visitor_apps_bookmark",
  "visitor-apps-calendar": "visitor_apps_calendar",
  "visitor-apps-collaborator": "visitor_apps_collaborator",
  "visitor-apps-crhome": "visitor_apps_crhome",
  "visitor-apps-email": "visitor_apps_email",
  "visitor-apps-faqs": "visitor_apps_faqs",
  "visitor-apps-google-maps": "visitor_apps_google_mapss",
  "visitor-apps-help-center": "visitor_apps_help_centerr",
  "visitor-apps-invoice": "visitor_apps_invoice",
  "visitor-apps-my-wallet": "visitor_apps_my_wallet",
  "visitor-apps-privacy-policy": "visitor_apps_privacy_policy",
  
  "visitor-ecommerce": "visitor_ecommerce",
  "visitor-home": "visitor_home",
  "visitor-contact": "visitor_contact"
};

// Loop tambah & tampilkan
Object.entries(visitorAddConfigs).forEach(([elementId, dbPath]) => {
  const el = document.getElementById(elementId);
  if (!el) return; // kalau elemen nggak ada, skip
  const ref = db.ref(dbPath);
  // Tambah 1 ke counter
  ref.transaction((current) => {
    return (current || 0) + 1;
  });
  // Tampilkan nilai
  ref.on('value', (snapshot) => {
    el.innerText = snapshot.val();
    console.log(`✅ [Tambah] Elemen "${elementId}" ditemukan & diperbarui.`);
  });
});


// ------------------------------
// 2️⃣ ID untuk hanya menampilkan visitor (tanpa menambah)
// ------------------------------
const visitorViewConfigs = {
  "visitor-view-admin": "visitor_admin",
  "visitor-view-apps-bookmark": "visitor_apps_bookmark",
  "visitor-view-apps-calendar": "visitor_apps_calendar",
  "visitor-view-apps-collaborator": "visitor_apps_collaborator",
  "visitor-view-apps-crhome": "visitor_apps_crhome",
  "visitor-view-apps-email": "visitor_apps_email",
  "visitor-view-apps-faqs": "visitor_apps_faqs",
  "visitor-view-apps-google-maps": "visitor_apps_google_mapss",
  "visitor-view-apps-help-center": "visitor_apps_help_centerr",
  "visitor-view-apps-my-wallet": "visitor_apps_my_wallet",
  "visitor-view-apps-privacy-policy": "visitor_apps_privacy_policy",
  
  "visitor-view-ReqSC": "visitor_ecommerce_soundcloud",
  "visitor-view-InjectSosmed": "visitor_inject_sosmed_instagram",
  "visitor-view-Shopee": "visitor_ecommerce_shopee"
};

// Loop hanya tampilkan
Object.entries(visitorViewConfigs).forEach(([elementId, dbPath]) => {
  const ref = db.ref(dbPath);

  // Hanya ambil nilai (tanpa transaction)
  ref.on('value', (snapshot) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.innerText = snapshot.val();
      console.log(`✅ [View] Elemen "${elementId}" ditemukan & diperbarui.`);
    } else {
      console.error(`❌ [View] Elemen "${elementId}" tidak ditemukan di halaman.`);
    }
  });
});
