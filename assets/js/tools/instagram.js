/* 
* SCRIPT BY ARDA GANZ
* 04/10/2025 14.25
* TOLONG HARGAI YANG BUAT SCRIPT 
* JANGAN DICURI, JIKA INGIN IZIN TERLEBIH DAHULU 
*/

document.getElementById("generateBtn").addEventListener("click", async function() {
  const url = document.getElementById("urlInput").value.trim();
  if (!url) {
    alert("Masukkan URL terlebih dahulu");
    return;
  }

  const loading = document.getElementById("loading");
  const result = document.getElementById("result");
  result.innerHTML = "";
  loading.classList.remove("d-none");

  try {
    const apiUrl = "https://api.ryzumi.vip/api/downloader/igdl?url=" + encodeURIComponent(url);
    const res = await fetch(apiUrl);
    const data = await res.json();

    loading.classList.add("d-none");

    if (data.status && data.data.length > 0) {
      let items = data.data;

      // Jika hanya 1 hasil
      if (items.length === 1) {
        let item = items[0];
        result.innerHTML = `
          <div class="col-xl-3 col-lg-4">
            <div class="card">
              ${item.type === "video" ? `
                <video class="card-img-top" controls>
                  <source src="${item.url}" type="video/mp4">
                </video>` : `
                <img src="${item.thumbnail}" class="card-img-top" alt="thumbnail">`
              }
              <div class="card-body text-center">
                <a href="${item.url}" target="_blank" class="btn btn-red">Download ${item.type === "video" ? "Video" : "Foto"}</a>
              </div>
            </div>
          </div>
        `;
      } 
      // Jika lebih dari 1 hasil
      else {
        let carouselId = "carouselResult";
        let indicators = "";
        let slides = "";
        let buttons = "";

        items.forEach((item, index) => {
          indicators += `
            <button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="${index}" 
              ${index === 0 ? "class='active'" : ""} aria-label="Slide ${index + 1}">
            </button>
          `;

          let content = item.type === "video"
            ? `<video class="d-block w-100" controls>
                <source src="${item.url}" type="video/mp4">
              </video>`
            : `<img src="${item.thumbnail}" class="d-block w-100" alt="slide">`;

          slides += `
            <div class="carousel-item ${index === 0 ? "active" : ""}">
              ${content}
            </div>
          `;

          // tombol download tiap slide
          buttons += `
            <div class="download-btn text-center mt-3 ${index === 0 ? "" : "d-none"}" data-index="${index}">
              <a href="${item.url}" target="_blank" class="btn btn-red">Download</a>
            </div>
          `;
        });

        result.innerHTML = `
          <div class="col-xl-3 col-lg-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center text-center mb-3">
                  <iconify-icon icon="zondicons:photo" class="fs-28 text-orange"></iconify-icon>
                  <h3 class="mb-0 ms-2">RESULT</h3>
                </div>

                <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-indicators">
                    ${indicators}
                  </div>
                  <div class="carousel-inner">
                    ${slides}
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                  </button>
                </div>

                <!-- tombol download tiap slide -->
                <div id="downloadButtons">
                  ${buttons}
                </div>
              </div>
            </div>
          </div>
        `;

        // Ganti tombol sesuai slide aktif
        const carousel = document.querySelector(`#${carouselId}`);
        carousel.addEventListener("slide.bs.carousel", function (e) {
          const nextIndex = e.to;
          document.querySelectorAll("#downloadButtons .download-btn").forEach((btn, i) => {
            btn.classList.toggle("d-none", i !== nextIndex);
          });
        });
      }
    } else {
      result.innerHTML = `<p class="text-danger text-center">Data tidak ditemukan.</p>`;
    }
  } catch (err) {
    loading.classList.add("d-none");
    result.innerHTML = `<p class="text-danger text-center">Terjadi error: ${err.message}</p>`;
  }
});