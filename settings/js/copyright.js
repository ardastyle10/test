document.addEventListener('DOMContentLoaded', function () {
    const copyright = document.getElementById('copyright');
    if (copyright) {
        copyright.innerText = 'Arda Style';
    }
});



document.addEventListener('DOMContentLoaded', function() {
  const namaOwner = "Arda Style";
  document.querySelectorAll('.copyright2').forEach(function(el){
    el.textContent = namaOwner;
  });
});
