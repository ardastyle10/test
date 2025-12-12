
    document.getElementById("generateBtn").addEventListener("click", async function() {
      const url = document.getElementById("urlInput").value.trim();
      const loading = document.getElementById("loading");
      const result = document.getElementById("result");

      if (!url) {
        alert("Masukkan URL Google Drive terlebih dahulu!");
        return;
      }

      result.innerHTML = "";
      loading.classList.remove("d-none");

      try {
        // Ambil data dari REST API
        const apiURL = `https://api.ryzumi.vip/api/downloader/gdrive?url=${encodeURIComponent(url)}`;
        const res = await fetch(apiURL);
        const data = await res.json();

        loading.classList.add("d-none");

        if (!data || !data.fileName) {
          result.innerHTML = `<div class="col-md-4"><div class="alert alert-warning">Gagal mendapatkan data file.</div></div>`;
          return;
        }

        // Tampilkan hasil dalam card
        result.innerHTML = `
          <div class="col-md-6">
           <div class="card">
			 <div class="p-3 mb-3">
			  <div class="d-flex align-items-center gap-3">
			    <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
			      <iconify-icon icon="solar:file-bold-duotone" class="fs-3 text-primary"></iconify-icon>
			    </div>
			    <div>
			      <span class="fw-semibold text-dark">${data.fileName}</span><br>
			      <span class="text-muted small">Size: ${data.fileSize}</span><br>
			      <span class="text-muted small">Type: ${data.mimetype}</span>
			    </div>
			  </div>
			 </div>
			  <div class="card-footer border-top d-flex justify-content-between">
			  <a target="_blank" href="${data.downloadUrl}" class="btn btn-success w-100">Download</a>
			  </div>
           </div>
          </div>`;
      } catch (err) {
        console.error(err);
        loading.classList.add("d-none");
        result.innerHTML = `<div class="col-md-4"><div class="alert alert-danger">Terjadi kesalahan saat memproses URL.</div></div>`;
      }
    });