// SCRIPT BATTERY BY ARDAGANZ
    (function() {
      const batteryIcon = document.getElementById("battery-icon");
      const batteryLevel = document.getElementById("battery-level");
      const chargingStatus = document.getElementById("charging-status");

      function updateBatteryIcon(level) {
        if (level > 0.75) {
          batteryIcon.className = "fa fa-battery-full text-warning";
        } else if (level > 0.5) {
          batteryIcon.className = "fa fa-battery-three-quarters text-warning";
        } else if (level > 0.25) {
          batteryIcon.className = "fa fa-battery-half text-warning";
        } else if (level > 0.1) {
          batteryIcon.className = "fa fa-battery-quarter text-warning";
        } else {
          batteryIcon.className = "fa fa-battery-empty text-warning";
        }
      }

      navigator.getBattery()
        .then(battery => {
          if (battery) {
            function setStatus() {
              const level = battery.level;
              batteryLevel.innerHTML = Math.round(level * 100) + "%";
              chargingStatus.innerHTML = battery.charging ? "&#9889;Charging&#9889;" : "Discharging";
              updateBatteryIcon(level);
              console.log("%c[SUCCESS] Battery :%c " + batteryLevel.innerHTML + " %cCharging :%c " + chargingStatus.innerHTML, "color:#00cc00;font-weight:bold;", "color:black;", "color:#00cc00;font-weight:bold;", "color:black;");
            }

            setStatus();
            battery.addEventListener("levelchange", setStatus, false);
            battery.addEventListener("chargingchange", setStatus, false);
          } else {
            throw new Error('Battery API not supported on your device/computer');
          }
        })
        .catch(error => {
          console.error(error.message);
        });
    })();





// SCRIPT JAM
document.addEventListener('DOMContentLoaded', function() {
    function updateClock() {
        const clockElement2 = document.getElementById('Clock');
        if (!clockElement2) {
        	console.warn("%c[WARNING]%c Element: Clock tidak ditemukan", "color: #ffb300; font-weight: bold;", "color: black;");
            clearInterval(clockInterval);
            return;
        }
        const now2 = new Date();
        const hours2 = String(now2.getHours()).padStart(2, '0');
        const minutes2 = String(now2.getMinutes()).padStart(2, '0');
        const seconds2 = String(now2.getSeconds()).padStart(2, '0');
        const currentTime = `${hours2}:${minutes2}:${seconds2}`;
        console.log("%c[SUCCESS]%c Menampilkan: Jam", "color: #00cc00; font-weight: bold;", "color: black;");
        clockElement2.textContent = currentTime;
    }
    const clockInterval = setInterval(updateClock, 1000);
    updateClock(); 
});










    

// SCRIPT HARI DAN TANGGAL
    function displayDayAndDate() {
      const days2 = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
      const today2 = new Date();
      const dayName2 = days2[today2.getDay()];
      document.getElementById("Today").innerText = `${dayName2}`;
      const day2 = String(today2.getDate()).padStart(2, '0');
      const month2 = String(today2.getMonth() + 1).padStart(2, '0'); // Bulan dimulai dari 0
      const year2 = today2.getFullYear();
      const formattedDate2 = `${day2}/${month2}/${year2}`;
      document.getElementById("Date").innerText = `${formattedDate2}`;
      console.log(`%c[SUCCESS] Day :%c ${dayName2}, %cDate :%c ${formattedDate2}`, "color: #00cc00; font-weight: bold;", "color: black;", "color: #00cc00; font-weight: bold;", "color: black;");
    }


// Get user's IP address
function getip() {
    fetch('https://api.ipify.org?format=json')
        .then(responseIndex => responseIndex.json())
        .then(anjayIp => {
            document.getElementById("ip-address").textContent = anjayIp.ip;
            console.log(`%c[SUCCESS]%c IP: ${anjayIp.ip}`, "color: #00cc00; font-weight: bold;", "color: black;");
        })
        .catch(error => {
            console.error('Error fetching IP data:', error);
        });
}


// === JALANKAN SEMUA SETELAH HALAMAN SELESAI DIMUAT === \\
window.onload = function() {
  displayDayAndDate();
  getip();
};

  
  
  
  

    



//FULL SCREEN BY ARDA
//    const fullScreenElement = document.getElementById('fullScreenElement');
//    const fullscreenButton = document.getElementById('fullscreenButton');

//    fullscreenButton.addEventListener('click', () => {
//      if (fullScreenElement.requestFullscreen) {
//        fullScreenElement.requestFullscreen();
//      } else if (fullScreenElement.mozRequestFullScreen) { /* Firefox */
//        fullScreenElement.mozRequestFullScreen();
//      } else if (fullScreenElement.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
//        fullScreenElement.webkitRequestFullscreen();
//      } else if (fullScreenElement.msRequestFullscreen) { /* IE/Edge */
//        fullScreenElement.msRequestFullscreen();
//      }
//    });



