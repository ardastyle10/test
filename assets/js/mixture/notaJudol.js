document.addEventListener("DOMContentLoaded", function() {
  const judul = document.getElementById("judul");
  const linkSitus = document.getElementById("linkSitus");
  const thumbnail = document.getElementById("thumbnail");
  const ssWeb = document.getElementById("ssWeb");
  
  function toSlug(text) {
    return text
      .toLowerCase()           // huruf kecil semua
      .replace(/\s+/g, '-')    // spasi jadi -
      .replace(/[^a-z0-9-]/g, '') // hapus karakter aneh
      .replace(/-+/g, '-');    // hilangkan strip ganda
  }
  judul.addEventListener("input", function() {
    const slug = toSlug(judul.value);
    linkSitus.value = slug;
    thumbnail.value = slug;
    ssWeb.value = "ss-" + slug;
  });
});



function formatRupiah(el) {
  let value = el.value.replace(/\D/g, "");
  if (value) {
    el.value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
}
document.addEventListener("input", generateJSON);



function generateJSON() {
  const obj = {
    judul: document.getElementById("judul").value,
    label: document.getElementById("label").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    jenisBank: document.getElementById("jenisBank").value,
    noRek: document.getElementById("noRek").value,
    namaRek: document.getElementById("namaRek").value,
    email: document.getElementById("email").value,
    linkSitus: document.getElementById("linkSitus").value,
    thumbnail: document.getElementById("thumbnail").value,
    ssWeb: document.getElementById("ssWeb").value,
    color: document.getElementById("color").value,
    idcollapse: document.getElementById("idcollapse").value,
    transactions: [
      {
        date: document.getElementById("date").value,
        deposit: document.getElementById("deposit").value,
        withdraw: document.getElementById("withdraw").value,
        paymentTo: document.getElementById("paymentTo").value,
        note: document.getElementById("note").value,
        status: document.getElementById("status").value
      }
    ]
  };
  // stringify & hapus kutip key
  let pretty = JSON.stringify(obj, null, 2).replace(/"([^"]+)":/g, '$1:');
  // rapikan transactions jadi 1 baris
  pretty = pretty.replace(
    /transactions: \[\s+{[\s\S]+?}\s+\]/,
    match => {
      const oneLine = match.replace(/\s+/g, " ").replace(/\n/g, " ");
      return oneLine
        .replace("[ {", "[\n  {")
        .replace("} ]", "} \n]");
    }
  );
  document.getElementById("resultBox").textContent = pretty;
}



document.getElementById("copyBtn").addEventListener("click", function() {
  const text = document.getElementById("resultBox").textContent;
  navigator.clipboard.writeText(text).then(() => {
    this.textContent = "Copied!";
    setTimeout(() => this.textContent = "Copy", 1500);
  });
});




// NOTE WAJIB ANGKA DEPOSIT & WITHDRAW 
  function validateNumberInput(inputId, infoId) {
    const input = document.getElementById(inputId);
    const info = document.getElementById(infoId);
    input.addEventListener("input", function () {
      // izinkan angka, titik, dan koma
      if (/^[0-9.,]*$/.test(this.value)) {
        info.textContent = ""; // hilangin pesan kalau valid
      } else {
        info.textContent = "* Numbers Only"; // muncul kalau ada huruf/simbol lain
      }
    });
  }
  document.addEventListener("DOMContentLoaded", function () {
    validateNumberInput("deposit", "infoDeposit");
    validateNumberInput("withdraw", "infoWithdraw");
  });




document.addEventListener("DOMContentLoaded", function () {
  const fields = [
    "judul", "label", "username", "password", "jenisBank",
    "noRek", "namaRek", "email", "linkSitus", "thumbnail",
    "ssWeb", "color", "idcollapse", "date", "deposit",
    "withdraw", "paymentTo", "note", "status"
  ];

  // Load data dari localStorage saat halaman dibuka
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (el && localStorage.getItem(id)) {
      el.value = localStorage.getItem(id);
    }
  });

  // Tombol Simpan
  const saveBtn = document.getElementById("saveNotaJudol");
  if (saveBtn) {
    saveBtn.addEventListener("click", function () {
      let savedData = {};
      fields.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          localStorage.setItem(id, el.value);
          savedData[id] = el.value;
        }
      });
      console.log("%c[SUCCESS]%c Data tersimpan ke localStorage:","color: green; font-weight: bold;", "color: black;font-weight: bold;", savedData);
      // alert("Data berhasil disimpan!");
    });
  }

  // Tombol Bersihkan Beberapa
  const clearBtn = document.getElementById("clearNotaJudol");
  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      const clearFields = [ "judul", "label", "password", "jenisBank", "linkSitus", "thumbnail", "ssWeb", "color", "idcollapse", "date", "deposit", "withdraw", "paymentTo", "note", "status" ]; // hanya ini yang dibersihkan
      clearFields.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          el.value = "";              
          localStorage.removeItem(id);
        }
      });
      console.log("%c[SUCCESS]%c Beberapa field dibersihkan","color: red; font-weight: bold;", "color: black;font-weight: bold;", clearFields);
      // alert("Beberapa field dibersihkan!");
    });
  }
});
