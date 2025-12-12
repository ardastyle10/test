// maintenance.js
const maintenance = false; // ubah ke true/false untuk mengaktifkan/menonaktifkan maintenance

if (maintenance && window.location.pathname !== "https://yandex.com") {
  window.location.href = "https://yandex.com";
}




// Membuat elemen <style>
const style = document.createElement('style');
style.textContent = `
  /****** FOOTER COLOR BY AGZ ******/
/* Style dasar teks */
.footer-text-running { background: -webkit-gradient(linear, left top, right top, color-stop(10%, #ff6c2f), color-stop(50%, #f9b931), color-stop(60%, #22c55e)); background: linear-gradient(to right, #ff6c2f 10%, #f9b931 50%, #22c55e 60%); background-size: auto auto; background-clip: border-box; background-size: 200% auto; background-clip: text; text-fill-color: transparent; -webkit-background-clip: text; -webkit-text-fill-color: transparent; -webkit-animation: textclip 2.5s linear infinite; animation: textclip 2.5s linear infinite; display: inline-block; } 
/* Animasi efek warna berjalan */
@-webkit-keyframes textclip { to { background-position: 200% center; } } 
@keyframes textclip { to { background-position: 200% center; } }
`;

// Menyisipkan <style> ke dalam <head>
document.head.appendChild(style);