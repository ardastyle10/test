document.addEventListener('DOMContentLoaded', () => {
  const modalHTML = `
  <div id="modalBackdrop" class="modal-blur-backdrop d-none" onclick="closeModal()"></div>
  <div id="modalBox" class="custom-modal p-4 d-none">
    <div class="modal-header-custom">
      <h5>Bagikan ke aplikasi lainnya</h5>
      <button onclick="closeModal()">&times;</button>
    </div>
    <div class="row row-cols-4 g-3 text-center">
      ${generateShareButtons()}
    </div>
    <div class="mt-4 text-start">
      <label class="form-label">or copy link</label>
      <div class="input-group">
        <input type="text" id="linkInput" class="form-control" readonly>
        <button class="btn btn-black btn-border btn-lg" onclick="salin()">Salin</button>
      </div>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('beforeend', modalHTML);
});

function generateShareButtons() {
  const url = encodeURIComponent(window.location.href);
  const shareOptions = [
    { icon: 'facebook', text: 'Facebook', link: `https://www.facebook.com/sharer/sharer.php?u=${url}` },
    { icon: 'whatsapp', text: 'WhatsApp', link: `https://api.whatsapp.com/send?text=${url}` },
    { icon: 'twitter-x', text: 'Twitter', link: `https://twitter.com/intent/tweet?url=${url}&text=Cek ini!` },
    { icon: 'telegram', text: 'Telegram', link: `https://t.me/share/url?url=${url}` },
    { icon: 'pinterest', text: 'Pinterest', link: `https://pinterest.com/pin/create/button/?url=${url}&media=https://ardaganz.github.io/assets/img/profile.jpg&description=Cek konten ini di websitenya!` },
    { icon: 'linkedin', text: 'LinkedIn', link: `https://www.linkedin.com/sharing/share-offsite/?url=${url}` },
    { icon: 'line', text: 'LINE', link: `https://social-plugins.line.me/lineit/share?url=${url}` },
    { icon: 'envelope-open-fill', text: 'Email', link: `mailto:?subject=Lihat ini!&body=Coba lihat halaman ini: ${url}` }
  ];
  
  return shareOptions.map(opt => `
    <div class="col">
      <button class="btn btn-light2 rounded-3 w-100 p-2 d-flex flex-column align-items-center text-nowrap" onclick="window.location.href='${opt.link}'">
        <i class="bi bi-${opt.icon} fs-3"></i>
        <span class="small fs-10">${opt.text}</span>
      </button>
    </div>`).join('');
}

function openModal() {
  document.getElementById('modalBackdrop').classList.remove('d-none');
  const modal = document.getElementById('modalBox');
  modal.classList.remove('d-none');
  setTimeout(() => modal.classList.add('show'), 10);
  document.getElementById('linkInput').value = window.location.href;
}

function closeModal() {
  const modal = document.getElementById('modalBox');
  modal.classList.remove('show');
  setTimeout(() => {
    modal.classList.add('d-none');
    document.getElementById('modalBackdrop').classList.add('d-none');
  }, 400);
}

function salin() {
  const input = document.getElementById('linkInput');
  input.select();
  input.setSelectionRange(0, 99999);
  document.execCommand('copy');
  alert('Link disalin!');
}
