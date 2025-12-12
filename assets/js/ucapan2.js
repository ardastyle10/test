    function tampilkanUcapan() {
      const ucapan2 = document.getElementById("ucapan2");
      const now = new Date();
      const jam = now.getHours();

      let ucapan = "";

      if (jam >= 4 && jam < 5) {
        ucapan = "Waktunya solat subuh";
      } else if (jam >= 5 && jam < 11) {
        ucapan = "Good morning";
      } else if (jam >= 11 && jam < 15) {
        ucapan = "Good afternoon";
      } else if (jam >= 15 && jam < 18) {
        ucapan = "Good afternoon";
      } else if (jam >= 18 && jam < 19) {
        ucapan = "Good evening";
      } else if (jam >= 19 && jam < 24) {
        ucapan = "Selamat malam";
      } else if (jam >= 0 && jam < 3) {
        ucapan = "Have a Sweet Dreams!";
      } else {
        ucapan = "Good morning";
      }

      ucapan2.innerText = ucapan;
    }

    window.onload = tampilkanUcapan;