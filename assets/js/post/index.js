const postsData = [
      {
        id: 1,
        labels: "In Product",
        dataTarLabel: "product",
        visitors: "200.5K",
        datePost: "Apri 20, 2025",
        linkPost: "ecommerce/inject-sosmed.html",
        title: "Jasa Suntik Sosial Media",
        description: "Ingin akunmu makin ramai? Kami bantu naikkan performa sosial mediamu dengan cepat & aman!",
        image: "assets/img/thumbnail/jasasuntiksosialmedia.jpg"
      },
      {
        id: 2,
        labels: "In Project",
        dataTarLabel: "project",
        visitors: "3.7K",
        datePost: "Apri 25, 2025",
        linkPost: "library.html",
        title: "Library",
        description: "Satu library dengan banyak fungsi: kelola file, simpan data, dan akses tools penting untuk mendukung alur kerja development kami!",
        image: "assets/img/thumbnail/library.jpg"
      },
      {
        id: 3,
        labels: "In Tools",
        dataTarLabel: "tools",
        visitors: "5.3K",
        datePost: "Apri 26, 2025",
        linkPost: "tools.html",
        title: "Tools",
        description: "Kumpulan tools sederhana untuk mempermudah aktivitas dan mempercepat pekerjaan Anda.",
        image: "assets/img/thumbnail/tools.jpg"
      },
      {
        id: 4,
        labels: "In Product",
        dataTarLabel: "product",
        visitors: "13.7K",
        datePost: "Apri 29, 2025",
        linkPost: "ecommerce.html",
        title: "Ecommerce",
        description: "Belanja santai di satu tempat! Suntik followers, Upgrade style Outfit makin keren, Open Request Mixtape? Semua beres di sini!",
        image: "assets/img/thumbnail/ecommerce.jpg"
      }
      
    ];

    const savedPosts = new Map();
    const postsContainer = document.getElementById("posts");
    const savedContainer = document.getElementById("savedPostsContainer");
    const saveCount = document.getElementById("saveCount");

    function loadFromLocalStorage() {
      const saved = localStorage.getItem('savedPosts');
      if (saved) {
        const parsed = JSON.parse(saved);
        parsed.forEach(post => savedPosts.set(post.id, post));
      }
    }

    function saveToLocalStorage() {
      localStorage.setItem('savedPosts', JSON.stringify(Array.from(savedPosts.values())));
    }

    function renderPosts() {
      postsContainer.innerHTML = '';
      postsData.forEach(post => {
        const isBookmarked = savedPosts.has(post.id);
        postsContainer.innerHTML += `
						<div class="col-12">            
				            <div class="card">
								  <div class="position-relative">
								    <img src="${post.image}" class="card-img-top rounded-top-4" alt="${post.title}">
								    <!-- Container icon disusun horizontal -->
								    <div class="d-flex gap-2 position-absolute top-0 end-0 m-2">
								      <span class="badge badge-putih d-flex align-items-center"><i class="bi bi-eye text-dark fs-15 me-1"></i>${post.visitors}</span>
								      <span class="badge badge-putih d-flex align-items-center">
								        <i class="bx ${isBookmarked ? "bx-bookmark-minus" : "bx-bookmark-plus"} text-dark fs-15" onclick="toggleBookmark(${post.id})"></i>
								      </span>
								    </div>
								  </div>
							  <div class="card-body">
							    <div class="text-muted small mb-1" data-target-label="${post.dataTarLabel}">${post.labels}</div>
							    <h6 class="card-title">${post.title}</h6>
							    <p class="card-text small mb-2"><i>${post.description}</i></p>
							    <div class="d-flex justify-content-between align-items-center">
							      <small class="text-muted">${post.datePost}</small>
							      <a href="${post.linkPost}" class="btn btn-soft-info btn-sm">Baca</a>
							    </div>
							  </div>
				            </div>
						</div>
        `;
      });
    }

    function toggleBookmark(postId) {
      const post = postsData.find(p => p.id === postId);
      if (savedPosts.has(postId)) {
        savedPosts.delete(postId);
      } else {
        savedPosts.set(postId, post);
      }
      saveToLocalStorage();
      renderPosts();
      renderSaved();
    }

    function removeSaved(postId) {
      savedPosts.delete(postId);
      saveToLocalStorage();
      renderPosts();
      renderSaved();
    }

    function renderSaved() {
      savedContainer.innerHTML = '';
      saveCount.textContent = savedPosts.size;
      saveCount.style.display = savedPosts.size === 0 ? 'none' : 'inline-block';

      if (savedPosts.size === 0) {
        savedContainer.innerHTML = `
<div class="d-flex flex-column align-items-center justify-content-center text-center">
    <!-- Icon -->
    <div class="fs-40 mb-3">
        <!-- SVG yang dapat digunakan di HTML -->
        <i class="bi bi-file-earmark-plus text-danger fs-25"></i>
    </div>
  <!-- Text -->
  <small class="mb-4 text-muted">The list of favorite articles does not exist yet…</small>
  <!-- Button -->
  <button class="btn btn-danger w-100">View all articles</button>
</div>`;
        return;
      }

      savedPosts.forEach(post => {
        savedContainer.innerHTML += `
          <div class="card mb-3">
            <div class="d-flex align-items-center p-2">
              <img src="${post.image}" class="img-thumbnail me-3" alt="${post.title}" style="width: 100px; height: 100px; object-fit: cover;">
              <div class="flex-grow-1">
                <h6 class="mb-0">${post.title}</h6>
              </div>
              <button class="btn btn-sm btn-outline-danger" onclick="removeSaved(${post.id})">
                <i class='bx bx-trash'></i>
              </button>
            </div>
          </div>
        `;
      });
    }

    // Initial Load
    loadFromLocalStorage();
    renderPosts();
    renderSaved();