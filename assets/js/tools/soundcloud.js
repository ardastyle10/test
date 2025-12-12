
    async function downloadSoundCloud() {
      const urlInput = document.getElementById("scUrl").value.trim();
      const resultDiv = document.getElementById("result");
      
      
      // Wajib isi
      if (urlInput === "") {
        swal({title: "Peringatan!", text: "Masukkan URL Sound Cloud", icon: "warning", buttons: { confirm: { text: "Oke Kak", closeModal: true, className: "btn btn-soft-warning"} } })
        .then(() => { document.getElementById("scUrl").focus(); });
        return;
      }
    
      // Cek apakah URL diawali dengan http:// atau https://
      if (!urlInput.startsWith("http://") && !urlInput.startsWith("https://")) {
    	swal({title: "Peringatan!", text: "URL wajib http:// atau https://", icon: "warning", buttons: { confirm: { text: "Oke Kak", closeModal: true, className: "btn btn-soft-warning"} } })
  	  .then(() => { document.getElementById("scUrl").focus(); });
  	  return;
  	}
  
	  if (!urlInput.includes("soundcloud.com")) {
	    swal({title: "Peringatan!", text: "URL wajib soundcloud.com", icon: "warning", buttons: { confirm: { text: "Oke Kak", closeModal: true, className: "btn btn-soft-warning"} } })
  	  .then(() => { document.getElementById("scUrl").focus(); });
  	  return;
  	}
  

      // Tampilkan loading lewat innerHTML
      resultDiv.innerHTML = `<div class="text-center fw-semibold"><span class="spinner-border spinner-border-sm" aria-hidden="true"></span><span role="status"> Loading...</span></div>`;

      try {
        const apiUrl = `https://api.sxtream.xyz/downloader/soundcloud-v2?url=${encodeURIComponent(urlInput)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status !== 200) throw new Error("Gagal mendapatkan data dari API.");

        const { title, url, thumbnail, author } = data.result;

        const musicResponse = await fetch(url);
        const blob = await musicResponse.blob();
        const blobUrl = URL.createObjectURL(blob);

        resultDiv.innerHTML = `
				             <div class="col-xl-3 col-lg-4">
				                 <div class="card">
			                          <div class="card-body">
									  	<img src="${thumbnail}" alt="${author.username}" class="img-fluid mx-auto d-block" style="aspect-ratio: 1/1; object-fit: cover;">
									  	<div class="f-poppins fs-15 text-truncatee mt-3">${title}</div>
									  	<div class="f-poppins fs-15 fw-semibold mb-3"><i class="bi bi-person text-success"></i> Username : <a class="text-dark f-poppins" href="${author.permalink_url}" target="_blank">${author.username} ${author.verified ? " <i class='bx bxs-badge-check text-verifikasi'></i>" : ""}</a></div>
									  	<div class="text-center">
   									  	<a href="${blobUrl}" download="${title}" class="btn btn-dark w-100">Download Audio <span class="badge badge-warning">MP3</span></a>
									  	</div>
			                          </div>
				                 </div>
				             </div>
        `;
      } catch (err) {
        resultDiv.innerHTML = `<div class="text-center"><div class="alert alert-danger">Terjadi kesalahan: ${err.message}</div></div>`;
      }
    }