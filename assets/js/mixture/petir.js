// SCRIPT BY ARDA GANZ
// DILARANG MENCOLONG ATAU MENGOTAK ATIK CODE
// JIKA KETAHUAN MAKA AKAN DIKENAKAN SANKSI YANG BERWAJIB


    function petir() {
      const overlay = document.getElementById('petirOverlay');
      const sound = document.getElementById('soundPetir');

      overlay.style.display = 'flex';
      sound.currentTime = 0;
      sound.play();

      setTimeout(() => {
        overlay.style.display = 'none';
      }, 5000); // durasi efek petir
    }