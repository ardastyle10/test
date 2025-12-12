
const dataPages = [
  {
      judulBesar: "LIVERY FR LEGENDS",
      judulUtama: "LIVERY FRL",
      linkUtama: "livery.html",
      imgUtama: "LIVERYFRL.jpg",
      dataVisitorUtama: "visitor-view-blogger-livfrlegends",
      dataIdHeartUtama: "Blogger-LivFrLegends",
      idTglUpdateUtama: "tglUpdateBlogLiveryFRLegends",
      author: "Arda Ganz"
  },
  {
      judulBesar: "STIKER FR LEGENDS",
      judulUtama: "STIKER FRL",
      linkUtama: "stiker.html",
      imgUtama: "STIKERFRL.jpg",
      dataVisitorUtama: "visitor-view-blogger-stikerfrlegends",
      dataIdHeartUtama: "Blogger-StikerFRLegends",
      idTglUpdateUtama: "tglUpdateBlogStikerFRLegends",
      author: "Arda Ganz"
  }
];

const containerIndex = document.getElementById("postContainer");
let html = "";

dataPages.forEach(section => {
  html += `
  <div class="col-xl-3 col-md-6">
    
						
						  <div class="card position-relative">
						    <!-- Gambar Utama -->
						    <img src="assets/img/thumbnail/${section.imgUtama}" class="img-fluid mx-auto d-block img-top-rounded" style="aspect-ratio: 16/9; object-fit: cover;" alt="Thumbnail">
						    <!-- Badge Visitor -->
						    <div class="position-absolute top-0 start-0 w-100 d-flex justify-content-between align-items-start p-2">
					    	<button type="button" class="btn btn-link p-0"><i class="bi bi-heart fs-5 text-success heartIcon" data-id-heart="${section.dataIdHeartUtama}"></i></button>
						    <span class="badge badge-soft-success position-absolute top-0 end-0 m-2">
						      <i class="bi bi-eye"></i> <span id="${section.dataVisitorUtama}"></span>
						    </span>
						    </div>
						    <!-- Profile Info -->
						    <div class="d-flex align-items-center gap-2 p-2">
						      <img src="assets/img/profile.jpg" alt="Profile" class="rounded-circle avatar avatar-sm">
						      <div>
						        <h6 class="card-title fs-15"><a href="${section.linkUtama}">${section.judulUtama}</a></h6>
						        <small id="${section.idTglUpdateUtama}"></small>
						      </div><!-- Button Heart end Share -->
		 				      <div class="position-absolute bottom-0 end-0 p-2">
                                 <button type="button" class="btn btn-icon btn-link btn-info op-8 fs-20 me-2 position-relative d-inline-block"><iconify-icon icon="akar-icons:link-out" class="text-info"></iconify-icon></button>
		 				      </div>
						    </div>
						  </div>
						</div>
  `;
});

containerIndex.innerHTML = html;

