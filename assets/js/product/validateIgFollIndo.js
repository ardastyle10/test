// FUNCTION HARGA & SCRIPT VALIDASI WHATSAPP
// BY ARDA GANZ JIKA KETAHUAN MENGCOPY SCRIPT
// SIAP SIAP ANDA BERURUSAN DENGAN SAYA

function hitungHarga() {
    var jumlah = parseInt(document.getElementById('jumlah').value);

    if (isNaN(jumlah)) {
        jumlah = 0;
    }

    var harga = 0;

    if (jumlah < 50) {
        harga = jumlah * 50;
    } else {
        harga = jumlah * 70;
    }

    var totalHarga = harga.toLocaleString('id-ID');
    document.getElementById('totalHarga').value = totalHarga;
    
        // Tampilkan di span
        document.getElementById('outputHarga').innerHTML = totalHarga;
}

function prosesBeli() {
    const nameBuyyer = document.getElementById('nameBuyyer').value.trim();
    const jumlahInput = document.getElementById('jumlah').value.trim();

    if (nameBuyyer === "") {
    swal({ title: "UPS!", text: "Data/Target wajib diisi.", icon: "error", buttons: { confirm: { text: "OKE", className: "btn btn-soft-danger" } } })
    .then(() => {
        document.getElementById('nameBuyyer').focus();
    });
    return false;
}


    if (jumlahInput === "") {
        swal({ title: "UPS!", text: "Jumlah Pesanan wajib diisi.", icon: "error", buttons: { confirm: { text: "OKE", className: "btn btn-soft-danger" } } })
        .then(() => {
        document.getElementById('jumlah').focus();
    });
    return false;
}

    const jumlah = parseInt(jumlahInput);
    if (isNaN(jumlah) || jumlah <= 0) {
        swal({ title: "UPS!", text: "Jumlah Pesanan harus angka lebih dari 0.", icon: "error", buttons: { confirm: { text: "OKE", className: "btn btn-soft-danger" } } });
        document.getElementById('jumlah').focus();
        return false;
    }

    // Hitung Harga
    var harga = 0;
    if (jumlah < 50) {
        harga = jumlah * 50;
    } else {
        harga = jumlah * 70;
    }
    var totalHarga = harga.toLocaleString('id-ID');

    const typeProduct = document.getElementById("product").innerText;
    const nameProduct = document.getElementById("type").innerText;

    const waktu = new Date();
    const tanggal = waktu.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    const clock = waktu.toTimeString().split(' ')[0];

    const noWa = "6283143831566";
    const pesan = `
\u2728 *DETAIL PESANAN* \u2728
*Nama* : ${nameProduct}
*Type* : ${typeProduct}
*Varian* : ${jumlah}
*Harga* : Rp ${totalHarga}

\u2728 *DETAIL CUSTOMER* \u2728
*Akun* : ${nameBuyyer}
*Waktu* : ${clock}
*Tanggal* : ${tanggal}
`;

    const walink = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        ? 'https://api.whatsapp.com/send'
        : 'https://web.whatsapp.com/send';

    window.open(walink + "?phone=" + noWa + "&text=" + encodeURIComponent(pesan), '_blank');

    return false;
}