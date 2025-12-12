$(document).ready(function () {
  console.log("Layanan tersedia:", layananData); // langsung pakai variabel global
  console.log(window.layananData); // atau langsung layananData

  // Misalnya pakai untuk isi dropdown
  // const $layanan = $('#layanan');
   // if (layananData.followersInstIndo) {
   // layananData.followersInstIndo.forEach(item => {
   // const option = new Option(item.text, item.value, false, false);
   // $layanan.append(option);
   //});
//}
});



  let hargaPerUnitTerpilih = 0;

  $(document).ready(function () {
    $('#kategori, #layanan').select2({
      theme: 'bootstrap-5',
      placeholder: "Select Services",
      allowClear: false
    }).on('select2:open', function () {
      setTimeout(function () {
        document.querySelector('.select2-container--open .select2-search__field')?.blur();
      }, 10);
    });

    $('#kategori').on('change', updateLayanan);
    $('#layanan').on('change', updateInfo);
  });

  function updateLayanan() {
    const kategori = $('#kategori').val();
    const $layanan = $('#layanan');
    $('#infoLayanan').text('');
    $('#jumlah, #harga').val('');
    hargaPerUnitTerpilih = 0;

    $layanan.empty().append('<option value="">-- Pilih Layanan --</option>');

    if (layananData[kategori]) {
      layananData[kategori].forEach(item => {
        const option = new Option(item.text, item.value, false, false);
        $layanan.append(option);
      });
    }

    $layanan.trigger('change.select2');
  }

  function updateInfo() {
  const kategori = $('#kategori').val();
  const layananVal = $('#layanan').val();
  const selected = layananData[kategori]?.find(item => item.value === layananVal);

  if (selected) {
    $('#infoLayanan').html(selected.info);
    $('#minimalOrder').text(selected.minimal || '');
    hargaPerUnitTerpilih = selected.hargaPerUnit;

    $('#hargaPerUnit').val(`${selected.hargaPerUnit.toLocaleString("id-ID")}`);
    $('#hargaPerK').val(`${selected.hargaPerK.toLocaleString("id-ID")}`);
  } else {
    $('#infoLayanan').text('');
    $('#minimalOrder').text('');
    hargaPerUnitTerpilih = 0;

    $('#hargaPerUnit').val('');
    $('#hargaPerK').val('');
  }

  $('#jumlah, #harga').val('');
}




  function hitungHarga() {
    const jumlah = parseInt($('#jumlah').val());
    if (!isNaN(jumlah) && jumlah > 0 && hargaPerUnitTerpilih > 0) {
      const total = jumlah * hargaPerUnitTerpilih;
      $('#harga').val(total.toLocaleString("id-ID"));
    } else {
      $('#harga').val('');
    }
  }

  function kirimWhatsApp() {
    const namaBuyyer = $('#namaBuyyer').val().trim();
    const kategoriVal = $('#kategori').val();
    const layananVal = $('#layanan').val();
    const jumlah = $('#jumlah').val();
    const harga = $('#harga').val();

    let pesan = '';

    if (!namaBuyyer) pesan += '- Username belum diisi\n';
    if (!kategoriVal) pesan += '- Kategori belum dipilih\n';
    if (!layananVal) pesan += '- Layanan belum dipilih\n';
    if (!jumlah || parseInt(jumlah) <= 0) pesan += '- Jumlah belum valid\n';
    if (!harga) pesan += '- Harga belum dihitung\n';

    if (pesan) {
      return swal({
        title: "Ups!",
        text: pesan,
        icon: "error",
        buttons: {
          confirm: {
            text: "OKE KAK",
            className: "btn btn-soft-danger"
          }
        }
      });
    }

    const now = new Date();
    const tanggal = now.toLocaleDateString('id-ID');
    const waktu = now.toTimeString().split(' ')[0];

    const kategori = $('#kategori option:selected').text();
    const layanan = $('#layanan option:selected').text();

    const tandakutip = "```";
    const bintang = "\u2728"; //BINTANG GALAXY
  

    const message = `
${bintang}          ${tandakutip}DETAIL PESANAN${tandakutip}          ${bintang}
- *Kategori* : ${kategori}
- *Layanan* : ${layanan}
- *Varian* : ${jumlah}
- *Harga* : Rp ${harga}

${bintang}         ${tandakutip}DETAIL CUSTOMER${tandakutip}        ${bintang}
- *Akun* : ${namaBuyyer}
- *Waktu* : ${waktu}
- *Tanggal* : ${tanggal}
`;

    const isMobile = /android|iphone|ipad/i.test(navigator.userAgent);
    const url = isMobile
      ? `https://wa.me/6283143831566?text=${encodeURIComponent(message)}`
      : `https://web.whatsapp.com/send?phone=6283143831566&text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  }