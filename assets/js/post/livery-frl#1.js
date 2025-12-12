


// === DATA POST ===
const posts = [
  { statusL: "Public", Like: "likeLiv", gambar: "img.jpg", judulLiv: "Judul", author: "Authoer", dateLiv: "2025-11-10", typeCar: "Altezza", folder: "liv", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  
  { statusL: "Public", Like: "likeLiv73", gambar: "img.jpg", judulLiv: "TRIBAL SPECIAL 300 P", author: "ARS", dateLiv: "2025-11-10", typeCar: "Altezza", folder: "liv73", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv72", gambar: "img.jpg", judulLiv: "Exedy Racing", author: "Jeri", dateLiv: "2025-09-27", typeCar: "R32-2D", folder: "liv72", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv71", gambar: "img.jpg", judulLiv: "POLOSAN NAGA", author: "AGZ", dateLiv: "2023-05-10", typeCar: "R32-2D", folder: "liv71", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv70", gambar: "img.jpg", judulLiv: "BMW", author: "Banzy", dateLiv: "2025-11-08", typeCar: "Altezza", folder: "liv70", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv69", gambar: "img.jpg", judulLiv: "Mitsubishi Lancer Evo 8", author: "Admin AMR", dateLiv: "2025-11-09", typeCar: "Altezza", folder: "liv69", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv68", gambar: "img.jpg", judulLiv: "TRIBAL ONI", author: "CIVIC GANK", dateLiv: "2025-11-02", typeCar: "GT86", folder: "liv68", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv67", gambar: "img.jpg", judulLiv: "CIVIC EJ 6th GENERATION", author: "CIVIC GANK", dateLiv: "2025-11-02", typeCar: "Altezza", folder: "liv67", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv66", gambar: "img.jpg", judulLiv: "CIVIC EJ 6th GENERATION", author: "PSKN SENYAP", dateLiv: "2025-11-02", typeCar: "Altezza", folder: "liv66", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv65", gambar: "img.jpg", judulLiv: "Mitsubishi Lancer Evolution IX", author: "Available", dateLiv: "2025-10-21", typeCar: "Altezza", folder: "liv65", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv64", gambar: "img.jpg", judulLiv: "SPONSOR KAZAMA", author: "T Neko Store", dateLiv: "2025-10-24", typeCar: "FD3S", folder: "liv64", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv63", gambar: "img.jpg", judulLiv: "SPONSOR MONSTER", author: "PSKN SENYAP", dateLiv: "2025-11-07", typeCar: "S15", folder: "liv63", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv62", gambar: "img.jpg", judulLiv: "TRIBAL CHIMERA", author: "VENSS", dateLiv: "2025-11-07", typeCar: "Altezza", folder: "liv62", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv61", gambar: "img.jpg", judulLiv: "BUSTERCUP", author: "SYIFA23", dateLiv: "2025-11-07", typeCar: "S14 KOUKI", folder: "liv61", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv60", gambar: "img.jpg", judulLiv: "POLOSAN HOLOGRAM", author: "AMIN", dateLiv: "2025-11-05", typeCar: "S15", folder: "liv60", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv59", gambar: "img.jpg", judulLiv: "SPONSOR ", author: "PSKN SENYAP", dateLiv: "2025-11-06", typeCar: "S15", folder: "liv59", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv58", gambar: "img.jpg", judulLiv: "SPONSOR FALKEN", author: "PSKN SENYAP", dateLiv: "2025-11-06", typeCar: "S15", folder: "liv58", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv57", gambar: "img.jpg", judulLiv: "POLOSAN", author: "SYIFA23", dateLiv: "2025-11-03", typeCar: "S15", folder: "liv57", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv56", gambar: "img.jpg", judulLiv: "TRIBAL LION", author: "PSKN SENYAP", dateLiv: "2025-11-08", typeCar: "S13", folder: "liv56", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv55", gambar: "img.jpg", judulLiv: "POLOSAN", author: "ABR", dateLiv: "2025-11-04", typeCar: "FD3S", folder: "liv55", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv54", gambar: "img.jpg", judulLiv: "POLOSAN", author: "ARS", dateLiv: "2025-11-07", typeCar: "Altezza", folder: "liv54", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv53", gambar: "img.jpg", judulLiv: "POWER F", author: "ARS", dateLiv: "2025-11-06", typeCar: "Altezza", folder: "liv53", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv52", gambar: "img.jpg", judulLiv: "POLOSAN", author: "RACLE LIGHTNING", dateLiv: "2025-11-06", typeCar: "Altezza", folder: "liv52", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv51", gambar: "img.jpg", judulLiv: "TRIBAL", author: "PSKN SENYAP", dateLiv: "2025-11-03", typeCar: "Altezza", folder: "liv51", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv50", gambar: "img.jpg", judulLiv: "TRIBAL CAPER", author: "Venss", dateLiv: "2025-11-05", typeCar: "Altezza", folder: "liv50", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv49", gambar: "img.jpg", judulLiv: "TRIBAL", author: "ARS", dateLiv: "2025-11-06", typeCar: "E36", folder: "liv49", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv48", gambar: "img.jpg", judulLiv: "BMW F30 MODIFIED", author: "ARS", dateLiv: "2025-11-03", typeCar: "Altezza", folder: "liv48", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv47", gambar: "img.jpg", judulLiv: "HONDA CIVIC FC MODIFIED", author: "CIVIC GANK", dateLiv: "2025-11-02", typeCar: "Altezza", folder: "liv47", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv46", gambar: "img.jpg", judulLiv: "TRIBAL", author: "Sannn", dateLiv: "2025-11-02", typeCar: "S15", folder: "liv46", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv45", gambar: "img.jpg", judulLiv: "ANIME", author: "SYIFA23", dateLiv: "2025-11-02", typeCar: "S15", folder: "liv45", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv44", gambar: "img.jpg", judulLiv: "HONDA CIVIC GENIO 1995", author: "DXML FRL", dateLiv: "2025-09-27", typeCar: "Altezza", folder: "liv44", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv43", gambar: "img.jpg", judulLiv: "TRIBAL", author: "ARS", dateLiv: "2025-11-02", typeCar: "Altezza", folder: "liv43", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv42", gambar: "img.jpg", judulLiv: "Civic Type R (FK8)", author: "PSKN SENYAP", dateLiv: "2025-11-01", typeCar: "Altezza", folder: "liv42", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv41", gambar: "img.jpg", judulLiv: "TRIBAL", author: "PSKN SENYAP", dateLiv: "2025-11-02", typeCar: "Altezza", folder: "liv41", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv40", gambar: "img.jpg", judulLiv: "TRIBAL", author: "Rimex ARS", dateLiv: "2025-11-02", typeCar: "Altezza", folder: "liv40", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv39", gambar: "img.jpg", judulLiv: "TRIBAL", author: "ARS", dateLiv: "2025-11-02", typeCar: "S15", folder: "liv39", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv38", gambar: "img.jpg", judulLiv: "Nissan Silvia Libertywalk", author: "JDM Automotive Society", dateLiv: "2025-10-30", typeCar: "Altezza", folder: "liv38", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv37", gambar: "img.jpg", judulLiv: "POLOSAN", author: "CIVIC GANK", dateLiv: "2025-10-31", typeCar: "GT86", folder: "liv37", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv36", gambar: "img.jpg", judulLiv: "TRIBAL", author: "Venss", dateLiv: "2025-10-17", typeCar: "S13", folder: "liv36", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv35", gambar: "img.jpg", judulLiv: "BMW M5 G90", author: "pinndorifta", dateLiv: "2025-10-29", typeCar: "Altezza", folder: "liv35", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv34", gambar: "img.jpg", judulLiv: "CIVIC TYPE", author: "AMIN", dateLiv: "2025-10-31", typeCar: "Altezza", folder: "liv34", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv33", gambar: "img.jpg", judulLiv: "CIVIC", author: "Kelvin", dateLiv: "2025-10-31", typeCar: "Altezza", folder: "liv33", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv32", gambar: "img.jpg", judulLiv: "Tribal", author: "PSKN SENYAP", dateLiv: "2025-10-31", typeCar: "Altezza", folder: "liv32", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv31", gambar: "img.jpg", judulLiv: "Tribal", author: "PSKN SENYAP", dateLiv: "2025-10-30", typeCar: "Altezza", folder: "liv31", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv30", gambar: "img.jpg", judulLiv: "Tribal", author: "PSKN SENYAP", dateLiv: "2025-10-30", typeCar: "Altezza", folder: "liv30", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv29", gambar: "img.jpg", judulLiv: "Tribal", author: "PSKN SENYAP", dateLiv: "2025-10-30", typeCar: "Altezza", folder: "liv29", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv28", gambar: "img.jpg", judulLiv: "Tribal AGS JAYA", author: "AGZ", dateLiv: "2025-10-30", typeCar: "Altezza", folder: "liv28", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv27", gambar: "img.jpg", judulLiv: "Tribal", author: "AGZ", dateLiv: "2025-10-30", typeCar: "Altezza", folder: "liv27", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv26", gambar: "img.jpg", judulLiv: "Nissan Silvia S15 LBWK (BlackFish) LIMITED EDITION", author: "Admin #2 JDM Automotive Society", dateLiv: "2025-10-30", typeCar: "S15", folder: "liv26", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv25", gambar: "img.jpg", judulLiv: "Tribal Speed Sonic", author: "PSKN SENYAP", dateLiv: "2025-10-30", typeCar: "Altezza", folder: "liv25", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv24", gambar: "img.jpg", judulLiv: "SPECIAL 300 P LIMITED", author: "PSKN SENYAP", dateLiv: "2025-10-30", typeCar: "Altezza", folder: "liv24", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv23", gambar: "img.jpg", judulLiv: "CIVIC ", author: "HTML TEAM FRL", dateLiv: "2025-10-29", typeCar: "Altezza", folder: "liv23", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv22", gambar: "img.jpg", judulLiv: "SPECIAL LIMITED EDITION", author: "PSKN SENYAP", dateLiv: "2025-10-28", typeCar: "GT86", folder: "liv22", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv21", gambar: "img.jpg", judulLiv: "SPECIAL 200 P", author: "PSKN SENYAP", dateLiv: "2025-10-26", typeCar: "Altezza", folder: "liv21", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv20", gambar: "img.jpg", judulLiv: "SUBARU SPA TURBO", author: "KEN", dateLiv: "2025-10-27", typeCar: "GT86", folder: "liv20", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv19", gambar: "img.jpg", judulLiv: "BMW CARBON", author: "Venss", dateLiv: "2025-10-19", typeCar: "Altezza", folder: "liv19", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv18", gambar: "img.jpg", judulLiv: "Tribal Stecu", author: "Venss", dateLiv: "2025-10-26", typeCar: "Altezza", folder: "liv18", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv17", gambar: "img.jpg", judulLiv: "Tribal PSKN SENYAP", author: "PSKN SENYAP", dateLiv: "2025-10-26", typeCar: "Altezza", folder: "liv17", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv16", gambar: "img.jpg", judulLiv: "S15 Fire Hologram", author: "Garage FR", dateLiv: "2025-10-22", typeCar: "S15", folder: "liv16", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv15", gambar: "img.jpg", judulLiv: "BMW Carbon", author: "Alchacofa", dateLiv: "2025-10-18", typeCar: "Altezza", folder: "liv15", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv14", gambar: "img.jpg", judulLiv: "SPECIAL 100 P", author: "PSKN SENYAP", dateLiv: "2025-10-22", typeCar: "Altezza", folder: "liv14", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv13", gambar: "img.jpg", judulLiv: "S15 Fire Hologram", author: "Garage FR", dateLiv: "2025-10-12", typeCar: "S15", folder: "liv13", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv12", gambar: "img.jpg", judulLiv: "Body kit ROCKET BUNNY", author: "Nv Livery &gt; Arda Ganz", dateLiv: "2025-10-11", typeCar: "S15", folder: "liv12", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv11", gambar: "img.jpg", judulLiv: "Honda Civic Type-R (FL5)", author: "@luckychong.frl", dateLiv: "2025-09-09", typeCar: "Altezza", folder: "liv11", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv10", gambar: "img.jpg", judulLiv: "Dodge Challenger SRT Demon", author: "@frl.shadow", dateLiv: "2025-09-09", typeCar: "R32 4DR", folder: "liv10", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv9", gambar: "img.jpg", judulLiv: "ITASHA SORASAKI HINA", author: "Rezz", dateLiv: "2025-10-08", typeCar: "FC3S", folder: "liv9", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv8", gambar: "img.jpg", judulLiv: "Bodykit Varis", author: "Saluran WA", dateLiv: "2025-10-12", typeCar: "GT86", folder: "liv8", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv7", gambar: "img.jpg", judulLiv: "GR86 TOYO TIRES MASATO KAWABATA", author: "NoName (YT)", dateLiv: "2025-10-12", typeCar: "GT86", folder: "liv7", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv6", gambar: "img.jpg", judulLiv: "D-MAX D1 GRAND PRIX MASASHI YOKOI 2014 VERSION", author: "D1FRL CHANNEL (YT)", dateLiv: "2025-10-12", typeCar: "S15", folder: "liv6", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv05", gambar: "img.jpg", judulLiv: "ELEN JOE ZENLESS ZONE ZERO", author: "Rezz", dateLiv: "2025-09-15", typeCar: "Altezza", folder: "liv05", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv5", gambar: "img.jpg", judulLiv: "BMW Custom", author: "Heyaan", dateLiv: "2025-09-26", typeCar: "Altezza", folder: "liv5", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv4", gambar: "img.jpg", judulLiv: "Tribal Stars", author: "Venss", dateLiv: "2025-10-12", typeCar: "Altezza", folder: "liv4", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv3", gambar: "img.jpg", judulLiv: "Tribal Stars", author: "Venss", dateLiv: "2025-10-10", typeCar: "Altezza", folder: "liv3", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv2", gambar: "img.jpg", judulLiv: "Mitsubishi Lancer Evo 9 NFS", author: "JDM Automotive Society", dateLiv: "2025-10-14", typeCar: "Altezza", folder: "liv2", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", Like: "likeLiv1", gambar: "img.jpg", judulLiv: "BMW M5 F90", author: "Saluran WA", dateLiv: "2025-10-06", typeCar: "Altezza", folder: "liv1", body: "body.json", window: "window.json", aspekRasio: "16/9" }
];

const postContainer = document.getElementById("post-container");

// === BUAT KARTU POST ===
posts.forEach(post => {
  const fileList = [
    { key: "BODY", file: post.body },
    { key: "WINDOW", file: post.window }
  ];

  const fetchPromises = fileList.map(item => {
    return fetch(`../../../../../wkwk/${post.folder}/${item.file}`)
      .then(res => res.text())
      .then(text => {
        const cleanText = text.replace(/\r/g, '');
        return { key: item.key, isi: cleanText };
      })
      .catch(() => ({ key: item.key, isi: `Gagal load ${item.file}` }));
  });

  Promise.all(fetchPromises).then(prompts => {
    let bodyContent = "";
    let windowContent = "";

    prompts.forEach(p => {
      const codeId = `prompt-${post.Like}-${p.key}`;
      const block = `
        <div class="bg-black border border-gray-700 rounded-lg overflow-hidden relative w-full mt-2">
          <div class="flex items-center px-3 py-2 bg-zinc-800 border-b border-gray-700">
            <span class="w-3 h-3 bg-gray-400 rounded-full mr-2"></span>
            <span class="w-3 h-3 bg-lime-400 rounded-full mr-2"></span>
            <span class="font-mono text-sm text-white">${p.key}</span>
            <button class="copy-button ms-auto" data-target="${codeId}" title="Copy">
              <i class="fas fa-copy"></i>
            </button>
          </div>
          <pre class="bg-[#1e1e2f] text-white p-2 m-0"><code id="${codeId}" class="language-none">${p.isi}</code></pre>
        </div>
      `;

      if (p.key === "BODY") bodyContent = block;
      if (p.key === "WINDOW") windowContent = block;
    });

    postContainer.innerHTML += `
      <div class="col-xl-3 col-md-6">
        <div class="card position-relative">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-lg-4 image-container container-img-badge position-relative">
                <span class="badge badge-soft-success position-absolute badge-kiri">${post.statusL}</span>
                <i class="bi bi-heart heart-icon position-absolute heart-kanan text-success" data-target="${post.Like}"></i>
                <img src="frl/${post.folder}/${post.gambar}" alt="${post.judulLiv}" class="img-fluid mx-auto d-block" style="aspect-ratio: ${post.aspekRasio}; object-fit: cover;">
                <div class="position-absolute bottom-0 start-50 translate-middle-x text-white opacity-25 p-1 fs-10">&copy; <span class="copyright2"></span></div>
                <div class="opacity-75">
                  <div class="profile-badge ms-3">
                    <img src="assets/img/kaiadmin/icon.png" alt="Profile Admin">
                    <span class="copyright2"></span>
                    <i class='bx bxs-badge-check text-info verified'></i>
                  </div>
                </div>
              </div> 
            </div>
            <h5 class="card-title mb-3">${post.judulLiv}</h5>
            <div class="d-flex align-items-center mb-1 text-muted small fw-semibold">
              <i class="bi bi-person-circle me-2"></i>
              <span>Author: ${post.author}</span>
            </div>
            <div class="d-flex align-items-center mb-1 text-muted small fw-semibold">
              <i class="bi bi-calendar3 me-2"></i>
              <span>Date: ${post.dateLiv}</span>
            </div>
            <div class="d-flex align-items-center text-muted small fw-semibold">
              <i class="bi bi-car-front-fill me-2"></i>
              <span>Type Car: ${post.typeCar}</span>
            </div>
            <div class="mt-3 bg-light-subtle rounded-bottom text-center">
              <div class="gap-1 hstack">
                <button class="btn btn-black w-100 toggle-btn" data-target="#collapse-${post.Like}-body">
                  <i class="fa fa-code me-1"></i>Body
                </button>
                <button class="btn btn-black w-100 toggle-btn" data-target="#collapse-${post.Like}-window">
                  <i class="fa fa-code me-1"></i>Window
                </button>
              </div>
              <div class="px-2 w-full my-content mt-2 collapse-content" id="collapse-${post.Like}-body">
                ${bodyContent}
              </div>
              <div class="px-2 w-full my-content mt-2 collapse-content" id="collapse-${post.Like}-window">
                ${windowContent}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });
});

// === COLLAPSE BODY / WINDOW ===
document.addEventListener("click", (e) => {
  if (e.target.closest(".toggle-btn")) {
    const btn = e.target.closest(".toggle-btn");
    const targetSelector = btn.getAttribute("data-target");
    const target = document.querySelector(targetSelector);

    document.querySelectorAll(".collapse-content").forEach(el => {
      if (el !== target) el.classList.remove("active");
    });

    target.classList.toggle("active");
  }
});

// === COPY TO CLIPBOARD ===
document.addEventListener("click", (e) => {
  if (e.target.closest('.copy-button')) {
    const btn = e.target.closest('.copy-button');
    const targetId = btn.getAttribute('data-target');
    const codeEl = document.getElementById(targetId);
    if (codeEl) {
      navigator.clipboard.writeText(codeEl.innerText.trim()).then(() => {
        btn.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
          btn.innerHTML = '<i class="fas fa-copy"></i>';
        }, 1200);
      });
    }
  }
});

// === EVENT LISTENER LIKE ===
document.addEventListener("click", (e) => {
  const heart = e.target.closest(".heart-icon");
  if (heart) {
    const id = heart.getAttribute("data-target");
    console.log("%c\u2764%c Like diklik pada: " + id, "color: #80ff00; font-weight: bold;", "color: black; font-weight: bold;");

    const isLiked = heart.classList.contains("bi-heart-fill");

    if (isLiked) {
      heart.classList.replace("bi-heart-fill", "bi-heart");
      localStorage.setItem(`like-${id}`, "false");
    } else {
      heart.classList.replace("bi-heart", "bi-heart-fill");
      localStorage.setItem(`like-${id}`, "true");
    }
  }
});

// === RESTORE STATUS LIKE ===
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".heart-icon").forEach(heart => {
    const id = heart.getAttribute("data-target");
    const liked = localStorage.getItem(`like-${id}`) === "true";
    if (liked) {
      heart.classList.replace("bi-heart", "bi-heart-fill");
    }
  });
});