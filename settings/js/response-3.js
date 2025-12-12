// Sidebar
    fetch('../../settings/sidebar-3.html')
        .then(response => response.text())
        .then(data => document.getElementById('sidebarArda').innerHTML = data)
        .catch(error => console.error('Error loading sidebar:', error));
        



// Navbar
    fetch("../../settings/navbar-3.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbarArda").innerHTML = data;

        // Jalankan ini setelah navbar dimuat
        const namaOwner = "Arda Style";
        document.querySelectorAll('.copyright2').forEach(function(el){
            el.textContent = namaOwner;
        });
    })
    .catch(error => console.error("Error loading sidebar:", error));
