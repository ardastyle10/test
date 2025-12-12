


    // === DATA POST ===
    const posts = [
  { statusL: "Public", gambar: "img.jpg", judulLiv: "Judul", author: "CV.AGS", dateLiv: "2025-11-20", typeCar: "Altezza", folder: "liv", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  
  { statusL: "Premium", gambar: "img.jpg", judulLiv: "LIVERY #9", author: "CV.AGS", dateLiv: "2025-11-20", typeCar: "Altezza", folder: "ags9", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Premium", gambar: "img.jpg", judulLiv: "LIVERY #8", author: "CV.AGS", dateLiv: "2025-11-20", typeCar: "Altezza", folder: "ags8", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Premium", gambar: "img.jpg", judulLiv: "LIVERY #7", author: "CV.AGS", dateLiv: "2025-11-20", typeCar: "Altezza", folder: "ags7", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Premium", gambar: "img.jpg", judulLiv: "LIVERY #6", author: "CV.AGS", dateLiv: "2025-11-20", typeCar: "Altezza", folder: "ags6", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Premium", gambar: "img.jpg", judulLiv: "LIVERY #5", author: "CV.AGS", dateLiv: "2025-11-20", typeCar: "Altezza", folder: "ags5", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Premium", gambar: "img.jpg", judulLiv: "LIVERY #4", author: "CV.AGS", dateLiv: "2025-11-20", typeCar: "Altezza", folder: "ags4", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Premium", gambar: "img.jpg", judulLiv: "LIVERY #3", author: "CV.AGS", dateLiv: "2025-11-20", typeCar: "Altezza", folder: "ags3", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Premium", gambar: "img.jpg", judulLiv: "LIVERY #2", author: "CV.AGS", dateLiv: "2025-11-20", typeCar: "Altezza", folder: "ags2", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Premium", gambar: "img.jpg", judulLiv: "LIVERY #1", author: "CV.AGS", dateLiv: "2025-11-20", typeCar: "Altezza", folder: "ags1", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  
  { statusL: "Public", gambar: "img.jpg", judulLiv: "HONDA CIVIC MODIFIED", author: "VENSS", dateLiv: "2025-11-02", typeCar: "Altezza", folder: "liv99", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL", author: "Available", dateLiv: "2025-11-21", typeCar: "Altezza", folder: "liv98", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "Tsujii Akira's 2014 Drift Muscle PS13", author: "frlmods.com", dateLiv: "2025-11-17", typeCar: "S13", folder: "liv97", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "Honda Civic Gen-10 FC/FK", author: "PSKN SENYAP", dateLiv: "2025-11-20", typeCar: "Altezza", folder: "liv96", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "Mitsubishi Lancer Evo 8", author: "FRL Mods", dateLiv: "2025-11-21", typeCar: "Altezza", folder: "liv95", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "BMW M5 F90 MODIFIED", author: "ABR", dateLiv: "2025-11-19", typeCar: "Altezza", folder: "liv94", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "Nissan Skyline GTR-R34 ADVAN", author: "Surya ARTX", dateLiv: "2025-11-20", typeCar: "R32-2D", folder: "liv93", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "ORIGIN Labo", author: "FRLmods", dateLiv: "2025-11-16", typeCar: "R32-4D", folder: "liv92", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "Nissan Skyline GTR-R34 NFS underground2", author: "SuryaARTX", dateLiv: "2025-11-18", typeCar: "R32-2D", folder: "liv91", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL", author: "ABR", dateLiv: "2025-11-21", typeCar: "S15", folder: "liv90", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "STICKER NAGA", author: "PSKN SENYAP", dateLiv: "2025-11-20", typeCar: "S15", folder: "liv89", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL STUPID", author: "ABR", dateLiv: "2025-11-17", typeCar: "AE86", folder: "liv88", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "MOTUL MAHLE", author: "MXNTIS.FRL", dateLiv: "2025-11-09", typeCar: "Altezza", folder: "liv87", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL", author: "AGS", dateLiv: "2025-11-18", typeCar: "Altezza", folder: "liv86", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "Dodge Charger srt r/t", author: "FRL.SHADOW", dateLiv: "2025-11-17", typeCar: "Altezza", folder: "liv85", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "Lamborghini hurachan", author: "RXNBG(yt)", dateLiv: "2025-11-16", typeCar: "S15", folder: "liv84", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "Nissan Skyline GTR-R34 Paul walker", author: "SuryaARTX", dateLiv: "2025-11-17", typeCar: "R32-2D", folder: "liv83", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL OROK SAKIT HATI", author: "AGS", dateLiv: "2025-11-17", typeCar: "S15", folder: "liv82", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL NAGA", author: "PSKN SENYAP", dateLiv: "2025-11-11", typeCar: "S13", folder: "liv81", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "BMW F30", author: "PDL GANK", dateLiv: "2025-11-13", typeCar: "Altezza", folder: "liv80", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "CIVIC MODIFIED", author: "CIVIC GANK", dateLiv: "2025-11-12", typeCar: "Altezza", folder: "liv79", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL CAPER HENTAI", author: "AGS X RAFF", dateLiv: "2025-11-10", typeCar: "S15", folder: "liv78", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "CIVIC TYPE R BLUE LIMITED", author: "AGS", dateLiv: "2025-11-12", typeCar: "Altezza", folder: "liv77", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  // LIV 76
  { statusL: "Public", gambar: "img.jpg", judulLiv: "BMW", author: "CIVIC GANK", dateLiv: "2025-11-12", typeCar: "Altezza", folder: "liv75", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "HONDA CIVIC MODIFIED", author: "PDL GANK", dateLiv: "2025-11-13", typeCar: "Altezza", folder: "liv74", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL SPECIAL 300 P", author: "AGS", dateLiv: "2025-11-10", typeCar: "Altezza", folder: "liv73", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "Exedy Racing", author: "Jeri", dateLiv: "2025-09-27", typeCar: "R32-2D", folder: "liv72", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "POLOSAN NAGA", author: "AGZ", dateLiv: "2023-05-10", typeCar: "R32-2D", folder: "liv71", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "BMW", author: "Banzy", dateLiv: "2025-11-08", typeCar: "Altezza", folder: "liv70", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "Mitsubishi Lancer Evo 8", author: "Admin AMR", dateLiv: "2025-11-09", typeCar: "Altezza", folder: "liv69", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL ONI", author: "CIVIC GANK", dateLiv: "2025-11-02", typeCar: "GT86", folder: "liv68", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "CIVIC EJ 6th GENERATION", author: "CIVIC GANK", dateLiv: "2025-11-02", typeCar: "Altezza", folder: "liv67", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "CIVIC EJ 6th GENERATION", author: "PSKN SENYAP", dateLiv: "2025-11-02", typeCar: "Altezza", folder: "liv66", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "Mitsubishi Lancer Evolution IX", author: "Available", dateLiv: "2025-10-21", typeCar: "Altezza", folder: "liv65", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "SPONSOR KAZAMA", author: "T Neko Store", dateLiv: "2025-10-24", typeCar: "FD3S", folder: "liv64", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "SPONSOR MONSTER", author: "PSKN SENYAP", dateLiv: "2025-11-07", typeCar: "S15", folder: "liv63", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL CHIMERA", author: "VENSS", dateLiv: "2025-11-07", typeCar: "Altezza", folder: "liv62", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "BUSTERCUP", author: "SYIFA23", dateLiv: "2025-11-07", typeCar: "S14 KOUKI", folder: "liv61", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "POLOSAN HOLOGRAM", author: "AMIN", dateLiv: "2025-11-05", typeCar: "S15", folder: "liv60", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "SPONSOR ", author: "PSKN SENYAP", dateLiv: "2025-11-06", typeCar: "S15", folder: "liv59", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "SPONSOR FALKEN", author: "PSKN SENYAP", dateLiv: "2025-11-06", typeCar: "S15", folder: "liv58", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "POLOSAN", author: "SYIFA23", dateLiv: "2025-11-03", typeCar: "S15", folder: "liv57", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL LION", author: "PSKN SENYAP", dateLiv: "2025-11-08", typeCar: "S13", folder: "liv56", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "POLOSAN", author: "ABR", dateLiv: "2025-11-04", typeCar: "FD3S", folder: "liv55", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "POLOSAN", author: "AGS", dateLiv: "2025-11-07", typeCar: "Altezza", folder: "liv54", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "POWER F", author: "AGS", dateLiv: "2025-11-06", typeCar: "Altezza", folder: "liv53", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "POLOSAN", author: "RACLE LIGHTNING", dateLiv: "2025-11-06", typeCar: "Altezza", folder: "liv52", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL", author: "PSKN SENYAP", dateLiv: "2025-11-03", typeCar: "Altezza", folder: "liv51", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL CAPER", author: "Venss", dateLiv: "2025-11-05", typeCar: "Altezza", folder: "liv50", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL", author: "AGS", dateLiv: "2025-11-06", typeCar: "E36", folder: "liv49", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "BMW F30 MODIFIED", author: "AGS", dateLiv: "2025-11-03", typeCar: "Altezza", folder: "liv48", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "HONDA CIVIC FC MODIFIED", author: "CIVIC GANK", dateLiv: "2025-11-02", typeCar: "Altezza", folder: "liv47", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL", author: "Sannn", dateLiv: "2025-11-02", typeCar: "S15", folder: "liv46", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "ANIME", author: "SYIFA23", dateLiv: "2025-11-02", typeCar: "S15", folder: "liv45", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "HONDA CIVIC GENIO 1995", author: "DXML FRL", dateLiv: "2025-09-27", typeCar: "Altezza", folder: "liv44", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL", author: "AGS", dateLiv: "2025-11-02", typeCar: "Altezza", folder: "liv43", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "Civic Type R (FK8)", author: "PSKN SENYAP", dateLiv: "2025-11-01", typeCar: "Altezza", folder: "liv42", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL", author: "PSKN SENYAP", dateLiv: "2025-11-02", typeCar: "Altezza", folder: "liv41", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL", author: "Rimex AGS", dateLiv: "2025-11-02", typeCar: "Altezza", folder: "liv40", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL", author: "AGS", dateLiv: "2025-11-02", typeCar: "S15", folder: "liv39", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  // LIV 38
  { statusL: "Public", gambar: "img.jpg", judulLiv: "POLOSAN", author: "CIVIC GANK", dateLiv: "2025-10-31", typeCar: "GT86", folder: "liv37", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL", author: "Venss", dateLiv: "2025-10-17", typeCar: "S13", folder: "liv36", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "BMW M5 G90", author: "pinndorifta", dateLiv: "2025-10-29", typeCar: "Altezza", folder: "liv35", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "CIVIC TYPE", author: "AMIN", dateLiv: "2025-10-31", typeCar: "Altezza", folder: "liv34", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "CIVIC", author: "Kelvin", dateLiv: "2025-10-31", typeCar: "Altezza", folder: "liv33", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL DRAKKA", author: "ARS X RAFF", dateLiv: "2025-11-20", typeCar: "BMW E36", folder: "liv32", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL", author: "PSKN SENYAP", dateLiv: "2025-10-30", typeCar: "Altezza", folder: "liv31", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL", author: "PSKN SENYAP", dateLiv: "2025-10-30", typeCar: "Altezza", folder: "liv30", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL", author: "PSKN SENYAP", dateLiv: "2025-10-30", typeCar: "Altezza", folder: "liv29", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL CAPER RED", author: "ARS X RAFF", dateLiv: "2025-11-17", typeCar: "BMW E30", folder: "liv28", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL", author: "AGZ", dateLiv: "2025-10-30", typeCar: "Altezza", folder: "liv27", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL CAPER PINK", author: "ARS X RAFF", dateLiv: "2025-11-17", typeCar: "BMW E30", folder: "liv26", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "Tribal Speed Sonic", author: "PSKN SENYAP", dateLiv: "2025-10-30", typeCar: "Altezza", folder: "liv25", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "TRIBAL", author: "Azwar", dateLiv: "2025-11-13", typeCar: "Altezza", folder: "liv24", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "CIVIC ", author: "HTML TEAM FRL", dateLiv: "2025-10-29", typeCar: "Altezza", folder: "liv23", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "SPECIAL LIMITED EDITION", author: "PSKN SENYAP", dateLiv: "2025-10-28", typeCar: "GT86", folder: "liv22", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "CIVIC FD MOST WANTED", author: "CIVIC GANK", dateLiv: "2025-11-22", typeCar: "Altezza", folder: "liv21", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "SUBARU SPA TURBO", author: "KEN", dateLiv: "2025-10-27", typeCar: "GT86", folder: "liv20", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "BMW CARBON", author: "Venss", dateLiv: "2025-10-19", typeCar: "Altezza", folder: "liv19", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "Tribal Stecu", author: "Venss", dateLiv: "2025-10-26", typeCar: "Altezza", folder: "liv18", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "Tribal PSKN SENYAP", author: "PSKN SENYAP", dateLiv: "2025-10-26", typeCar: "Altezza", folder: "liv17", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "S15 Fire Hologram", author: "Garage FR", dateLiv: "2025-10-22", typeCar: "S15", folder: "liv16", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "BMW Carbon", author: "Alchacofa", dateLiv: "2025-10-18", typeCar: "Altezza", folder: "liv15", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "SPECIAL 100 P", author: "PSKN SENYAP", dateLiv: "2025-10-22", typeCar: "Altezza", folder: "liv14", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "S15 Fire Hologram", author: "Garage FR", dateLiv: "2025-10-12", typeCar: "S15", folder: "liv13", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "Body kit ROCKET BUNNY", author: "Nv Livery &gt; Arda Ganz", dateLiv: "2025-10-11", typeCar: "S15", folder: "liv12", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "Honda Civic Type-R (FL5)", author: "@luckychong.frl", dateLiv: "2025-09-09", typeCar: "Altezza", folder: "liv11", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "Dodge Challenger SRT Demon", author: "@frl.shadow", dateLiv: "2025-09-09", typeCar: "R32 4DR", folder: "liv10", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "ITASHA SORASAKI HINA", author: "Rezz", dateLiv: "2025-10-08", typeCar: "FC3S", folder: "liv9", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "Bodykit Varis", author: "Saluran WA", dateLiv: "2025-10-12", typeCar: "GT86", folder: "liv8", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "GR86 TOYO TIRES MASATO KAWABATA", author: "NoName (YT)", dateLiv: "2025-10-12", typeCar: "GT86", folder: "liv7", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "D-MAX D1 GRAND PRIX MASASHI YOKOI 2014 VERSION", author: "D1FRL CHANNEL (YT)", dateLiv: "2025-10-12", typeCar: "S15", folder: "liv6", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "ELEN JOE ZENLESS ZONE ZERO", author: "Rezz", dateLiv: "2025-09-15", typeCar: "Altezza", folder: "liv05", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "BMW Custom", author: "Heyaan", dateLiv: "2025-09-26", typeCar: "Altezza", folder: "liv5", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "Tribal Stars", author: "Venss", dateLiv: "2025-10-12", typeCar: "Altezza", folder: "liv4", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "Tribal Stars", author: "Venss", dateLiv: "2025-10-10", typeCar: "Altezza", folder: "liv3", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "Mitsubishi Lancer Evo 9 NFS", author: "JDM Automotive Society", dateLiv: "2025-10-14", typeCar: "Altezza", folder: "liv2", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Public", gambar: "img.jpg", judulLiv: "BMW M5 F90", author: "Available", dateLiv: "2025-10-06", typeCar: "Altezza", folder: "liv1", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  
  { statusL: "Premium", gambar: "img.jpg", judulLiv: "TRIBAL LIMITED", author: "AGS", dateLiv: "2025-11-14", typeCar: "Altezza", folder: "prem07", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Premium", gambar: "img.jpg", judulLiv: "Nissan Silvia Libertywalk", author: "JDM Automotive Society", dateLiv: "2025-10-30", typeCar: "Altezza", folder: "prem06", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Premium", gambar: "img.jpg", judulLiv: "Tribal", author: "PSKN SENYAP", dateLiv: "2025-10-31", typeCar: "Altezza", folder: "prem05", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Premium", gambar: "img.jpg", judulLiv: "Tribal AGS JAYA", author: "AGZ", dateLiv: "2025-10-30", typeCar: "Altezza", folder: "prem04", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Premium", gambar: "img.jpg", judulLiv: "Nissan Silvia S15 LBWK (BlackFish) LIMITED EDITION", author: "Admin #2 JDM Automotive Society", dateLiv: "2025-10-30", typeCar: "S15", folder: "prem03", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Premium", gambar: "img.jpg", judulLiv: "SPECIAL 300 P", author: "PSKN SENYAP", dateLiv: "2025-10-30", typeCar: "Altezza", folder: "prem02", body: "body.json", window: "window.json", aspekRasio: "16/9" },
  { statusL: "Premium", gambar: "img.jpg", judulLiv: "SPECIAL 200 P", author: "PSKN SENYAP", dateLiv: "2025-10-26", typeCar: "Altezza", folder: "prem01", body: "body.json", window: "window.json", aspekRasio: "16/9" }
  
];

    const postContainer = document.getElementById("post-container");
    const tokenInput = document.getElementById("tokenInput");
    const submitToken = document.getElementById("submitToken");
    const tokenStatus = document.getElementById("tokenStatus");

    const validTokens = ["ANJINGPEPEK", "WKWK"];






	
    // === RENDER POST ===
    function renderPosts(showButtons = false) {
      postContainer.innerHTML = "";
      posts.forEach((post, i) => {
      	
    let statusIcon = {
    Sale: "warning",
    Public: "success",
    Premium: "info",
    Banned: "danger"
    }[post.statusL] || "secondary";

        postContainer.innerHTML += ` 
      <div class="col-xl-3 col-md-6">
        <div class="card position-relative">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-lg-4 image-container container-img-badge position-relative">
                <span class="badge badge-soft-${statusIcon} position-absolute badge-kiri">${post.statusL}</span>
                <i class="bi bi-heart heart-icon position-absolute heart-kanan text-${statusIcon}" data-target="like${post.folder}"></i>
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
              ${showButtons ? `<div class="gap-1 hstack">
                <button class="btn btn-black w-100" onclick="openJSON(${i}, 'body')">
                  <i class="fa fa-code me-1"></i>Body
                </button>
                <button class="btn btn-black w-100" onclick="openJSON(${i}, 'window')">
                  <i class="fa fa-code me-1"></i>Window
                </button>
              </div>`: `<p class="text-warning small mt-2">Masukkan token untuk membuka tombol</p>`}

            </div>
          </div>
        </div>
      </div>
        `;
      });
    }

    renderPosts(false); // awalnya tanpa tombol





    // === CEK TOKEN ===
	submitToken.addEventListener("click", () => {
	  const userToken = tokenInput.value.trim();
	  if (validTokens.includes(userToken)) {
	    tokenStatus.textContent = "Token benar! Tombol sudah terbuka.";
	    tokenStatus.classList.add("text-soft-success");
	    renderPosts(true);
	  } else {
	    tokenStatus.textContent = "Token Salah, Coba Lagi!";
	    tokenStatus.classList.add("text-danger");
	  }
	});

    
    

    // === FUNGSI OPEN JSON ===
function openJSON(index, type) {
  const post = posts[index]; // AMBIL DATA BERDASARKAN INDEX
  if (post.statusL !== "Public") {
    window.open("404.html", "_blank");
    return;
  }
  const file = type === "body" ? post.body : post.window;
  const url = `frl/${post.folder}/${file}`;
  window.open(url, "_blank");
}



    
    
    
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