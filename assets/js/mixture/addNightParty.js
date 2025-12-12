const defaultData = {
  textIcon: "",
  btnColor: "",
  bgGambar: "",
  gambar: "",
  judul: "",
  label: "",
  iconBintang: "",
  bintang: "",
  review: "",
  lokasi: "",
  tiktok: "",
  linkTiktok: "",
  instagram: "",
  linkInstgram: "",
  noTelp: "",
  linkTelp: "",
  linkLokasi: ""
};

const preview = document.getElementById("jsonPreview");
const form = document.getElementById("jsonForm");
const copyBtn = document.getElementById("copyJson");
const copyIcon = document.getElementById("copyIcon");
const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");

function updateJson() {
  const formData = new FormData(form);
  const newData = { ...defaultData };
  formData.forEach((val, key) => {
    newData[key] = val ?? ""; // fallback aman
  });
  // pakai JSON asli biar valid
  preview.value = JSON.stringify(newData, null, 1);
  return newData;
}

// Tampilkan JSON awal
updateJson();

// Real-time update
form.querySelectorAll("input, select").forEach(el => {
  el.addEventListener("input", updateJson);
  el.addEventListener("change", updateJson);
});

// SAVE ke localStorage
saveBtn.addEventListener("click", () => {
  const data = updateJson();
  localStorage.setItem("formData", JSON.stringify(data));
  console.log("Data tersimpan:", data);
});

// LOAD dari localStorage
window.addEventListener("DOMContentLoaded", () => {
  const savedData = localStorage.getItem("formData");
  if (savedData) {
    try {
      const parsed = JSON.parse(savedData);
      Object.keys(parsed).forEach(key => {
	  if (form.elements[key] && parsed[key] !== "") {
	    form.elements[key].value = parsed[key];
	  }
	});
      console.log("Data dimuat:", parsed);
      updateJson();
    } catch (e) {
      console.error("Data localStorage rusak:", e);
      localStorage.removeItem("formData");
    }
  }
});

// CLEAR hanya field tertentu
clearBtn.addEventListener("click", () => {
  // field yang TIDAK dihapus
  const keepFields = ["bgGambar", "tiktok", "instagram", "noTelp", "linkTelp"];

  Object.keys(defaultData).forEach(key => {
    if (form.elements[key] && !keepFields.includes(key)) {
      form.elements[key].value = "";
    }
  });

  const clearedData = updateJson();
  localStorage.setItem("formData", JSON.stringify(clearedData));
  console.log("Data setelah clear:", clearedData);
});

// Copy ke clipboard dengan ikon animasi
copyBtn.addEventListener("click", () => {
  const text = preview.value;
  navigator.clipboard.writeText(text).then(() => {
    // ganti icon jadi check
    copyIcon.classList.replace("bi-clipboard", "bi-check2");
    copyBtn.classList.replace("btn-black", "btn-success");
    // setelah 2 detik balik lagi
    setTimeout(() => {
      copyIcon.classList.replace("bi-check2", "bi-clipboard");
      copyBtn.classList.replace("btn-success", "btn-black");
    }, 2000);
  });
});
