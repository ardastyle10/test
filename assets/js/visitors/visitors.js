// ===============================
// 🔹 Konfigurasi Firebase
// ===============================
const _0x5a0203=_0x5d0d;function _0x30cd(){const _0x1cbffe=['4MgFRHe','1002009536999','G-WHWEVV4XM9','AIzaSyDXGmUP5ei7cxXy08mZgSVWJK0nbO0gD_E','862778CTFBdn','54LBSelR','694065NWcnGQ','387669QqqGaV','998385LKgBPh','visitor-3839d','10890027vojxDs','8HkNXzm','1:1002009536999:web:a1dea89b6af6a3af657542','20435160ppqnYM','https://visitor-3839d-default-rtdb.firebaseio.com','6546240lKzGzO'];_0x30cd=function(){return _0x1cbffe;};return _0x30cd();}(function(_0x2df3eb,_0x3514a0){const _0x36d03b=_0x5d0d,_0x198785=_0x2df3eb();while(!![]){try{const _0x47778f=parseInt(_0x36d03b(0x1a3))/0x1*(parseInt(_0x36d03b(0x1ad))/0x2)+-parseInt(_0x36d03b(0x1a4))/0x3*(-parseInt(_0x36d03b(0x1a8))/0x4)+parseInt(_0x36d03b(0x1a5))/0x5+-parseInt(_0x36d03b(0x1a2))/0x6*(parseInt(_0x36d03b(0x1a1))/0x7)+-parseInt(_0x36d03b(0x1ac))/0x8+-parseInt(_0x36d03b(0x1a7))/0x9+parseInt(_0x36d03b(0x1aa))/0xa;if(_0x47778f===_0x3514a0)break;else _0x198785['push'](_0x198785['shift']());}catch(_0x4a8709){_0x198785['push'](_0x198785['shift']());}}}(_0x30cd,0xb7a48));function _0x5d0d(_0x10eb0f,_0x581c30){const _0x30cd51=_0x30cd();return _0x5d0d=function(_0x5d0d31,_0x46505f){_0x5d0d31=_0x5d0d31-0x1a1;let _0x3bd686=_0x30cd51[_0x5d0d31];return _0x3bd686;},_0x5d0d(_0x10eb0f,_0x581c30);}const firebaseConfig={'apiKey':_0x5a0203(0x1b0),'authDomain':'visitor-3839d.firebaseapp.com','databaseURL':_0x5a0203(0x1ab),'projectId':_0x5a0203(0x1a6),'storageBucket':'visitor-3839d.firebasestorage.app','messagingSenderId':_0x5a0203(0x1ae),'appId':_0x5a0203(0x1a9),'measurementId':_0x5a0203(0x1af)};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ===============================
// 🔹 Fungsi utama untuk Add / View
// ===============================
function setupVisitor(config, addMode = false) {
  Object.entries(config).forEach(([elementId, dbPath]) => {
    const el = document.getElementById(elementId);
    if (!el) return; // ❌ Skip kalau elemen tidak ada di halaman

    const ref = db.ref(dbPath);

    // Mode tambah visitor
    if (addMode) {
      ref.transaction(current => (current || 0) + 1);
    }

    // Mode tampilkan visitor
    ref.on('value', snapshot => {
      el.innerText = snapshot.val() ?? 0;
      console.log(`%c[${addMode ? 'Add' : 'View'}]%c "${elementId}" = ${snapshot.val()}`,"color: #ee4d2d; font-weight: bold;","color: inherit;");
    });
  });
}

// ===============================
// 🔹 Daftar ID + Path untuk ADD
// ===============================
const visitorAddConfigs = {
  "visitor-admin": "visitor_admin",
  "visitor-index": "visitor_index",
  "visitor-apps": "visitor_apps",
  "visitor-bookmark": "visitor_apps_bookmark",
  "visitor-apps-calendar": "visitor_apps_calendar",
  "visitor-apps-chat-bot": "visitor_apps_chat_bot",
  "visitor-apps-chat-team": "visitor_apps_chat_team",
  "visitor-apps-collaborator": "visitor_apps_collaborator",
  "visitor-apps-crhome": "visitor_apps_crhome",
  "visitor-apps-email": "visitor_apps_email",
  "visitor-apps-faqs": "visitor_apps_faqs",
  "visitor-apps-google-maps": "visitor_apps_google_mapss",
  "visitor-apps-help-center": "visitor_apps_help_centerr",
  "visitor-apps-invoice": "visitor_apps_invoice",
  "visitor-apps-my-wallet": "visitor_apps_my_wallet",
  "visitor-apps-privacy-policy": "visitor_apps_privacy_policy",
  
  "visitor-my-wallet": "visitor_my_wallet",
  "visitor-profile": "visitor_profile",
  "visitor-maintenance": "visitor_maintenance",
  "visitor-404": "visitor_404_error",
  
  "visitor-library": "visitor_library",
  "visitor-library-deposit": "visitor_library_deposit",
  "visitor-library-projects": "visitor_library_projects",
  "visitor-library-transaksi": "visitor_library_transaksi",
  "visitor-library-file-manager": "visitor_library_file_manager",
  
  "visitor-ecommerce": "visitor_ecommerce",
  "visitor-ecommerce-shopee": "visitor_ecommerce_shopee",
  "visitor-ecommerce-customer": "visitor_ecommerce_customer",
  "visitor-ecommerce-soundcloud": "visitor_ecommerce_soundcloud",
  "visitor-ecommerce-InjectSosmed": "visitor_ecommerce_inject_sosmed",
  "visitor-ecommerce-InjectSosmed-Instagram": "visitor_ecommerce_inject_sosmed_instagram",
  
  "visitor-blogger": "visitor_blogger",
  "visitor-blogger-aivisual": "visitor_blogger_aivisual",
  "visitor-blogger-night-party": "visitor_blogger_nightparty",
  "visitor-blogger-livfrlegends": "visitor_blogger_livfrlegends",
  "visitor-blogger-stikerfrlegends": "visitor_blogger_stikfrlegends",
  
  "visitor-tools": "visitor_tools",
  "visitor-tools-brat": "visitor_tools_brat",
  "visitor-tools-carbon-v2": "visitor_tools_carbon_v2",
  "visitor-tools-google-drive": "visitor_tools_googledrive",
  "visitor-tools-instagram": "visitor_tools_instagram",
  "visitor-tools-souncloud": "visitor_tools_soundcloud",
  "visitor-tools-tiktokv2": "visitor_tools_tiktokv2"
};

// ===============================
// 🔹 Daftar ID + Path untuk VIEW
// ===============================
const visitorViewConfigs = {
  "visitor-view-admin": "visitor_admin",
  "visitor-view-index": "visitor_index",
  "visitor-view-apps": "visitor_apps",
  "visitor-view-bookmark": "visitor_apps_bookmark",
  "visitor-view-apps-calendar": "visitor_apps_calendar",
  "visitor-view-apps-chat-bot": "visitor_apps_chat_bot",
  "visitor-view-apps-chat-team": "visitor_apps_chat_team",
  "visitor-view-apps-collaborator": "visitor_apps_collaborator",
  "visitor-view-apps-crhome": "visitor_apps_crhome",
  "visitor-view-apps-email": "visitor_apps_email",
  "visitor-view-apps-faqs": "visitor_apps_faqs",
  "visitor-view-apps-google-maps": "visitor_apps_google_mapss",
  "visitor-view-apps-help-center": "visitor_apps_help_centerr",
  "visitor-view-apps-invoice": "visitor_apps_invoice",
  "visitor-view-apps-my-wallet": "visitor_apps_my_wallet",
  "visitor-view-apps-privacy-policy": "visitor_apps_privacy_policy",
  
  "visitor-view-my-wallet": "visitor_my_wallet",
  "visitor-view-profile": "visitor_profile",
  "visitor-view-maintenance": "visitor_maintenance",
  "visitor-view-404": "visitor_404_error",
  
  "visitor-view-library": "visitor_library",
  "visitor-view-library-deposit": "visitor_library_deposit",
  "visitor-view-library-projects": "visitor_library_projects",
  "visitor-view-library-transaksi": "visitor_library_transaksi",
  "visitor-view-library-file-manager": "visitor_library_file_manager",
  
  "visitor-view-ecommerce": "visitor_ecommerce",
  "visitor-view-ecommerce-ReqSC": "visitor_ecommerce_soundcloud",
  "visitor-view-ecommerce-Shopee": "visitor_ecommerce_shopee",
  "visitor-view-ecommerce-Customer": "visitor_ecommerce_customer",
  "visitor-view-ecommerce-InjectSosmed": "visitor_ecommerce_inject_sosmed",
  "visitor-view-ecommerce-InjectSosmed-Instagram": "visitor_ecommerce_inject_sosmed_instagram",
  
  "visitor-view-blogger": "visitor_blogger",
  "visitor-view-blogger-aivisual": "visitor_blogger_aivisual",
  "visitor-view-blogger-night-party": "visitor_blogger_nightparty",
  "visitor-view-blogger-livfrlegends": "visitor_blogger_livfrlegends",
  "visitor-view-blogger-stikerfrlegends": "visitor_blogger_stikfrlegends",
  
  "visitor-view-tools": "visitor_tools",
  "visitor-view-tools-brat": "visitor_tools_brat",
  "visitor-view-tools-carbon-v2": "visitor_tools_carbon_v2",
  "visitor-view-tools-google-drive": "visitor_tools_googledrive",
  "visitor-view-tools-instagram": "visitor_tools_instagram",
  "visitor-view-tools-souncloud": "visitor_tools_soundcloud",
  "visitor-view-tools-tiktokv2": "visitor_tools_tiktokv2"
};

// ===============================
// 🔹 Jalankan
// ===============================
// Hanya tambah kalau elemen ADD ada di halaman
setupVisitor(visitorAddConfigs, true);

// Hanya tampilkan kalau elemen VIEW ada di halaman
setupVisitor(visitorViewConfigs, false);
