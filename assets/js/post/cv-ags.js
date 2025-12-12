


// === DATA POST ===
const posts = [
  
  // { statusL: "Public", folder: "ags0", gambar: "img.png", judulLiv: "Judul", author: "Authoer", dateLiv: "2023-01-13", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  
  { statusL: "Public", folder: "ags6", gambar: "img.png", judulLiv: "AGS JAYA", author: "HANJIN", dateLiv: "2025-11-10", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "ags5", gambar: "img.png", judulLiv: "AGS TUNER", author: "HANJIN", dateLiv: "2025-11-10", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "ags4", gambar: "img.png", judulLiv: "ARDA STYLE", author: "HANJIN", dateLiv: "2025-11-10", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  
  { statusL: "Public", folder: "ags3", gambar: "img.png", judulLiv: "AGS PERFORMANCE", author: "CV.AGS", dateLiv: "2023-01-13", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "ags2", gambar: "img.png", judulLiv: "AGS TUNER", author: "CV.AGS", dateLiv: "2023-01-13", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", folder: "ags1", gambar: "img.png", judulLiv: "AGS FACTORY", author: "CV.AGS", dateLiv: "2023-01-13", typeCar: "Available", body: "body.json", window: "window.json", aspekRasio: "16/9" }
  ];

const postContainer = document.getElementById("post-container");

// === BUAT KARTU POST ===
posts.forEach(post => {
  const fileList = [
    { key: "BODY", file: post.body },
    { key: "WINDOW", file: post.window }
  ];

  const fetchPromises = fileList.map(item => {
    return fetch(`CV-AGS/${post.folder}/${item.file}`)
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
                <img src="CV-AGS/${post.folder}/${post.gambar}" alt="${post.judulLiv}" class="img-fluid mx-auto d-block" style="aspect-ratio: ${post.aspekRasio}; object-fit: cover;">
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