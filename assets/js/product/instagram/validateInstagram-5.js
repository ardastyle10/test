let hargaPerUnitTerpilih = 0;
let minimalOrderTerpilih = 0;
let maksimalOrderTerpilih = 0;

$(document).ready(function () {
  console.log("Layanan tersedia:", window.layananData);

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

  $('#jumlah').on('blur', function () {
    const jumlah = parseInt($(this).val());
    if (!isNaN(jumlah)) {
      if (jumlah < minimalOrderTerpilih) {
        swal({
          title: "Jumlah terlalu sedikit!",
          text: `Minimal order adalah ${minimalOrderTerpilih}`,
          icon: "warning",
          buttons: {
            confirm: {
              text: "Mengerti",
              className: "btn btn-soft-warning"
            }
          }
        }).then(() => {
          $('#jumlah').focus();
        });
      } else if (jumlah > maksimalOrderTerpilih) {
        swal({
          title: "Jumlah terlalu banyak!",
          text: `Maksimal order adalah ${maksimalOrderTerpilih}`,
          icon: "warning",
          buttons: {
            confirm: {
              text: "Oke Kak",
              className: "btn btn-soft-warning"
            }
          }
        }).then(() => {
          $('#jumlah').focus();
        });
      }
    }

    // Hitung harga setelah validasi
    hitungHarga();
  });
});

function updateLayanan() {
  const kategori = $('#kategori').val();
  const $layanan = $('#layanan');

  $('#infoLayanan').text('');
  $('#jumlah, #harga').val('');
  $('#minimalOrder').text('');
  $('#hargaPerUnit').val('');
  $('#hargaPerK').val('');
  hargaPerUnitTerpilih = 0;
  minimalOrderTerpilih = 0;
  maksimalOrderTerpilih = 0;

  $layanan.empty().append('<option value="">-- Pilih Layanan --</option>');

  const layananList = window.layananData[kategori];

  if (layananList && layananList.length > 0) {
    const userHandle = layananList[0].userHandle || '';
    const noteUserHandle = layananList[0].noteUserHandle || '';

    $('#namaBuyyer').attr('placeholder', userHandle);
    $('#noteKategori').html(`* ${noteUserHandle}`);

    layananList.forEach(item => {
      const option = new Option(item.text, item.value, false, false);
      $layanan.append(option);
    });
  } else {
    $('#jenisKategori').html('');
    $('#noteKategori').html('');
    $('#namaBuyyer').attr('placeholder', '');
  }

  $layanan.trigger('change');
}

function updateInfo() {
  const kategori = $('#kategori').val();
  const layananVal = $('#layanan').val();
  const selected = window.layananData[kategori]?.find(item => item.value === layananVal);

  if (selected) {
    $('#infoLayanan').html(selected.info);
    $('#minimalOrder').text(selected.minimalTextInfo || '');
    hargaPerUnitTerpilih = selected.hargaPerUnit;
    minimalOrderTerpilih = selected.minimalOrderInput || 0;
    maksimalOrderTerpilih = selected.maximalOrderInput || Infinity;

    $('#hargaPerUnit').val(`${selected.hargaPerUnit.toLocaleString("id-ID")}`);
    $('#hargaPerK').val(`${selected.hargaPerK.toLocaleString("id-ID")}`);
  } else {
    $('#infoLayanan').text('');
    $('#minimalOrder').text('');
    hargaPerUnitTerpilih = 0;
    minimalOrderTerpilih = 0;
    maksimalOrderTerpilih = 0;

    $('#hargaPerUnit').val('');
    $('#hargaPerK').val('');
  }

  $('#jumlah, #harga').val('');
}

function hitungHarga() {
  const jumlah = parseInt($('#jumlah').val());

  if (
    !isNaN(jumlah) &&
    jumlah >= minimalOrderTerpilih &&
    jumlah <= maksimalOrderTerpilih &&
    hargaPerUnitTerpilih > 0
  ) {
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
  const bintang = "\u2728";

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
