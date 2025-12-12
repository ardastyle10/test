// SCRIPT BY ARDA GANZ
// DILARANG MENCOLONG ATAU MENGOTAK ATIK CODE
// JIKA KETAHUAN MAKA AKAN DIKENAKAN SANKSI YANG BERWAJIB


    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');

    imageModal.addEventListener('show.bs.modal', event => {
      const triggerImg = event.relatedTarget;
      const imgSrc = triggerImg.getAttribute('data-bs-img');
      modalImage.src = imgSrc;
      modalImage.alt = triggerImg.alt;
    });

    imageModal.addEventListener('shown.bs.modal', () => {
      document.body.classList.add('modal-open-blur');
    });

    imageModal.addEventListener('hidden.bs.modal', () => {
      document.body.classList.remove('modal-open-blur');
    });