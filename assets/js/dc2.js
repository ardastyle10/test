function updateClock() {
      const now = new Date();

      const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
      const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
                      "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

      const dayName = days[now.getDay()];
      const day = now.getDate();
      const month = months[now.getMonth()];
      const year = now.getFullYear();

      let hours = now.getHours().toString().padStart(2, '0');
      let minutes = now.getMinutes().toString().padStart(2, '0');
      let seconds = now.getSeconds().toString().padStart(2, '0');

      document.getElementById('time2').textContent = `${hours}:${minutes}:${seconds}`;
      document.getElementById('date2').textContent = `${dayName}, ${day} ${month} ${year}`;
    }

    setInterval(updateClock, 1000);
    updateClock(); // run once on load