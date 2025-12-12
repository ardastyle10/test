  // Data pengeluaran lebih rapi pakai objek
  const pengeluaran = {
    "2025-07-02": [{ keterangan: "Bliard", jumlah: 2100000 }],
    "2025-07-03": [{ keterangan: "Acara Ultah", jumlah: 115000 }],
    "2025-08-02": [{ keterangan: "Bliard", jumlah: 50000 }],
    "2025-08-03": [{ keterangan: "Acara Ultah", jumlah: 115000 }],
    "2025-08-10": [{ keterangan: "Makan", jumlah: 100000 },{ keterangan: "Have Fun", jumlah: 2050000 }],
    "2025-08-17": [{ keterangan: "Saldo Dana", jumlah: 6326210 }],
    "2025-08-18": [{ keterangan: "Depo", jumlah: 100000 },{ keterangan: "Depo", jumlah: 100000 },{ keterangan: "Depo", jumlah: 100000 },{ keterangan: "Rokok", jumlah: 45000 },{ keterangan: "Makan", jumlah: 20000 }],
    "2025-08-19": [{ keterangan: "Depo", jumlah: 100000 },{ keterangan: "Depo", jumlah: 30000 },{ keterangan: "Depo", jumlah: 30000 },{ keterangan: "Depo", jumlah: 50000 }],
    "2025-08-23": [{ keterangan: "Rokok", jumlah: 50000},{ keterangan: "Bliard", jumlah: 50000},{ keterangan: "Indomart", jumlah: 100000},{ keterangan: "Piutang", jumlah: 50000}],
    "2025-08-25": [{ keterangan: "Jajan", jumlah: 30000},{ keterangan: "Rokok", jumlah: 25000},{ keterangan: "Gajian", jumlah: 300000}],
    "2025-08-26": [{ keterangan: "Depo", jumlah: 100000}],
    "2025-09-21": [{ keterangan: "02-21 Benoa Bali", jumlah: 3000000}],
    "2025-09-22": [{ keterangan: "Saldo Dana", jumlah: 6009500}],
    "2025-09-23": [{ keterangan: "To Surabaya", jumlah: 100000}],
    "2025-09-25": [{ keterangan: "Pangkas", jumlah: 30000},{ keterangan: "Rokok", jumlah: 25000},{ keterangan: "Makan Bakso", jumlah: 25000},{ keterangan: "Bayar Hutang", jumlah: 200000}],
    "2025-10-09": [{ keterangan: "DEPOSIT", jumlah: 450000}],
    "2025-10-11": [{ keterangan: "Sendal", jumlah: 50000},{ keterangan: "Parfume", jumlah: 50000},{ keterangan: "Koper", jumlah: 200000},{ keterangan: "Rokok", jumlah: 40000},{ keterangan: "Jajan", jumlah: 15000},{ keterangan: "Baju + Celana", jumlah: 100000}],
    "2025-10-12": [{ keterangan: "Rokok", jumlah: 50000},{ keterangan: "Jajan", jumlah: 50000}],
    "2025-10-13": [{ keterangan: "Print, Jajan", jumlah: 50000},{ keterangan: "Grab", jumlah: 45000},{ keterangan: "Le Mineral", jumlah: 15000},{ keterangan: "Le Mineral", jumlah: 15000}],
    "2025-10-20": [{ keterangan: "TF MAMAK", jumlah: 250000}],
    "2025-10-23": [{ keterangan: "Makan", jumlah: 40000},{ keterangan: "Rokok", jumlah: 26000},{ keterangan: "Paket", jumlah: 55000}],
    "2025-10-24": [{ keterangan: "Jajan", jumlah: 20000},{ keterangan: "Rokok", jumlah: 23000}],
    "2025-10-30": [{ keterangan: "Jajan", jumlah: 20000}],
    "2025-10-31": [{ keterangan: "Rokok", jumlah: 30000},{ keterangan: "Makan", jumlah: 40000},{ keterangan: "Jajan", jumlah: 20000},{ keterangan: "Belanja", jumlah: 50000},{ keterangan: "Piutang", jumlah: 180000}],
    "2025-11-01": [{ keterangan: "Makan", jumlah: 45000},{ keterangan: "Rokok", jumlah: 45000}]
  };

  const monthNames = [
    "Januari","Februari","Maret","April","Mei","Juni",
    "Juli","Agustus","September","Oktober","November","Desember"
  ];
 
  let today = new Date();
  let currentMonth = today.getMonth();   // 0 = Januari, 1 = Februari, dst.
  let currentYear = today.getFullYear();


  const monthYear = document.getElementById("monthYear");
  const calendarBody = document.getElementById("calendar-body");
  const output = document.getElementById("output");
  const monthlyTotal = document.getElementById("monthlyTotal");
  const monthlyTotal2 = document.getElementById("monthlyTotal2");
  const monthlyIncrease = document.getElementById("monthlyIncrease"); // tambahkan di HTML
  const dailyTotal = document.getElementById("dailyTotal");

  // Format Rupiah
  function formatRupiah(num) {
  // Bulatkan ke 0 desimal
  let rounded = Math.round(num);
  return "Rp " + rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


  // Hitung total bulanan
  function calculateMonthlyTotal(month, year) {
    let total = 0;
    for (let dateKey in pengeluaran) {
      let d = new Date(dateKey);
      if (d.getMonth() === month && d.getFullYear() === year) {
        pengeluaran[dateKey].forEach(item => total += item.jumlah);
      }
    }
    return total;
  }
  
  
  // Hitung total bulanan 2 (Duplikat Id)
	function calculateMonthlyTotal2(month, year) {
	  let total2 = 0;
	  // pakai pengeluaran yang sama
	  for (let dateKey in pengeluaran) {
	    let d = new Date(dateKey);
	    if (d.getMonth() === month && d.getFullYear() === year) {
	      pengeluaran[dateKey].forEach(item => total2 += item.jumlah);
	    }
	  }
	  return total2;
	}
	
	
	// Hitung persentase kenaikan
	function calculateIncrease(currentMonth, currentYear) {
	  let thisMonthTotal = calculateMonthlyTotal(currentMonth, currentYear);
	  let prevMonth = currentMonth - 1;
	  let prevYear = currentYear;
	  if (prevMonth < 0) {
	    prevMonth = 7;
	    prevYear--;
	  }
	  let prevMonthTotal = calculateMonthlyTotal(prevMonth, prevYear);
	  if (prevMonthTotal === 0) return { percent: "0%", icon: "neutral", badge: "soft-warning" };
	  // Mengambil Icon
	  let increase = ((thisMonthTotal - prevMonthTotal) / prevMonthTotal) * 100;
	  let icon, badge;
	  // Ubah Warna Badge
	  if (increase > 0) {
	  if (increase > 100) increase = 100;
	  icon = "up"; 
	  badge = "soft-success";
	} else if (increase < 0) {
	  if (increase < -100) increase = -100;
	  increase = Math.abs(increase);
	  icon = "down"; 
	  badge = "soft-danger";
	} else {
	  icon = "neutral"; 
	  badge = "soft-warning";
	}
	  return { percent: `${increase.toFixed(2)}%`, icon, badge };
	}
	

	
	// Hitung rata-rata pengeluaran per hari hanya pada hari yang ada pengeluaran
	/* function calculateDailyAverage(month, year) {
	   let total = 0;
	   let daysWithData = 0;
	   for (let dateKey in pengeluaran) {
	    let d = new Date(dateKey);
	    if (d.getMonth() === month && d.getFullYear() === year) {
	       Tambahkan jumlah semua item pada tanggal itu
	      let dayTotal = pengeluaran[dateKey].reduce((sum, item) => sum + item.jumlah, 0);
	      total += dayTotal;
	      daysWithData++;
	    }
	  }
	  if (daysWithData === 0) return 0;  agar tidak dibagi 0
	  return total / daysWithData;
	}
	*/


// Hitung rata-rata pengeluaran per hari dalam satu bulan
function calculateDailyAverage(month, year) {
  let total = calculateMonthlyTotal(month, year);
  // Hitung jumlah hari dalam bulan dengan cara standar
  let daysInMonth = new Date(year, month + 1, 0).getDate(); // 0 = hari terakhir bulan sebelumnya
  let average = total / daysInMonth;
  return average;
}



  // Render kalender
  function showCalendar(month, year) {
    calendarBody.innerHTML = "";
    monthYear.textContent = `${monthNames[month]} ${year}`;

    let firstDay = new Date(year, month).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let date = 1;
    for (let i = 0; i < 6; i++) {
      let row = document.createElement("tr");
      for (let j = 0; j < 7; j++) {
        let cell = document.createElement("td");
        if (i === 0 && j < firstDay) {
          cell.innerHTML = "";
        } else if (date > daysInMonth) {
          break;
        } else {
          let fullDate = `${year}-${String(month+1).padStart(2,'0')}-${String(date).padStart(2,'0')}`;
          cell.textContent = date;
          if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
            cell.classList.add("today");
          }
          cell.addEventListener("click", () => {
            if (pengeluaran[fullDate]) {
              let listItems = pengeluaran[fullDate].map(item => `
                <li class="list-group-item d-flex justify-content-between align-items-center fw-medium">
                  ${item.keterangan}
                  <span class="badge badge-success">${formatRupiah(item.jumlah)}</span>
                </li>`).join("");
              let dayTotal = pengeluaran[fullDate].reduce((sum, item) => sum + item.jumlah, 0);
              output.innerHTML = `<div class="card nota-card">
                <div class="card-header text-center fw-bold h5">Nota ${fullDate}</div>
                <ul class="list-group list-group-flush">${listItems}</ul>
                <div class="card-footer fw-bold text-end">Total: ${formatRupiah(dayTotal)}</div>
              </div>`;
            } else {
              output.innerHTML = `<div class="alert alert-warning text-center p-2 m-0">
                <strong>${fullDate}</strong><br>Tidak ada data pengeluaran
              </div>`;
            }
          });
          date++;
        }
        row.appendChild(cell);
      }
      calendarBody.appendChild(row);
    }

    // Update total bulanan
    let bulanTotal = calculateMonthlyTotal(month, year);
    monthlyTotal.textContent = bulanTotal > 0 
      ? `Total Pengeluaran Bulan Ini: ${formatRupiah(bulanTotal)}`
      : `Belum ada data pengeluaran bulan ini`;
      
    // Update total bulanan2
    let bulanTotal2 = calculateMonthlyTotal2(month, year);
    monthlyTotal2.textContent = bulanTotal2 > 0 
      ? `${formatRupiah(bulanTotal2)}`
      : `Rp 0`;
      
    // Hitung kenaikan %
	monthlyIncrease.textContent = bulanTotal > 0 
	  ? `${calculateIncrease(month, year)}`
	  : "0%";
	
	// Update kenaikan %
	let increaseData = calculateIncrease(month, year);
	let iconHtml;
	if (increaseData.icon === "up") iconHtml = '<i class="bx bx-up-arrow-alt"></i>';
	else if (increaseData.icon === "down") iconHtml = '<i class="bx bx-down-arrow-alt"></i>';
	else iconHtml = '<i class="bx bx-minus"></i>';
	monthlyIncrease.innerHTML = `<span class="badge badge-${increaseData.badge}">${iconHtml} ${increaseData.percent}</span>`;
	
	// Hitung rata-rata per hari
	let dailyAvg = calculateDailyAverage(month, year);
	dailyTotal.textContent = dailyAvg > 0
	  ? `${formatRupiah(dailyAvg)}`
	  : "Rp 0";

  }

  // Navigasi bulan
  document.getElementById("prevMonth").addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    showCalendar(currentMonth, currentYear);
  });

  document.getElementById("nextMonth").addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    showCalendar(currentMonth, currentYear);
  });

  // Tampilkan awal
  showCalendar(currentMonth, currentYear);