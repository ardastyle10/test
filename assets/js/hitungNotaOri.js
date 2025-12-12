// Password Utama
const correctPasswordUtama = "122024";
function showPasswordPromptUtama() {
  swal({
    title: "Masukkan Password",
    content: { element: "input", attributes: { placeholder: "Ketik password di sini...", type: "password", id: "input-field", className: "form-control" } },
    buttons: { cancel: { text: "Batal", visible: true, className: "btn btn-danger" }, confirm: { text: "Submit", className: "btn btn-success" } }
  }).then((value) => {
    if (value !== null) {
      if (value === correctPasswordUtama) {
        swal({ title: "Berhasil!", text: "Password benar!", icon: "success", buttons: { confirm: { text: "OK", className: "btn btn-success" } } });
        document.getElementById("secret-code-utama").classList.remove("hidden");
        document.getElementById("btn-password-utama").classList.add("hidden");
      } else {
        swal({ title: "Gagal!", text: "Password salah, coba lagi!", icon: "error", buttons: { confirm: { text: "Coba Lagi", className: "btn btn-danger" } } });
      }
    }
  });
}
// Password TABLE CV AGS
const correctPasswordCVAGS = "13012023";
function showPasswordPromptTableCVAGS() {
  swal({
    title: "Masukkan Password",
    content: { element: "input", attributes: { placeholder: "Ketik password di sini...", type: "password", id: "input-field", className: "form-control" } },
    buttons: { cancel: { text: "Batal", visible: true, className: "btn btn-danger" }, confirm: { text: "Submit", className: "btn btn-success" } }
  }).then((value) => {
    if (value !== null) {
      if (value === correctPasswordCVAGS) {
        swal({ title: "Berhasil!", text: "Password benar!", icon: "success", buttons: { confirm: { text: "OK", className: "btn btn-success" } } });
        document.getElementById("secret-table-cvags").classList.remove("hidden");
        document.getElementById("btn-password-TableCVAGS").classList.add("hidden");
      } else {
        swal({ title: "Gagal!", text: "Password salah, coba lagi!", icon: "error", buttons: { confirm: { text: "Coba Lagi", className: "btn btn-danger" } } });
      }
    }
  });
}
// Password Pengeluaran Arda (Customer Air)
const correctPassword5 = "customerAir032025";
function showPasswordPromptCutomerAir() {
  swal({
    title: "Masukkan Password",
    content: { element: "input", attributes: { placeholder: "Ketik password di sini...", type: "password", id: "input-field", className: "form-control" } },
    buttons: { cancel: { text: "Batal", visible: true, className: "btn btn-danger" }, confirm: { text: "Submit", className: "btn btn-success" } }
  }).then((value4) => {
    if (value4 !== null) {
      if (value4 === correctPassword5) {
        swal({ title: "Berhasil!", text: "Password benar!", icon: "success", buttons: { confirm: { text: "OK", className: "btn btn-success" } } });
        document.getElementById("secret-code-customer-air").classList.remove("hidden");
        document.getElementById("btn-password-customer-air").classList.add("hidden");
      } else {
        swal({ title: "Gagal!", text: "Password salah, coba lagi!", icon: "error", buttons: { confirm: { text: "Coba Lagi", className: "btn btn-danger" } } });
      }
    }
  });
}
// Password Pengeluaran Arda Dan Uci
const correctPassword1 = "ucidanarda";
function showPasswordPrompt1() {
  swal({
    title: "Masukkan Password",
    content: { element: "input", attributes: { placeholder: "Ketik password di sini...", type: "password", id: "input-field", className: "form-control" } },
    buttons: { cancel: { text: "Batal", visible: true, className: "btn btn-danger" }, confirm: { text: "Submit", className: "btn btn-success" } }
  }).then((value) => {
    if (value !== null) {
      if (value === correctPassword1) {
        swal({ title: "Berhasil!", text: "Password benar!", icon: "success", buttons: { confirm: { text: "OK", className: "btn btn-success" } } });
        document.getElementById("secret-code-1").classList.remove("hidden");
        document.getElementById("btn-password-1").classList.add("hidden");
      } else {
        swal({ title: "Gagal!", text: "Password salah, coba lagi!", icon: "error", buttons: { confirm: { text: "Coba Lagi", className: "btn btn-danger" } } });
      }
    }
  });
}
// Password Add Row Button
const correctPassword2 = "addrowarda";
function showPasswordPrompt2() {
  swal({
    title: "Masukkan Password",
    content: { element: "input", attributes: { placeholder: "Ketik password di sini...", type: "password", id: "input-field", className: "form-control" } },
    buttons: { cancel: { text: "Batal", visible: true, className: "btn btn-danger" }, confirm: { text: "Submit", className: "btn btn-success" } }
  }).then((value2) => {
    if (value2 !== null) {
      if (value2 === correctPassword2) {
        swal({ title: "Berhasil!", text: "Password benar!", icon: "success", buttons: { confirm: { text: "OK", className: "btn btn-success" } } });
        document.getElementById("secret-code-2").classList.remove("hidden");
        document.getElementById("btn-password-2").classList.add("hidden");
      } else {
        swal({ title: "Gagal!", text: "Password salah, coba lagi!", icon: "error", buttons: { confirm: { text: "Coba Lagi", className: "btn btn-danger" } } });
      }
    }
  });
}
// Password Transaksi Histori Arda
const correctPassword3 = "TransHisArda";
function showPasswordPrompt3() {
  swal({
    title: "Masukkan Password",
    content: { element: "input", attributes: { placeholder: "Ketik password di sini...", type: "password", id: "input-field", className: "form-control" } },
    buttons: { cancel: { text: "Batal", visible: true, className: "btn btn-danger" }, confirm: { text: "Submit", className: "btn btn-success" } }
  }).then((value3) => {
    if (value3 !== null) {
      if (value3 === correctPassword3) {
        swal({ title: "Berhasil!", text: "Password benar!", icon: "success", buttons: { confirm: { text: "OK", className: "btn btn-success" } } });
        document.getElementById("secret-code-3").classList.remove("hidden");
        document.getElementById("btn-password-3").classList.add("hidden");
      } else {
        swal({ title: "Gagal!", text: "Password salah, coba lagi!", icon: "error", buttons: { confirm: { text: "Coba Lagi", className: "btn btn-danger" } } });
      }
    }
  });
}
// Password Pengeluaran Arda
const correctPassword4 = "outarda";
function showPasswordPrompt4() {
  swal({
    title: "Masukkan Password",
    content: { element: "input", attributes: { placeholder: "Ketik password di sini...", type: "password", id: "input-field", className: "form-control" } },
    buttons: { cancel: { text: "Batal", visible: true, className: "btn btn-danger" }, confirm: { text: "Submit", className: "btn btn-success" } }
  }).then((value4) => {
    if (value4 !== null) {
      if (value4 === correctPassword4) {
        swal({ title: "Berhasil!", text: "Password benar!", icon: "success", buttons: { confirm: { text: "OK", className: "btn btn-success" } } });
        document.getElementById("secret-code-4").classList.remove("hidden");
        document.getElementById("btn-password-4").classList.add("hidden");
      } else {
        swal({ title: "Gagal!", text: "Password salah, coba lagi!", icon: "error", buttons: { confirm: { text: "Coba Lagi", className: "btn btn-danger" } } });
      }
    }
  });
}
// Password Transaksi Histori Arda
const correctPasswordOrderAir = "orderDNWATER";
function showPasswordPromptOrderAir() {
    swal({ title: "Masukkan Password", content: { element: "input", attributes: { placeholder: "Ketik password di sini...", type: "password", id: "input-field", className: "form-control" } }, buttons: { cancel: { text: "Batal", visible: true, className: "btn btn-danger" }, confirm: { text: "Submit", className: "btn btn-success" } }    
    }).then((valueOrderAir) => {
        if (valueOrderAir !== null) { // Jika user tidak membatalkan
            if (valueOrderAir === correctPasswordOrderAir) {
                swal({ title: "Berhasil!", text: "Password benar!", icon: "success", buttons: { confirm: { text: "OK", className: "btn btn-success" } } });
                // Menampilkan kode rahasia
                document.getElementById("secret-code-order-air").classList.remove("hidden");
                // Menghilangkan tombol input password
                document.getElementById("btn-password-order-air").classList.add("hidden");
            } else {
                swal({ title: "Gagal!", text: "Password salah, coba lagi!", icon: "error", buttons: { confirm: { text: "Coba Lagi", className: "btn btn-danger" } } });
            }
        }
    });
}
// Password Transaksi ALL IN Arda
const correctPasswordTAllin = "TransAllinArd";
function showPasswordTransaksiAllIn() {
    swal({ title: "Masukkan Password", content: { element: "input", attributes: { placeholder: "Ketik password di sini...", type: "password", id: "input-field", className: "form-control" } }, buttons: { cancel: { text: "Batal", visible: true, className: "btn btn-danger" }, confirm: { text: "Submit", className: "btn btn-success" } }    
    }).then((valueTransAllIn) => {
        if (valueTransAllIn !== null) { // Jika user tidak membatalkan
            if (valueTransAllIn === correctPasswordTAllin) {
                swal({ title: "Berhasil!", text: "Password benar!", icon: "success", buttons: { confirm: { text: "OK", className: "btn btn-success" } } });
                // Menampilkan kode rahasia
                document.getElementById("secret-code-transaksiAllin").classList.remove("hidden");
                // Menghilangkan tombol input password
                document.getElementById("btn-password-transaksi-all").classList.add("hidden");
            } else {
                swal({ title: "Gagal!", text: "Password salah, coba lagi!", icon: "error", buttons: { confirm: { text: "Coba Lagi", className: "btn btn-danger" } } });
            }
        }
    });
}
// Password Transaksi ALL IN Arda
const passwordDeposit = "depositAGZ10";
function showPasswordDeposit() {
    swal({ title: "Masukkan Password", content: { element: "input", attributes: { placeholder: "Ketik password di sini...", type: "password", id: "input-field", className: "form-control" } }, buttons: { cancel: { text: "Batal", visible: true, className: "btn btn-danger" }, confirm: { text: "Submit", className: "btn btn-success" } }    
    }).then((valueDeposit) => {
        if (valueDeposit !== null) { // Jika user tidak membatalkan
            if (valueDeposit === passwordDeposit) {
                swal({ title: "Berhasil!", text: "Password benar!", icon: "success", buttons: { confirm: { text: "OK", className: "btn btn-success" } } });
                // Menampilkan kode rahasia
                document.getElementById("secret-code-Deposit").classList.remove("hidden");
                // Menghilangkan tombol input password
                document.getElementById("btn-password-Deposit").classList.add("hidden");
            } else {
                swal({ title: "Gagal!", text: "Password salah, coba lagi!", icon: "error", buttons: { confirm: { text: "Coba Lagi", className: "btn btn-danger" } } });
            }
        }
    });
}

// HITUNG NOTA
function formatRupiah(angka) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(angka);
}

function hitungTotal() {
    let total = 0;
    document.querySelectorAll(".px-0").forEach(item => {
        total += parseInt(item.getAttribute("data-pengeluaran")) || 0;
    });

    const totalPengeluaranEl = document.getElementById("totalPengeluaran");
    if (totalPengeluaranEl) {
        totalPengeluaranEl.textContent = formatRupiah(total);
    }
}

// Panggil fungsi untuk menampilkan total saat halaman dimuat
hitungTotal();
