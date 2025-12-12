function generateCarbon() {
  const codeInput = document.getElementById("codeInput");
  const code = codeInput.value.trim();
  const result = document.getElementById("result");

  if (!code) {
    swal({title: "Peringatan!", text: "Masukkan Kode Anda!", icon: "error", buttons: { confirm: { text: "Oke Kak", closeModal: true, className: "btn btn-soft-danger"} } })
    .then(() => {
      codeInput.focus();
    });
    return;
  }

  // Tampilkan loading spinner
  result.innerHTML = `
    <div class="text-center fw-semibold text-info">
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span role="status"> Loading...</span>
    </div>`;

  const url = `https://api.ryzumi.vip/api/tool/carbon?code=${encodeURIComponent(code)}`;

  const img = new Image();
  img.onload = function () {
    result.innerHTML = `
      <!-- Hasil Carbon By Arda Ganz -->        
      <div class="col-xl-3 col-lg-4">
        <div class="card">
          <div class="card-body">
            <img src="${url}" class="card-img-top mt-3 mb-4" style="box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);">
          </div>
        </div>
      </div>`;
  };

  img.onerror = function () {
    result.innerHTML = `
      <div class="alert alert-danger" role="alert">
        Gagal memuat gambar. Coba lagi.
      </div>`;
  };

  img.src = url;
}
