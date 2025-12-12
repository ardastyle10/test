
// === DATA POST ===
const posts = [
  // { statusL: "Public", folder: "stik", gambar: "img.jpg", judulLiv: "Judul", author: "Authoer", dateLiv: "2025-12-10", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  
  { statusL: "Public", folder: "stik52", gambar: "img.jpg", judulLiv: "Dragon Anakan", author: "Telegram", dateLiv: "2025-12-12", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik51", gambar: "img.jpg", judulLiv: "LOGO ABR", author: "ABR TEAM", dateLiv: "2025-12-12", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik50", gambar: "img.jpg", judulLiv: "LAMPU WINDOW", author: "Saluran WA", dateLiv: "2025-12-12", typeCar: "Altezza", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik49", gambar: "img.jpg", judulLiv: "Sticker Pack", author: "Saluran WA", dateLiv: "2025-12-11", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik48", gambar: "img.jpg", judulLiv: "Mikey Sumedang", author: "garage kryzx", dateLiv: "2025-12-11", typeCar: "S15", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik47", gambar: "img.jpg", judulLiv: "Sticker Pack", author: "Saluran WA", dateLiv: "2025-12-10", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik46", gambar: "img.jpg", judulLiv: "Sticker Pack", author: "Saluran WA", dateLiv: "2025-12-10", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik45", gambar: "img.jpg", judulLiv: "Gengar Pokemon", author: "Saluran WA", dateLiv: "2025-12-10", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik44", gambar: "img.jpg", judulLiv: "Plat Number", author: "Saluran WA", dateLiv: "2025-12-08", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik43", gambar: "img.jpg", judulLiv: "Kap Mesin", author: "Saluran WA", dateLiv: "2025-12-10", typeCar: "S15", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik42", gambar: "img.jpg", judulLiv: "Tail Light", author: "Saluran WA", dateLiv: "2025-12-10", typeCar: "S13", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik41", gambar: "img.jpg", judulLiv: "Sticker Pack", author: "Saluran WA", dateLiv: "2025-12-10", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik40", gambar: "img.jpg", judulLiv: "Faith Fulne 225", author: "Kyotose", dateLiv: "2025-12-10", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik39", gambar: "img.jpg", judulLiv: "SexyStyle", author: "frl012", dateLiv: "2025-12-07", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik38", gambar: "img.jpg", judulLiv: "Sticker Pack", author: "noobyitashamake", dateLiv: "2025-12-11", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik37", gambar: "img.jpg", judulLiv: "LOGO ABR", author: "ABR TEAM", dateLiv: "2025-11-10", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik36", gambar: "img.jpg", judulLiv: "Kata Kata", author: "Yoga", dateLiv: "2025-12-07", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik35", gambar: "img.jpg", judulLiv: "Tribal", author: "Saluran WA", dateLiv: "2025-12-03", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik34", gambar: "img.jpg", judulLiv: "Tribal", author: "Saluran WA", dateLiv: "2025-12-03", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik33", gambar: "img.jpg", judulLiv: "Tribal", author: "Saluran WA", dateLiv: "2025-12-03", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik32", gambar: "img.jpg", judulLiv: "Tribal", author: "Saluran WA", dateLiv: "2025-12-03", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik31", gambar: "img.png", judulLiv: "Anime", author: "TELE", dateLiv: "2025-12-03", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik30", gambar: "img.jpg", judulLiv: "Anime", author: "TELE", dateLiv: "2025-12-03", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik29", gambar: "img.jpg", judulLiv: "Anime", author: "TELE", dateLiv: "2025-12-03", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik28", gambar: "img.jpg", judulLiv: "Boneka", author: "RACLE LIGHTNING", dateLiv: "2025-11-18", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik27", gambar: "img.jpg", judulLiv: "BANNER", author: "RACLE LIGHTNING", dateLiv: "2025-11-08", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik26", gambar: "img.png", judulLiv: "Anime", author: "TELEGRAM", dateLiv: "2025-11-04", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik25", gambar: "img.png", judulLiv: "WINDOW BILED", author: "STYLE HEHE", dateLiv: "2025-10-23", typeCar: "S15", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik24", gambar: "img.jpg", judulLiv: "PLAT DK", author: "RACLE LIGHTNING", dateLiv: "2025-11-02", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik23", gambar: "img.jpg", judulLiv: "ARDA $TYLE", author: "HANJIN", dateLiv: "2025-11-04", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik22", gambar: "img.jpg", judulLiv: "SUPREME", author: "TPAXAJI", dateLiv: "2025-11-08", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik21", gambar: "img.jpg", judulLiv: "BUSTERCUP", author: "HANJIN", dateLiv: "2025-11-02", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik20", gambar: "img.jpg", judulLiv: "Atap Carbon", author: "Frl.satnic", dateLiv: "2025-11-01", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik19", gambar: "img.png", judulLiv: "Itasha", author: "Roadsidee", dateLiv: "2025-11-07", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik18", gambar: "img.jpg", judulLiv: "ABZAD", author: "fckinglvu.fr", dateLiv: "2025-11-07", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik17", gambar: "img.jpg", judulLiv: "ABZAD", author: "fckinglvu.fr", dateLiv: "2025-11-07", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik16", gambar: "img.jpg", judulLiv: "ABZAD", author: "fckinglvu.fr", dateLiv: "2025-11-07", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik15", gambar: "img.jpg", judulLiv: "Sticker Pack", author: "TAKASHI", dateLiv: "2025-11-02", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik14", gambar: "img.jpg", judulLiv: "Sticker Pack", author: "Discord", dateLiv: "2025-10-30", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik13", gambar: "img.jpg", judulLiv: "MATERNAL", author: "Unknown", dateLiv: "2025-11-03", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik12", gambar: "img.jpg", judulLiv: "Carbon", author: "PSKN SENYAP", dateLiv: "2025-10-31", typeCar: "ALTEZZA", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik11", gambar: "img.jpg", judulLiv: "Night Runner", author: "Alchachofa", dateLiv: "2025-10-19", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik10", gambar: "img.png", judulLiv: "Sticker Pack", author: "IrlCarGallerys", dateLiv: "2025-10-30", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik9", gambar: "img.png", judulLiv: "Logo TikTok", author: "Michael (YT)", dateLiv: "2025-10-29", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik8", gambar: "img.jpg", judulLiv: "Logo Instagram", author: "REBYY x Z", dateLiv: "2025-10-29", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik7", gambar: "img.jpg", judulLiv: "Lampu Belakang", author: "Pastebin", dateLiv: "2025-10-28", typeCar: "GT86", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik6", gambar: "img.jpg", judulLiv: "Banner PSKN SENYAP", author: "PSKN SENYAP", dateLiv: "2025-10-26", typeCar: "ALTEZZA", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik5", gambar: "img.jpg", judulLiv: "Headlight & Taillight", author: "JDM Automotive", dateLiv: "2025-10-23", typeCar: "RX7", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik4", gambar: "img.jpg", judulLiv: "Lampu Belakang Rainbow", author: "SYIFA23", dateLiv: "2025-10-19", typeCar: "GT86", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik3", gambar: "img.png", judulLiv: "MESIN 2JZ", author: "Pastebin", dateLiv: "2025-10-10", typeCar: "S13", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik2", gambar: "img.jpg", judulLiv: "Sponsor Pack", author: "X", dateLiv: "2025-10-10", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "stik1", gambar: "img.jpg", judulLiv: "Nitrogen", author: "Salsabila", dateLiv: "2025-09-27", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  ];

const postContainer = document.getElementById("post-container");

// === BUAT KARTU POST ===
posts.forEach(post => {
  const fileList = [
    { key: "BODY", file: post.body },
    { key: "WINDOW", file: post.window }
  ];

  const fetchPromises = fileList.map(item => {
    return fetch(`stik/${post.folder}/${item.file}`)
      .then(res => res.text())
      .then(text => {
        const cleanText = text.replace(/\r/g, '');
        return { key: item.key, isi: cleanText };
      })
      .catch(() => ({ key: item.key, isi: `Gagal load ${item.file}` }));
  });

  Promise.all(fetchPromises).then(prompts => {
    let bodyContent = "";
    let windowContent = "";

    prompts.forEach(p => {
      const codeId = `prompt-${post.folder}-${p.key}`;
      const block = `
        <div class="bg-black border border-gray-700 rounded-lg overflow-hidden relative w-full mt-2">
          <div class="flex items-center px-3 py-2 bg-zinc-800 border-b border-gray-700">
            <span class="w-3 h-3 bg-gray-400 rounded-full mr-2"></span>
            <span class="w-3 h-3 bg-lime-400 rounded-full mr-2"></span>
            <span class="font-mono text-sm text-white">${p.key}</span>
            <button class="copy-button ms-auto" data-target="${codeId}" title="Copy">
              <i class="fas fa-copy"></i>
            </button>
          </div>
          <pre class="bg-[#1e1e2f] text-white p-2 m-0"><code id="${codeId}" class="language-none">${p.isi}</code></pre>
        </div>
      `;

      if (p.key === "BODY") bodyContent = block;
      if (p.key === "WINDOW") windowContent = block;
    });

    postContainer.innerHTML += `
      <div class="col-xl-3 col-md-6">
        <div class="card position-relative">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-lg-4 image-container container-img-badge position-relative">
                <span class="badge badge-soft-success position-absolute badge-kiri">${post.statusL}</span>
                <i class="bi bi-heart heart-icon position-absolute heart-kanan text-success" data-target="Like${post.folder}"></i>
                <img src="stik/${post.folder}/${post.gambar}" alt="${post.judulLiv}" class="img-fluid mx-auto d-block" style="aspect-ratio: ${post.aspekRasio}; object-fit: cover;">
                <div class="position-absolute bottom-0 start-50 translate-middle-x text-white opacity-25 p-1 fs-10">&copy; <span class="copyright2"></span></div>
                <div class="opacity-75">
                  <div class="profile-badge ms-3">
                    <img src="assets/img/kaiadmin/icon.png" alt="Profile Admin">
                    <span class="copyright2"></span>
                    <i class='bx bxs-badge-check text-info verified'></i>
                  </div>
                </div>
              </div> 
            </div>
            <h5 class="card-title mb-3">${post.judulLiv}</h5>
            <div class="d-flex align-items-center mb-1 text-muted small fw-semibold">
              <i class="bi bi-person-circle me-2"></i>
              <span>Author: ${post.author}</span>
            </div>
            <div class="d-flex align-items-center mb-1 text-muted small fw-semibold">
              <i class="bi bi-calendar3 me-2"></i>
              <span>Date: ${post.dateLiv}</span>
            </div>
            <div class="d-flex align-items-center text-muted small fw-semibold">
              <i class="bi bi-car-front-fill me-2"></i>
              <span>Type Car: ${post.typeCar}</span>
            </div>
            <div class="mt-3 bg-light-subtle rounded-bottom text-center">
              <div class="gap-1 hstack">
                <button class="btn btn-black w-100 toggle-btn" data-target="#collapse-Like${post.folder}-body">
                  <i class="fa fa-code me-1"></i>Body
                </button>
                <button class="btn btn-black w-100 toggle-btn" data-target="#collapse-Like${post.folder}-window">
                  <i class="fa fa-code me-1"></i>Window
                </button>
              </div>
              <div class="px-2 w-full my-content mt-2 collapse-content" id="collapse-Like${post.folder}-body">
                ${bodyContent}
              </div>
              <div class="px-2 w-full my-content mt-2 collapse-content" id="collapse-Like${post.folder}-window">
                ${windowContent}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });
});

// === COLLAPSE BODY / WINDOW ===
document.addEventListener("click", (e) => {
  if (e.target.closest(".toggle-btn")) {
    const btn = e.target.closest(".toggle-btn");
    const targetSelector = btn.getAttribute("data-target");
    const target = document.querySelector(targetSelector);

    document.querySelectorAll(".collapse-content").forEach(el => {
      if (el !== target) el.classList.remove("active");
    });

    target.classList.toggle("active");
  }
});

// === COPY TO CLIPBOARD ===
document.addEventListener("click", (e) => {
  if (e.target.closest('.copy-button')) {
    const btn = e.target.closest('.copy-button');
    const targetId = btn.getAttribute('data-target');
    const codeEl = document.getElementById(targetId);
    if (codeEl) {
      navigator.clipboard.writeText(codeEl.innerText.trim()).then(() => {
        btn.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
          btn.innerHTML = '<i class="fas fa-copy"></i>';
        }, 1200);
      });
    }
  }
});

// === EVENT LISTENER LIKE ===
document.addEventListener("click", (e) => {
  const heart = e.target.closest(".heart-icon");
  if (heart) {
    const id = heart.getAttribute("data-target");
    console.log("%c\u2764%c Like diklik pada: " + id, "color: #80ff00; font-weight: bold;", "color: black; font-weight: bold;");

    const isLiked = heart.classList.contains("bi-heart-fill");

    if (isLiked) {
      heart.classList.replace("bi-heart-fill", "bi-heart");
      localStorage.setItem(`like-${id}`, "false");
    } else {
      heart.classList.replace("bi-heart", "bi-heart-fill");
      localStorage.setItem(`like-${id}`, "true");
    }
  }
});

// === RESTORE STATUS LIKE ===
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".heart-icon").forEach(heart => {
    const id = heart.getAttribute("data-target");
    const liked = localStorage.getItem(`like-${id}`) === "true";
    if (liked) {
      heart.classList.replace("bi-heart", "bi-heart-fill");
    }
  });
});