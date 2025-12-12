

// Data kecepatan dan waktu pengecekan
window.data = {
  5: 470,
  10: 520,
  15: 550,
  20: 695,
  30: 750,
  40: 2549
};

window.terakhirKaliDiCheck = [
  "5 menit yang lalu",
  "10 menit yang lalu",
  "20 menit yang lalu",
  "30 menit yang lalu",
  "45 menit yang lalu",
  "1 jam yang lalu",
  "1 jam 20 menit yang lalu",
  "1 jam 30 menit yang lalu",
  "1 jam 45 menit yang lalu"
];

// Ambil key secara acak
window.keys = Object.keys(data);
window.orderClear = keys[Math.floor(Math.random() * keys.length)];
window.lastCheck = data[orderClear];
// Ambil waktu secara acak
window.waktuCheck = terakhirKaliDiCheck[Math.floor(Math.random() * terakhirKaliDiCheck.length)];




window.teksInfoLayanan1 = `<h5 class="mt-4">Keunggulan Layanan :</h5>
<ol class="f-poppins mb-5">
<li class="mb-3">Garansi 100% Refill: <b>Jaminan Refill penuh jika followers Bekurang 100% .Silahkan ajukan di tiket-WA atau livechat . Kami akan mengisi kembali secara otomatis agar jumlah followers Anda Betambah lagi sesuai orderan anda.</b></li>
<li class="mb-3">Jangan Submit Layanan Lain: <b>Harap tidak menggunakan layanan lain selama proses followers sedang diisi. Hal ini dapat mempengaruhi sistem layanan kami.</b></li>
<li class="mb-3">Jika sukses tetapi tidak masuk: <b>Kami tidak akan menerima keluhan jika layanan kami sukses tidak masuk Karena anda order di tempat lain. Pastikan tidak melakukan pemesanan di tempat lain selama proses pengisian followers berlangsung.</b></li>
<li class="mb-3">Anti Double Order: <b>Hindari melakukan double order di layanan  lain atau panel lain selama pengisian followers sedang berlangsung.</b></li>
<li class="mb-3">Refill Request Melalui Tiket atau Link API: <b>Proses refill dapat diminta melalui tiket atau link API secara otomatis. Pastikan memberikan informasi yang lengkap dan akurat saat mengirimkan tiket - wa atau livechat</b></li>
<li class="mb-3">Drop Rate 1% - 10% (Tergantung Instagram)</li>
<li class="mb-3">Bisa Drop 40% Lebih (Setelah Update Instagram): <b>Harap diingat bahwa setelah Instagram update/ sedang rajia, bisa terjadi penurunan hingga 40%. Namun, kami akan tetap berusaha mengisi kembali followers Anda Jika durasi masih ada.</b></li>
</ol>


<h5>Catatan Penting :</h5>
<ul class="f-poppins mb-5">
<li class="mb-3">Jenis Akun yang Ditolak: <b>Kami tidak akan mengisi followers untuk akun judi, narkoba, atau akun dengan konten yang dilarang di Indonesia. Kami berhak membatalkan pemesanan untuk jenis akun tersebut.</b></li>
<li class="mb-3">Garansi Durasi: <b>Garansi refill berlaku selama 40  hari. Pastikan tidak melakukan pemesanan di tempat lain dan memastikan akun Anda sesuai dengan orderan selama periode ini.</b></li>
<li class="mb-3">Batas Waktu Pembelian: <b>Pembelian yang melampaui 40 hari tidak berlaku untuk garansi refill. Harap perhatikan batas waktu ini.</b></li>
</ul>

<p>Jumlah Order Selesai Rata-Rata = 622. Kecepatan Rata-Rata = 56 Menit. Terakhir Kali Dicek 14 Menit yang Lalu<br>KECEPATAN RATA-RATA BISA LEBIH CEPAT ATAU BISA LEBIH LAMBAT TERGANTUNG BANYAKNYA ORDERAN DAN KEADAAN SERVER SAAT ITU</p>
`;

window.speed = `<p class="mt-4 f-poppins fs-13">Jumlah Order Selesai Rata-Rata = ${lastCheck}. Kecepatan Rata-Rata = ${orderClear} Menit. Terakhir Kali Dicek ${waktuCheck}<br>KECEPATAN RATA-RATA BISA LEBIH CEPAT ATAU BISA LEBIH LAMBAT TERGANTUNG BANYAKNYA ORDERAN DAN KEADAAN SERVER SAAT ITU</p>`;
window.speed2 = `<p class="mt-4 f-poppins fs-13">Jumlah Order Selesai Rata-Rata = 2780. Kecepatan Rata-Rata = ${orderClear} Menit. Terakhir Kali Dicek ${waktuCheck}<br>KECEPATAN RATA-RATA BISA LEBIH CEPAT ATAU BISA LEBIH LAMBAT TERGANTUNG BANYAKNYA ORDERAN DAN KEADAAN SERVER SAAT ITU</p>`;
window.speed3 = `Kecepatan Rata-Rata = ${orderClear} Menit. Terakhir Kali Dicek ${waktuCheck}<br>KECEPATAN RATA-RATA BISA LEBIH CEPAT ATAU BISA LEBIH LAMBAT TERGANTUNG BANYAKNYA ORDERAN DAN KEADAAN SERVER SAAT ITU</p>`;





	
window.speedbots1 = `
<div class="mt-3 f-poppins">
<span>Start Time: 0-5 min<br>
Speed: 400-1K/Hour<br>
Quality: Bots 100% With PP + Post<br>
Drop rate: =+40%<br>
Refill Start Time: Instant</span><br><br>
<span>Jumlah Order Selesai Rata-Rata = ${lastCheck}. Kecepatan Rata-Rata = ${orderClear} Menit. Terakhir Kali Dicek ${waktuCheck}<br>
KECEPATAN RATA-RATA BISA LEBIH CEPAT ATAU BISA LEBIH LAMBAT TERGANTUNG BANYAKNYA ORDERAN DAN KEADAAN SERVER SAAT ITU
</span>
</div>
`;

window.icons = {
  recycle: "\u267B\uFE0F", // MUDAH UNTUK REFILL
  lightning: "\u26A1",
  fire: "\u{1F525}", // TERATAS
  star: "\u2B50", // BINTANG
  water: "\u{1F4A7}", // Air
  noEntry: "\u26D4",     // No Entry( Dilarang masuk)
  indonesia: "\uD83C\uDDEE\uD83C\uDDE9"
};
    





window.layananData = {
  // ...
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
      maximalOrderInput: 200000,
      minimalTextInfo: "Min: 100, Maks: 200.000"
    }
  ],
  // kategori lain...
  
  folligGuaranteed: [
    {
      value: "bot1",
      userHandle: "ardasaha10",
      noteUserHandle: "Ketik username saja",
      text: `25186 - Instagram Followers [Refill: 365D] [SPAM ON] [Max: 1M] [Start Time: 0-1 Hr] [Speed: Up to 100K/D] ${icons.water}${icons.noEntry}${icons.recycle}`,
      info: speed,
      hargaPerUnit: 50,
      hargaPerK: 50000,
      minimalOrderInput: 10,
      maximalOrderInput: 1000000,
      minimalTextInfo: "Min: 10, Maks: 1.000.000"
    },
    {
      value: "bot2",
      userHandle: "ardasaha10",
      noteUserHandle: "Ketik username saja",
      text: `27965 - Instagram Followers [ Disable flag for review ] [ Drop Less ] [ 365 Days refill ] speed 300k/day`,
      info: speed2,
      hargaPerUnit: 45,
      hargaPerK: 45000,
      minimalOrderInput: 10,
      maximalOrderInput: 5000000,
      minimalTextInfo: "Min: 10, Maks: 5.000.000"
    },
    {
      value: "bot3",
      userHandle: "ardasaha10",
      noteUserHandle: "Ketik username saja",
      text: `27922 - Instagram Followers [ Disable flag for review ] [ Speed 200k-400k/day ] [ Drop: 0% ] [ 365 Days Refill ] [ Refill enable ]`,
      info: speed,
      hargaPerUnit: 45,
      hargaPerK: 45000,
      minimalOrderInput: 10,
      maximalOrderInput: 5000000,
      minimalTextInfo: "Min: 10, Maks: 5.000.000"
    },
    {
      value: "bot4",
      userHandle: "ardasaha10",
      noteUserHandle: "Ketik username saja",
      text: `25653 - Instagram Followers [Refill: 30D] [SPAM ON] [Max: 1M] [Start Time: 0-1 Hr] [Speed: Up to 100K/D] ${icons.water}${icons.noEntry}${icons.recycle}`,
      info: `<p class="mt-4 f-poppins fs-13">Jumlah Order Selesai Rata-Rata = 10772. ${speed3}`,
      hargaPerUnit: 45,
      hargaPerK: 45000,
      minimalOrderInput: 10,
      maximalOrderInput: 5000000,
      minimalTextInfo: "Min: 10, Maks: 5.000.000"
    },
    {
      value: "bot5",
      userHandle: "ardasaha10",
      noteUserHandle: "Ketik username saja",
      text: `29089 - Instagram Followers [ Max 1M ] | Old Accounts With Posts | Cancel Enable | 30 Days ${icons.recycle} | Day 1K-50K ${icons.lightning} ${icons.star} 𝐀𝐥𝐥 𝐅𝐥𝐚𝐠 𝐓𝐲𝐩𝐞𝐬 𝐖𝐨𝐫𝐤𝐢𝐧𝐠 ${icons.star}`,
      info: speed,
      hargaPerUnit: 30,
      hargaPerK: 30000,
      minimalOrderInput: 10,
      maximalOrderInput: 1000000,
      minimalTextInfo: "Min: 10, Maks: 1.000.000"
    },
    {
      value: "bot6",
      userHandle: "ardasaha10",
      noteUserHandle: "Ketik username saja",
      text: `27748 - Instagram - Followers ~ [ 𝐃𝐢𝐬𝐚𝐛𝐥𝐞 𝐅𝐥𝐚𝐠 𝐑𝐞𝐯𝐢𝐞𝐰 ] ~ 𝗥𝗘𝗙𝗜𝗟𝗟 30D ~ 5k-20k/days ~ [ 𝔅𝗲𝙨𝘁 - 𝐐𝐮𝐚𝐥𝐢𝐭𝐲 ]`,
      info: `<p class="mt-4 f-poppins fs-13">Jumlah Order Selesai Rata-Rata = 1783. ${speed3}`,
      hargaPerUnit: 32,
      hargaPerK: 32000,
      minimalOrderInput: 10,
      maximalOrderInput: 500000,
      minimalTextInfo: "Min: 10, Maks: 500.000"
    }
  ],
  
  likeIGAkunMix: [
    {
      value: "instagramLikeMix1",
      userHandle: "https://www.instagram.com/p/id-instagram",
      noteUserHandle: "Masukkan link postingan",
      text: `${icons.fire} 22159 - Instagram Likes [Refill: 30D] [Speed: 5K/Day] [Start Time: INSTANT]`,
      info: `<p class="mt-4 f-poppins fs-13">Jumlah Order Selesai Rata-Rata = 1753. ${speed3}`,
      hargaPerK: 5000,
      hargaPerUnit: 5,
      minimalOrderInput: 10,
      maximalOrderInput: 500000,
      minimalTextInfo: "Min: 10, Maks: 500.000"
    },
    {
      value: "instagramLikeMix2",
      userHandle: "https://www.instagram.com/p/id-instagram",
      noteUserHandle: "Masukkan link postingan",
      text: `22163 - Instagram Likes [Refill: 60 Days] [Speed: 20K/Day] [Start Time: 0-3 Hours] ${icons.water}${icons.noEntry}`,
      info: `<p class="mt-4 f-poppins fs-13">Jumlah Order Selesai Rata-Rata = 3110. ${speed3}`,
      hargaPerK: 5000,
      hargaPerUnit: 5,
      minimalOrderInput: 10,
      maximalOrderInput: 500000,
      minimalTextInfo: "Min: 10, Maks: 500.000"
    },
    {
      value: "instagramLikeMix3",
      userHandle: "https://www.instagram.com/p/id-instagram",
      noteUserHandle: "Masukkan link postingan",
      text: `17292 - Instagram Likes [Refill: No] [Max: 300K] [Start Time: 0 - 1 Hr] [Speed: 50K/D] ${icons.water}${icons.noEntry}`,
      info: `<p class="mt-4 f-poppins fs-13">Jumlah Order Selesai Rata-Rata = 3826. ${speed3}`,
      hargaPerK: 3000,
      hargaPerUnit: 3,
      minimalOrderInput: 10,
      maximalOrderInput: 500000,
      minimalTextInfo: "Min: 10, Maks: 500.000"
    }
  ],
  
  likeIGAkunIndo: [
    {
      value: "likeigindo1",
      userHandle: "https://www.instagram.com/p/id-instagram",
      noteUserHandle: "Masukkan link postingan",
      text: `27570 - Instagram Likes Indonesia ${icons.indo} ] [ Max: 10K ] BONUS ++ [ PROMO AWAL TAHUN ] [ REFILL 2 DAYS ]`,
      info: `<p class="mt-4 f-poppins fs-13"><b>JIKA OVERLOAD AKAN OFF</b><br><br><br>Jumlah Order Selesai Rata-Rata = 395. ${speed3}`,
      hargaPerK: 6200,
      hargaPerUnit: 6.2,
      minimalOrderInput: 100,
      maximalOrderInput: 10000,
      minimalTextInfo: "Min: 100, Maks: 10.000"
    },
    {
      value: "likeigindo2",
      userHandle: "https://www.instagram.com/p/id-instagram",
      noteUserHandle: "Masukkan link postingan",
      text: `30558 - Instagram Likes [ Indonesia ${icons.indo} ] [Max: 1K] | Real Acounts | 3 Days ${icons.recycle} | Instant Start | Day 1K`,
      info: speed,
      hargaPerK: 10602,
      hargaPerUnit: 0.010602,
      minimalOrderInput: 100,
      maximalOrderInput: 1000,
      minimalTextInfo: "Min: 100, Maks: 1.000"
    },
    {
      value: "likeigindo3",
      userHandle: "https://www.instagram.com/p/id-instagram",
      noteUserHandle: "Masukkan link postingan",
      text: `3448 - Instagram Likes Indonesia [50K] ALL LINK [REFILL 5 HARI] ${icons.lightning}${icons.fire}`,
      info: `<p class="mt-4 f-poppins fs-13"><b>NO REFILL REAL ACCOUNT + BOT</b><br><br><br>Jumlah Order Selesai Rata-Rata = 395. ${speed3}`,
      hargaPerK: 7200,
      hargaPerUnit: 7.2,
      minimalOrderInput: 100,
      maximalOrderInput: 30000,
      minimalTextInfo: "Min: 100, Maks: 30.000"
    }
  ],
  
  instagramViews: [
    {
      value: "instaViews1",
      userHandle: "https://www.instagram.com/reel/id-videonya",
      noteUserHandle: "Masukkan link video/reels",
      text: `28055 - Instagram Views [ Best Price - /k ] Instant Super Fast`,
      info: `<p class="mt-4 f-poppins fs-13">Jumlah Order Selesai Rata-Rata = 20189. ${speed3}`,
      hargaPerK: 100,
      hargaPerUnit: 0.1,
      minimalOrderInput: 100,
      maximalOrderInput: 2147483647,
      minimalTextInfo: "Min: 100, Maks: 2.147.483.647"
    },
    {
      value: "instaViews2",
      userHandle: "https://www.instagram.com/reel/id-videonya",
      noteUserHandle: "Masukkan link video/reels",
      text: `27698 - Instagram Video Views All Link${icons.lightning} ULTRA FAST ${icons.fire}${icons.fire}${icons.fire}${icons.fire}`,
      info: `<p class="mt-4 f-poppins fs-13">Jumlah Order Selesai Rata-Rata = 17220. ${speed3}`,
      hargaPerK: 300,
      hargaPerUnit: 0.3,
      minimalOrderInput: 100,
      maximalOrderInput: 100000000,
      minimalTextInfo: "Min: 100, Maks: 100.000.000"
    },
    {
      value: "instaViews3",
      userHandle: "https://www.instagram.com/reel/id-videonya",
      noteUserHandle: "Masukkan link video/reels",
      text: `4327 - Instagram Views | Instagram Video + Tv + REELS View Max 10M ${icons.fire} - #Recommended`,
      info: `<p class="mt-4 f-poppins fs-13">Jumlah Order Selesai Rata-Rata = 5453. ${speed3}`,
      hargaPerK: 1000,
      hargaPerUnit: 10,
      minimalOrderInput: 100,
      maximalOrderInput: 10000000,
      minimalTextInfo: "Min: 100, Maks: 10.000.000"
    }
  ]







  };