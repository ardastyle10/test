const btn = document.getElementById("convertBtn");
const input = document.getElementById("ytInput");
const container = document.getElementById("playerContainer");

btn.addEventListener("click", async () => {
  const ytLink = input.value.trim();

  // Wajib isi
  if (ytLink === "") {
    swal({
      title: "Peringatan!",
      text: "Masukkan URL YouTube",
      icon: "warning",
      buttons: {
        confirm: {
          text: "Oke Kak",
          closeModal: true,
          className: "btn btn-soft-warning"
        }
      }
    }).then(() => { input.focus(); });
    return;
  }

  // Validasi URL
  if (!ytLink.startsWith("http://") && !ytLink.startsWith("https://")) {
    swal({
      title: "Peringatan!",
      text: "URL wajib http:// atau https://",
      icon: "warning",
      buttons: {
        confirm: {
          text: "Oke Kak",
          closeModal: true,
          className: "btn btn-soft-warning"
        }
      }
    }).then(() => { input.focus(); });
    return;
  }

  if (!ytLink.includes("youtu")) {
    swal({
      title: "Peringatan!",
      text: "URL wajib YouTube",
      icon: "warning",
      buttons: {
        confirm: {
          text: "Oke Kak",
          closeModal: true,
          className: "btn btn-soft-warning"
        }
      }
    }).then(() => { input.focus(); });
    return;
  }

  container.innerHTML = `
    <div class="text-center text-info">
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span role="status"> Loading...</span>
    </div>`;
  btn.textContent = "Loading...";
  btn.disabled = true;

  try {
    console.log("%c[FETCH] Meminta data dari API...", "color:#00bcd4; font-weight:bold;");
    const res = await fetch(`https://api.sxtream.xyz/downloader/aio?url=${encodeURIComponent(ytLink)}`);
    const json = await res.json();

    console.log("%c[JSON DITERIMA] Data berhasil didapatkan dari API", "color:#4caf50; font-weight:bold;");
    // console.log(json); tampilkan seluruh isi JSON

    // Cek apakah result ada
    if (!json.result || !json.result.medias) {
      console.warn("%c[PERINGATAN] Struktur JSON tidak sesuai yang diharapkan", "color:#ff9800;");
      throw new Error("Struktur JSON tidak valid atau kosong");
    }

    // 🔊 cari file mp4 (360p) tapi diputar sebagai audio
const audioData = json.result.medias.find(
  m => m.label && m.label.toLowerCase().includes("mp4 (360p)")
);


    if (!audioData) {
      console.error("%c[AUDIO] Tidak ditemukan format M4A", "color:red;");
      throw new Error("Audio M4A tidak ditemukan");
    }

    console.log("%c[MP4 (360p) DITEMUKAN] 🔊 Akan diputar sebagai audio:", "color:#2196f3;", audioData.url);


    const musicUrl = audioData.url;

    // tampilkan audio player
    container.innerHTML = `
      <audio id="audioPlayer" src="${musicUrl}"></audio>

      <div class="progress mb-2">
        <div class="progress-bar" id="progressBar" role="progressbar" style="width: 0%"></div>
      </div>

      <div class="d-flex justify-content-between small text-muted">
        <span id="currentTime">0:00</span>
        <span id="duration">0:00</span>
      </div>

      <div class="position-relative d-flex justify-content-between align-items-center px-2 p-4" style="height: 60px;">
        <i class="bi bi-star fs-30"></i>
        <div class="position-absolute top-50 start-50 translate-middle d-flex gap-4">
          <i class="bi bi-skip-backward-fill fs-30"></i>
          <i class="bi bi-play-fill fs-30" id="playPause"></i>
          <i class="bi bi-fast-forward-fill fs-30"></i>
        </div>
        <i class="fab fa-bluetooth-b fs-30"></i>
      </div>
    `;

    const audio = document.getElementById("audioPlayer");
    const playPause = document.getElementById("playPause");
    const progressBar = document.getElementById("progressBar");
    const currentTimeEl = document.getElementById("currentTime");
    const durationEl = document.getElementById("duration");

    playPause.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        playPause.classList.replace("bi-play-fill", "bi-pause-fill");
      } else {
        audio.pause();
        playPause.classList.replace("bi-pause-fill", "bi-play-fill");
      }
    });

    audio.addEventListener("loadedmetadata", () => {
      durationEl.textContent = formatTime(audio.duration);
    });

    audio.addEventListener("timeupdate", () => {
      const percent = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = percent + "%";
      currentTimeEl.textContent = formatTime(audio.currentTime);
    });

    function formatTime(sec) {
      const minutes = Math.floor(sec / 60);
      const seconds = Math.floor(sec % 60).toString().padStart(2, "0");
      return `${minutes}:${seconds}`;
    }

  } catch (err) {
    console.error("%c[ERROR]", "color:red; font-weight:bold;", err);
    alert("Error: " + err.message);
  } finally {
    btn.textContent = "Convert";
    btn.disabled = false;
  }
});
