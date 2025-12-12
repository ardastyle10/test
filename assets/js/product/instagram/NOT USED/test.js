perhatikan kode ini, harga tidak akan muncul ketika dibawah yang diisi di minimalOrderInput

window.layananData = {
followersInstIndo: [
    {
      value: "folligindo_real",
      userHandle: "ardasaha10",
      noteUserHandle: "Ketik username saja",
      text: `Instagram Followers Indonesia [200K] [LOW DROP] [REFILL 25 HARI] INSTAN MASUK ${icons.recycle}${icons.lightning}${icons.fire}${icons.star}`,
      info: teksInfoLayanan1,
      hargaPerK: 75000,
      hargaPerUnit: 75,
      minimalOrderInput: 100,
      minimal: "Min: 100, Maks: 200.000"
    }
  ]
};
									        <div class="form-group has-default">
						   				    <span class="fw-medium">Jumlah Pesan</span>
								   		    <input type="number" id="jumlah" class="form-control" oninput="hitungHarga()" min="1">
									           <span class="text-danger" id="minimalOrder"></span>
										    </div>
										    <div class="form-group has-default">
						   				    <span class="fw-medium">Total Harga</span>
								   		    <input type="text" id="harga" value="0" class="form-control" readonly>
							           		<span class="text-danger">* Inputkan jumlah pesan</span>
										    </div>
										
intinya harga tidak akan muncul atau muncul cuman 0 jika dibawah nominal diLayanan Data misal nominal 10 namun harga tidak muncul/0
dan misal pembeli mengisi nominalOrder lalu ketika pembeli mengisi dibawah nominal namun sudah keluar dari input bakal muncul swal bahwa Harga Wajib sesuai nominal

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
  console.log("Layanan tersedia:", layananData);

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
  $('#minimalOrder').text('');
  $('#hargaPerUnit').val('');
  $('#hargaPerK').val('');
  hargaPerUnitTerpilih = 0;

  $layanan.empty().append('<option value="">-- Pilih Layanan --</option>');

  const layananList = layananData[kategori];

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

  $layanan.trigger('change'); // penting agar updateInfo tetap jalan
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
