
// Nama key untuk penyimpanan
const STORAGE_KEY = "bookmarks";

// Ambil array postingan yang sudah dilike
function getLikedPosts() {
  const data = localStorage.getItem(STORAGE_KEY);
  try {
    return data ? JSON.parse(data) : [];
  } catch (e) {
    //console.error("\u274C Data bookmark corrupt:", e);
    return [];
  }
}

// Simpan array postingan yang sudah dilike
function saveLikedPosts(arr) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
  //console.log("\u{1F4BE} Data disimpan ke localStorage:", arr);
}

// Cek apakah postingan sudah dilike
function isLiked(id) {
  const posts = getLikedPosts();
  if (!Array.isArray(posts)) return false;
  return posts.some(post => post && post.id === id);
}

// Update semua icon sesuai status like
function updateAllIcons() {
  document.querySelectorAll(".heartIcon").forEach(icon => {
    const id = icon.dataset.idHeart;
    if (isLiked(id)) {
      icon.classList.remove("bi-heart");
      icon.classList.add("bi-heart-fill");
    } else {
      icon.classList.remove("bi-heart-fill");
      icon.classList.add("bi-heart");
    }
  });
  //console.log("\u{1F504} Update icon selesai.");
}

// Toggle status like/unlike
function toggleLike(icon) {
  if (!icon) return;

  const id = icon.dataset.idHeart;
  const title = icon.dataset.titleHeart || "Arda Ganz - Undefined";
  const url = icon.dataset.urlHeart || "index.html";

  //console.log(`\u{1F449}\u{1F3FB} Klik heart: id="${id}", title="${title}", url="${url}"`);

  let likedPosts = getLikedPosts();
  if (!Array.isArray(likedPosts)) likedPosts = [];

  if (isLiked(id)) {
    // Hapus dari bookmark
    likedPosts = likedPosts.filter(post => post && post.id !== id);
    console.log(`\u274C Hapus bookmark: "${id}"`);
  } else {
    // Tambahkan ke bookmark
    likedPosts.push({ id, title, url });
    console.log(`\u2705 Tambah bookmark: "${id}"`);
  }

  saveLikedPosts(likedPosts);
  updateAllIcons();
}

// Event delegation agar ikon baru tetap bisa diklik
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("heartIcon")) {
    toggleLike(e.target);
  }
});

// Inisialisasi saat halaman sudah siap
document.addEventListener("DOMContentLoaded", () => {
  //console.log("\u{1F680} Halaman siap, update semua icon.");
  updateAllIcons();
});

