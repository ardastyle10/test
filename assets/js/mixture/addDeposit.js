
document.addEventListener("DOMContentLoaded", function() {
  const inputs = [
    "dateDeposit2",
    "inputDeposit2",
    "inputWithdraw2",
    "selectPaymentTo2",
    "inputNote2",
    "selectStatus2"
  ];
  const resultBox = document.getElementById("resultBox2");
  const copyBtn = document.getElementById("copyBtn2");

  function updateJSON() {
    const dateDeposit = document.getElementById("dateDeposit2").value || "infoDateDeposit2";
    const deposit = document.getElementById("inputDeposit2").value || "infoDeposit2";
    const withdraw = document.getElementById("inputWithdraw2").value || "infoWithdraw2";
    const paymentTo = document.getElementById("selectPaymentTo2").value || "infoPaymentTo2";
    const note = (document.getElementById("inputNote2").value || "infoNote2").toUpperCase();
    const status = document.getElementById("selectStatus2").value || "infoStatus2";

    const data = {
      date: dateDeposit,
      deposit: deposit,
      withdraw: withdraw,
      paymentTo: paymentTo,
      note: note,
      status: status
    };

    // hasil JSON langsung ke input (satu baris)
    const customFormat = Object.entries(data)
      .map(([key, value]) => `${key}: "${value}"`)
      .join(", ");
    resultBox.value = `{ ${customFormat} }`;
  }

  // Event real-time
  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", updateJSON);
      el.addEventListener("change", updateJSON);
    }
  });

  // Tombol salin
  copyBtn.addEventListener("click", function() {
    navigator.clipboard.writeText(resultBox.value).then(() => {
      copyBtn.innerHTML = '<iconify-icon icon="mdi:check"></iconify-icon>';
      setTimeout(() => {
        copyBtn.innerHTML = '<iconify-icon icon="mdi:content-copy"></iconify-icon>';
      }, 1500);
    });
  });

  // Jalankan pertama kali
  updateJSON();
});


// SCRIPT UNTUK HANYA ANGKA DAN FORMAT RUPIAH TITIK
function formatRpDeposit(el) {
  const info = document.getElementById("infoDeposit2");
  const raw = el.value;
  if (raw.trim() === "") {
    info.textContent = "";
    info.style.display = "none";
    return;
  }
  let value = raw.replace(/\D/g, "");
  if (value === "") {
    info.textContent = "* Hanya angka yang akan diformat.";
    info.style.display = "block";
  } else {
    el.value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    info.textContent = "";
    info.style.display = "none";
  }
}

function formatRpWithdraw(el) {
  const info = document.getElementById("infoWithdraw2");
  const raw = el.value;
  if (raw.trim() === "") {
    info.textContent = "";
    info.style.display = "none";
    return;
  }
  let value = raw.replace(/\D/g, "");
  if (value === "") {
    info.textContent = "* Hanya angka yang akan diformat.";
    info.style.display = "block";
  } else {
    el.value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    info.textContent = "";
    info.style.display = "none";
  }
}

// Awal: info disembunyikan
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("infoDeposit2").style.display = "none";
  document.getElementById("infoWithdraw2").style.display = "none";
});

