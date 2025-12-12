
  // Tetapkan harga per lagu langsung di dalam JavaScript (tidak di HTML)
  const hargaPerLagu = 15000;
  document.getElementById("hargaPerLagu").value = hargaPerLagu; //fungsinya hanya untuk tampilin di input

  
  function hitungHarga() {
    const jumlah = parseInt(document.getElementById("jumlah").value) || 0;
    // Validasi maksimum langsung saat mengetik
    if (jumlah > 50) {
      document.getElementById("wajibIsiTotalLagu").textContent = "* Maksimal 50 lagu!";
      document.getElementById("totalHarga").value = "";
      return;
    } else {
      document.getElementById("wajibIsiTotalLagu").textContent = "";
    }
    const total = jumlah * hargaPerLagu;
    document.getElementById("totalHarga").value = total > 0 ? `Rp${total.toLocaleString()}` : "";
    }



  function kirimWhatsApp() {
    const nama = document.getElementById("namaPembeli").value.trim();
    const jumlah = parseInt(document.getElementById("jumlah").value.trim());
    const pesan = document.getElementById("pesan").value.trim();
    const totalHarga = jumlah * hargaPerLagu;

    // Reset pesan error
    document.getElementById("wajibIsiUsername").textContent = "";
    document.getElementById("wajibIsiTotalLagu").textContent = "";
    document.getElementById("wajibIsiListLagu").textContent = "";

    // Validasi
    if (nama === "") {
      document.getElementById("wajibIsiUsername").textContent = "* Nama wajib diisi!";
      document.getElementById("namaPembeli").focus();
      return;
    }

    if (pesan === "") {
      document.getElementById("wajibIsiListLagu").textContent = "* List lagu wajib diisi!";
      document.getElementById("pesan").focus();
      return;
    }
    
    
    // Validasi jumlah lagu
    if (isNaN(jumlah) || jumlah < 10) {
      document.getElementById("wajibIsiTotalLagu").textContent = "* Minimal 10 lagu!";
      document.getElementById("jumlah").focus();
      return;
    }

    if (jumlah > 50) {
      document.getElementById("wajibIsiTotalLagu").textContent = "* Maksimal 50 lagu!";
      document.getElementById("jumlah").focus();
      return;
    }

    // Format pesan WA
    const nomorWa = "6283143831566"; // Ganti dengan nomor admin
    const textWa =
      `*PESAN LAGU*\n\n` +
      `Nama: ${nama}\n` +
      `Total Lagu: ${jumlah}\n` +
      `Harga/Lagu: Rp${hargaPerLagu.toLocaleString()}\n` +
      `Total Harga: Rp${totalHarga.toLocaleString()}\n\n` +
      `List Lagu:\n${pesan}`;

    const urlWa = `https://wa.me/${nomorWa}?text=${encodeURIComponent(textWa)}`;
    
	// Deteksi user agent
	const ua = navigator.userAgent.toLowerCase();
	const isSafari = /^((?!chrome|android).)*safari/.test(ua);
	const isIOS = /iphone|ipad|ipod/.test(ua);
	const isAndroid = /android/.test(ua);
	
	// Tindakan khusus untuk iOS Safari
	if (isIOS && isSafari) {
	  // Gunakan location.href agar WhatsApp terbuka di tab yang sama
	  window.location.href = urlWa;
	} else if (isAndroid || isIOS) {
	  // Mobile device selain iOS Safari, masih aman pakai window.open
	  window.open(urlWa, "_blank");
	} else {
	  // Default untuk desktop atau browser lain
	  window.open(urlWa, "_blank");
	}
	
  }