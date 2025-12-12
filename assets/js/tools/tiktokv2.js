
  async function downloadTikTok() {
    const url = document.getElementById("tiktokUrl").value;
    const resultDiv = document.getElementById("result");

    resultDiv.innerHTML = `<div class="text-center text-orange"><span class="spinner-border spinner-border-sm" aria-hidden="true"></span><span role="status"> Loading...</span></div>`;

    try {
      const response = await fetch(`https://api.sxtream.xyz/downloader/tiktokv2?url=${encodeURIComponent(url)}`);
      const data = await response.json();

      if (data.status !== 200) {
        resultDiv.innerHTML = `<div class="alert alert-danger">Failed to fetch data</div>`;
        return;
      }

      const res = data.result;

      // VIDEO MODE
      if (res.video?.noWatermark) {
        resultDiv.innerHTML = `
          <div class="col-xl-3 col-lg-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center text-center mb-3">
                  <iconify-icon icon="tabler:video" class="fs-28 text-orange"></iconify-icon>
                  <h3 class="mb-0 ms-2">RESULT VIDEO</h3>
                </div>
                <video controls width="100%" class="rounded mb-2" poster="${res.video.cover}">
                  <source src="${res.video.noWatermark}" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
                <p class="f-poppins fs-15 text-truncate">${res.title}</p>
                <div class="f-poppins fs-15 fw-semibold"><iconify-icon icon="line-md:heart-filled" class="text-danger"></iconify-icon> Liked : ${res.stats.likeCount}</div>
                <div class="f-poppins fs-15 fw-semibold"><iconify-icon icon="bi:chat-dots-fill" class="text-info"></iconify-icon> Comments : ${res.stats.commentCount}</div>
                <div class="f-poppins fs-15 fw-semibold"><iconify-icon icon="majesticons:share" class="text-warning"></iconify-icon> Share : ${res.stats.shareCount}</div>
                <div class="f-poppins fs-15 fw-semibold"><iconify-icon icon="majesticons:bookmark" class="text-primary"></iconify-icon> Save : ${res.stats.saveCount}</div>
                <div class="mb-2 f-poppins fs-15 fw-semibold"><iconify-icon icon="iconoir:play" class="text-success"></iconify-icon> Visitors : ${res.stats.playCount}</div>
                <div class="text-center">
                  <a href="${res.music.play_url}" download class="btn btn-success w-100">Download Audio <span class="badge badge-black">MP3</span></a>
                </div>
              </div>
            </div>
          </div>
        `;
      }

      // PHOTO MODE
      else if (res.images?.length > 0) {
        const carouselId = "tiktokCarousel";
        let indicators = "";
        let items = "";
        let buttons = [];

        res.images.forEach((img, idx) => {
          indicators += `
            <button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="${idx}" class="${idx === 0 ? 'active' : ''}" aria-label="Slide ${idx + 1}"></button>
          `;
          items += `
            <div class="carousel-item ${idx === 0 ? 'active' : ''}">
              <img src="${img.url}" class="d-block w-100 rounded mb-2" alt="Slide ${idx + 1}">
            </div>
          `;
          buttons.push(`
            <button 
              class="btn btn-info download-btn" 
              data-url="${img.url}" 
              data-idx="${idx}" 
              style="display: ${idx === 0 ? 'inline-block' : 'none'};"
            >
              Download Gambar ${idx + 1}
            </button>
          `);
        });

        resultDiv.innerHTML = `
          <div class="col-xl-3 col-lg-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center text-center mb-3">
                  <iconify-icon icon="zondicons:photo" class="fs-28 text-orange"></iconify-icon>
                  <h3 class="mb-0 ms-2">RESULT PHOTO</h3>
                </div>
                <div id="${carouselId}" class="carousel slide mb-3" data-bs-ride="carousel">
                  <div class="carousel-indicators">${indicators}</div>
                  <div class="carousel-inner">${items}</div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  </button>
                </div>
                <div class="text-center mb-3">
                  ${buttons.join('\n')}
                </div>
                <p class="f-poppins fs-15 text-truncate">${res.title}</p>
                <div class="f-poppins fs-15 fw-semibold"><iconify-icon icon="line-md:heart" class="text-danger"></iconify-icon> Liked : ${res.stats.likeCount}</div>
                <div class="f-poppins fs-15 fw-semibold"><iconify-icon icon="bi:chat-dots" class="text-info"></iconify-icon> Comments : ${res.stats.commentCount}</div>
                <div class="f-poppins fs-15 fw-semibold"><iconify-icon icon="majesticons:share-line" class="text-warning"></iconify-icon> Share : ${res.stats.shareCount}</div>
                <div class="f-poppins fs-15 fw-semibold"><iconify-icon icon="majesticons:bookmark-line" class="text-primary"></iconify-icon> Save : ${res.stats.saveCount}</div>
                <div class="mb-2 f-poppins fs-15 fw-semibold"><iconify-icon icon="iconoir:play" class="text-success"></iconify-icon> Visitors : ${res.stats.playCount}</div>
                <div class="text-center">
                  <a href="${res.music.play_url}" download class="btn btn-info w-100">Download Audio <span class="badge badge-black">MP3</span></a>
                </div>
              </div>
            </div>
          </div>
        `;

        const carouselEl = document.querySelector(`#${carouselId}`);

        // ðŸ‘‡ FIX: Tampilkan tombol sesuai slide aktif menggunakan MutationObserver
        const observer = new MutationObserver(() => {
          const activeIndex = Array.from(carouselEl.querySelectorAll('.carousel-item')).findIndex(item =>
            item.classList.contains('active')
          );

          document.querySelectorAll('.download-btn').forEach((btn, idx) => {
            btn.style.display = idx === activeIndex ? 'inline-block' : 'none';
          });
        });

        observer.observe(carouselEl.querySelector('.carousel-inner'), {
          attributes: true,
          subtree: true,
          attributeFilter: ['class']
        });

        // Tambahkan event listener untuk semua tombol download
        document.querySelectorAll('.download-btn').forEach(button => {
          button.addEventListener('click', async () => {
            const imageUrl = button.getAttribute('data-url');
            const index = button.getAttribute('data-idx');

            try {
              const response = await fetch(imageUrl);
              const blob = await response.blob();
              const blobUrl = URL.createObjectURL(blob);

              const a = document.createElement('a');
              a.href = blobUrl;
              a.download = `tiktok-gambar-${parseInt(index) + 1}.jpg`;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(blobUrl);
            } catch (err) {
              console.error('Gagal download gambar:', err);
              alert('Gagal mendownload gambar. Coba ulangi.');
            }
          });
        });
      }

      // TIDAK ADA VIDEO ATAU GAMBAR
      else {
        resultDiv.innerHTML = `<div class="text-center"><div class="alert alert-warning">No video or image found.</div></div>`;
      }

    } catch (error) {
      console.error(error);
      resultDiv.innerHTML = `<div class="text-center"><div class="alert alert-danger">An error occurred</div></div>`;
    }
  }

