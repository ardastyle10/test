// Simpan URL di dalam variabel (tidak terlihat di halaman)
        let linknya = window.location.href;

        document.getElementById("salinBtn").addEventListener("click", function(event) {
            event.preventDefault();
            
            // Salin hanya isi variabel linknya
            navigator.clipboard.writeText(linknya).then(function() {
                var icon = document.querySelector("#salinBtn i");
                icon.classList.remove("bi-copy");
                icon.classList.add("bi-check2");
                
                setTimeout(function() {
                    icon.classList.remove("bi-check2");
                    icon.classList.add("bi-copy");
                }, 1300);
            }).catch(function(err) {
                console.error("Gagal menyalin teks: ", err);
            });
        });
        
        // Tampilkan URL halaman saat ini
        // document.getElementById("webUrl").textContent = window.location.href;