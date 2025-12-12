const posts = [
  // { statusL: "Public", gambar: "img.jpg", judulLiv: "Judul", author: "CV.AGS", dateLiv: "2025-12-01", typeCar: "Altezza", folder: "liv199", body: "body.json", window: "window.json", aspekRasio: "16/9" },
    
  { statusL: "Public", gambar: "img.jpg", judulLiv: "Honda Civic Gen-10 FC/FK", author: "PSKN SENYAP", dateLiv: "2025-11-20", typeCar: "Altezza", folder: "liv96", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Sale", gambar: "img.jpg", judulLiv: "Mitsubishi Lancer Evo 8", author: "frlmods.com", dateLiv: "2025-11-21", typeCar: "Altezza", folder: "liv95", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "BMW M5 F90 MODIFIED", author: "ABR", dateLiv: "2025-11-19", typeCar: "Altezza", folder: "liv94", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Premium", gambar: "img.jpg", judulLiv: "Nissan Skyline GTR-R34 ADVAN", author: "Surya ARTX", dateLiv: "2025-11-20", typeCar: "R32-2D", folder: "liv93", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "ORIGIN Labo", author: "FRLmods", dateLiv: "2025-11-16", typeCar: "R32-4D", folder: "liv92", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Private", gambar: "img.jpg", judulLiv: "Nissan Skyline GTR-R34 NFS underground2", author: "SuryaARTX", dateLiv: "2025-11-18", typeCar: "R32-2D", folder: "liv91", body: "body.json", window: "window.json", aspekRasio: "16/9" },

  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL", author: "YouTube", dateLiv: "2025-12-11", typeCar: "Altezza", folder: "liv164", body: "body.json", window: "window.json", aspekRasio: "16/9" }
];


const postContainer = document.getElementById("post-container");
const tokenInput = document.getElementById("tokenInput");
const submitToken = document.getElementById("submitToken");
const tokenStatus = document.getElementById("tokenStatus");

const ownerAGS = "Arda Style";
const validTokens = ["ANJINGPEPEK", "WKWK"];

// ========== TAMBAHAN PENTING ==========
let tokenUnlocked = false;
// ======================================


// === SORT DEFAULT (URUT TERBARU KE TERLAMA) ===
let defaultSorted = [...posts].sort((a, b) => new Date(b.dateLiv) - new Date(a.dateLiv));


// ======================================================
// === 1. GENERATE SELECT MOBIL DARI JSON ===============
// ======================================================
const carSelect = document.getElementById("filterCar");

function generateCarOptions() {
  const cars = [...new Set(posts.map(p => p.typeCar))]; // hapus duplikat

  cars.forEach(car => {
    const option = document.createElement("option");
    option.value = car;
    option.textContent = car;
    carSelect.appendChild(option);
  });
}

generateCarOptions();


// ======================================================
// === 2. RENDER POSTS (DIPERBAIKI) =====================
// ======================================================
function renderPosts(custom = null) {
  postContainer.innerHTML = "";
  const list = custom || defaultSorted;

  list.forEach((post, i) => {

    let statusIcon = {
      Sale: "warning",
      Public: "success",
      Premium: "info",
      Private: "danger"
    }[post.statusL] || "secondary";

    postContainer.innerHTML += ` 
      <div class="col-xl-3 col-md-6">
        <div class="card position-relative">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-lg-4 image-container container-img-badge position-relative">
                <span class="badge badge-soft-${statusIcon} position-absolute badge-kiri">${post.statusL}</span>
                <i class="bi bi-heart heart-icon position-absolute heart-kanan text-${statusIcon}" data-target="like${post.folder}"></i>
                <img src="frl/${post.folder}/${post.gambar}" alt="${post.judulLiv}" class="img-fluid mx-auto d-block" style="aspect-ratio: ${post.aspekRasio}; object-fit: cover;" loading="lazy">
                <div class="position-absolute bottom-0 start-50 translate-middle-x text-white opacity-25 p-1 fs-10">&copy; <span class="copyright2">${ownerAGS}</span></div>
                <div class="opacity-75">
                  <div class="profile-badge ms-3">
                    <img src="assets/img/kaiadmin/icon.png" alt="Profile Admin">
                    <span class="copyright2">${ownerAGS}</span>
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

              ${tokenUnlocked ? `
                <div class="gap-1 hstack">
                  <button class="btn btn-black w-100" onclick="openJSON(${i}, 'body')">
                    <i class="fa fa-code me-1"></i>Body
                  </button>
                  <button class="btn btn-black w-100" onclick="openJSON(${i}, 'window')">
                    <i class="fa fa-code me-1"></i>Window
                  </button>
                </div>
              ` : `<p class="text-warning small mt-2">Masukkan token untuk membuka tombol</p>`}

            </div>

          </div>
        </div>
      </div>
    `;
  });
}

renderPosts();


// ======================================================
// === 3. CEK TOKEN (DIPERBAIKI) ========================
// ======================================================
submitToken.addEventListener("click", () => {
  const userToken = tokenInput.value.trim();

  if (validTokens.includes(userToken)) {
    tokenUnlocked = true;
    tokenStatus.textContent = "Token benar! Tombol sudah terbuka.";
    tokenStatus.classList.add("text-soft-success");
    renderPosts();
  } else {
    tokenStatus.textContent = "Token Salah, Coba Lagi!";
    tokenStatus.classList.add("text-danger");
  }
});


// ======================================================
// === 4. OPEN JSON (TETAP SAMA) ========================
// ======================================================
function openJSON(index, type) {
  const getPost = posts[index];

  if (getPost.statusL !== "Public") {
    window.open("404.html", "_blank");
    return;
  }

  const file = type === "body" ? getPost.body : getPost.window;
  const url = `frl/${getPost.folder}/${file}`;

  const a = document.createElement("a");
  a.href = url;
  a.download = file;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}


// ======================================================
// === 5. FILTER SYSTEM (DIPERBAIKI SEDIKIT) ============
// ======================================================
function filterNewEst() {
  activeStatusFilter = "newest";
  applyFilters();
}


function filterOldEst() {
  activeStatusFilter = "oldest";
  applyFilters();
}


function filterSale() {
  activeStatusFilter = "sale";
  applyFilters();
}


function filterPremium() {
  activeStatusFilter = "premium";
  applyFilters();
}


function filterPrivate() {
  activeStatusFilter = "private";
  applyFilters();
}


function filterPublic() {
  activeStatusFilter = "public";
  applyFilters();
}


// Reset filter
function resetFilter() {
  activeStatusFilter = "";
  activeCarFilter = "";
  renderPosts(defaultSorted);
}



// ======================================================
// === 6. FILTER TYPE CAR (DIPERBAIKI) =================
// ======================================================
function filterByCar() {
  const selectedCar = carSelect.value.trim().toLowerCase();

  if (selectedCar === "") {
    renderPosts(defaultSorted);
    return;
  }

  const filtered = posts.filter(p =>
    p.typeCar.toLowerCase() === selectedCar
  );

  renderPosts(filtered);
}

carSelect.addEventListener("change", filterByCar);


// ======================================================
// === 7. LIKE SYSTEM (TETAP SAMA) ======================
// ======================================================
document.addEventListener("click", (e) => {
  const heart = e.target.closest(".heart-icon");
  if (heart) {
    const id = heart.getAttribute("data-target");
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

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".heart-icon").forEach(heart => {
    const id = heart.getAttribute("data-target");
    if (localStorage.getItem(`like-${id}`) === "true") {
      heart.classList.replace("bi-heart", "bi-heart-fill");
    }
  });
});
