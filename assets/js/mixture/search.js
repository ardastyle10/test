// SCRIPT BY ARDA GANZ
// DLARANG MENGCOPY JIKA KETAHUAN MAKA AKAN DIKENAKAN SANKSI YANG BERWAJIB

 
// Di Button Search 
// onclick="cariDanScroll()"

// Di Input 
// id="searchInput"

// Di Card Atau Teks yang di ingin cari Tambahkan Class
// content-box

// Discript sudah ada class "bgTransisiSearch" saya buat ini khusus Card
// dengan efek shadow 0 0 15px 5px rgba(var(--bs-danger-rgba), 0.6);
// lalu ketika dicari maka akan ada efek shadow dibelakang cardnya

// Pada Class "content-box" Bisa dipasang dimana Saja termasuk H4 atau sejenisnya
// Namun Tampilan kurang menarik karena css tidak sesuai, jika mau diubah silahkan.
// Namun ada efeknya jika css dirubah tampilan yang digunakan dihalaman lain maka akan merubah segalanya.

// Jika ingin dipakai di H4, P, SPAN dan lain sebagainya
// MENDING BUAT CSS BARU yang menarik buat aja css "background-color: #ffff00;" misalnya.
// Tapi jangan lupa di script yang bernama "bgTransisiSearch" diganti dengan nama css baru ya.
// Soalnya di CSS "bgTransisiSearch" itu saya pakai "border-radius dan box-shadow" jadi kurang menarik tampilannya.



  function cariDanScroll() {
    const input = document.getElementById("searchInput");
    const query = input.value.trim().toLowerCase();

    if (!query) {
      alert("Input wajib diisi!");
      input.focus();
      return;
    }

    const boxes = document.querySelectorAll(".content-box");

    for (let box of boxes) {
      if (box.textContent.toLowerCase().includes(query)) {
        box.scrollIntoView({ behavior: "smooth", block: "center" });
        box.classList.add("bgTransisiSearch");
        setTimeout(() => box.classList.remove("bgTransisiSearch"), 5000);
        return;
      }
    }

    alert("Tidak ditemukan!");
    input.focus();
  }

  document.getElementById("searchInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      cariDanScroll();
    }
  });

    // Jika kamu punya tombol cari, tambahkan ini:
   // document.getElementById("tombolCari").addEventListener("click", cariDanScroll);
   
   