  const musicList = [
    {
      title: "Lagu 1",
      file: "assets/music/lagu1.mp3",
      image: "assets/music/lagu3.jpg"
    },
    {
      title: "Lagu 2",
      file: "assets/music/lagu2.mp3",
      image: "assets/music/lagu3.jpg"
    },
    {
      title: "Lagu 3",
      file: "assets/music/lagu3.mp3",
      image: "assets/music/lagu3.jpg"
    }
  ];

  function showMusicSelector() {
    let select = document.createElement("select");
    select.className = "form-control";
    select.innerHTML = `<option disabled selected>Pilih Lagu...</option>`;
    musicList.forEach((m, i) => {
      let opt = document.createElement("option");
      opt.value = i;
      opt.text = m.title;
      select.appendChild(opt);
    });

    swal({
      title: "Pilih Musik",
      content: select,
      buttons: {
        confirm: {
          text: "Mainkan",
          closeModal: false,
          className: "btn btn-soft-info"
        }
      },
    }).then((willPlay) => {
      if (willPlay) {
        const selectedIndex = parseInt(select.value); // memastikan selectedIndex adalah angka
        if (isNaN(selectedIndex)) {
          // Jika tidak ada lagu yang dipilih
          swal("Ups!", "Kamu belum memilih lagu!", "warning").then(() => {
            // Menampilkan kembali pemilih musik setelah pesan kesalahan
            showMusicSelector();
          });
          return;
        }

        // Jika lagu dipilih
        const music = musicList[selectedIndex];
        const audio = document.getElementById("audioPlayer2");
        audio.src = music.file;
        audio.play();

        // Menambahkan info media untuk notifikasi
        if ('mediaSession' in navigator) {
          navigator.mediaSession.metadata = new MediaMetadata({
            title: music.title,
            artist: "Arda Ganz",
            album: "ArdaSaha10",
            artwork: [
              { src: music.image, sizes: '512x512', type: 'image/jpeg' }
            ]
          });
        }

        swal.close(); // Menutup SweetAlert
      }
    });
  }

  // Show swal on page load
  document.addEventListener("DOMContentLoaded", showMusicSelector);