const STORAGE_KEY = "bookmarks";

// Ambil data dari localStorage
function getLikedPosts() {
  const data = localStorage.getItem(STORAGE_KEY);
  try {
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("❌ Data bookmark corrupt:", e);
    return [];
  }
}

// Hapus 1 bookmark
function deleteBookmark(index) {
  let posts = getLikedPosts();
  if (index >= 0 && index < posts.length) {
    console.log(`🗑️ Hapus bookmark id="${posts[index].id}"`);
    posts.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    renderBookmarks();
  }
}

// Render daftar bookmark
function renderBookmarks() {
  const container = document.getElementById("bookmarkList");
  container.innerHTML = "";

  const posts = getLikedPosts();

  if (!posts || posts.length === 0) {
    container.innerHTML = "<p class='text-muted'>Belum ada bookmark.</p>";
    return;
  }

  posts.forEach((item, index) => {
    if (!item) return;

    const wrapper = document.createElement("div");
    wrapper.className = "item-list border rounded p-2 mb-2 shadow-sm";

    wrapper.innerHTML = `
      
          
            <div class="avatar ms-3 mt-1">
              <img src="assets/img/profile.jpg" alt="..." class="avatar-sm avatar-img rounded-circle2"/>
            </div>
            <div class="info-user ms-0">
              <span class="username d-block fw-semibold">${item.title}</span>
              <div><a href="${item.url}" target="_blank" class="status text-info">Kunjungi Halaman</a></div>
            </div>
            <button class="btn btn-icon btn-link btn-danger op-8 fs-20 me-2" onclick="deleteBookmark(${index})">
              <i class="bi bi-trash"></i>
            </button>
          
    `;

    container.appendChild(wrapper);
  });
}

// Saat halaman siap
document.addEventListener("DOMContentLoaded", renderBookmarks);