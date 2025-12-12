
  const data2 = {
    "creator": "Nama Kamu",
    "creator_data": {
      "result": [
        { "tanggal": "11-07-2025", "time": "19:00", "nominal": 50000, "status": "success" },
        { "tanggal": "13-07-2025", "time": "19.00", "nominal": 50000, "status": "success" },
        { "tanggal": "14-07-2025", "time": "19:00", "nominal": 50000, "status": "success" },
        { "tanggal": "16-07-2025", "time": "16:00", "nominal": 50000, "status": "success" },
        { "tanggal": "17-07-2025", "time": "16:17", "nominal": 50000, "status": "success" },
        { "tanggal": "21-07-2025", "time": "13:48", "nominal": 50000, "status": "success" },
        { "tanggal": "27-07-2025", "time": "19:40", "nominal": 50000, "status": "success" },
        { "tanggal": "03-08-2025", "time": "15:02", "nominal": 50000, "status": "success" },
        { "tanggal": "04-08-2025", "time": "15:11", "nominal": 50000, "status": "success" },
        { "tanggal": "05-08-2025", "time": "17:05", "nominal": 80000, "status": "success" },
        { "tanggal": "06-08-2025", "time": "15:07", "nominal": 70000, "status": "success" },
        { "tanggal": "07-08-2025", "time": "15:03", "nominal": 50000, "status": "success" },
        { "tanggal": "08-08-2025", "time": "15:06", "nominal": 50000, "status": "success" },
        { "tanggal": "12-08-2025", "time": "19:32", "nominal": 50000, "status": "success" }
      ]
    }
  };

  let results = data2.creator_data.result;
  let currentSort = {
    key: null,
    direction: 'asc'
  };

  const tbody = document.getElementById("data-pendapatan");
  const totalEl = document.getElementById("total-pendapatan");

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  function renderTable() {
    tbody.innerHTML = "";
    let total = 0;
    results.forEach((item, index) => {
      total += item.nominal;

      // Tentukan warna dan teks badge
      let badgeClass = '';
      let badgeText = '';

      if (item.status === 'success') {
        badgeClass = 'badge-soft-success';
        badgeText = 'Success';
      } else if (item.status === 'pending') {
        badgeClass = 'badge-soft-warning';
        badgeText = 'Pending';
      } else {
        badgeClass = 'badge-secondary';
        badgeText = item.status || '-';
      }

      const row = `
        <tr>
          <td>${index + 1}</td>
          <td>${item.tanggal}</td>
          <td>${item.time}</td>
          <td>${formatter.format(item.nominal)}</td>
          <td><span class="badge ${badgeClass}">${badgeText}</span></td>
          <td>
            <div class="d-flex gap-2">
                 <a href="#!" class="btn btn-light btn-sm"><iconify-icon icon="solar:eye-broken" class="align-middle fs-18"></iconify-icon></a>
                 <a href="#!" class="btn btn-soft-primary btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><iconify-icon icon="solar:pen-2-broken" class="align-middle fs-18"></iconify-icon></a>
                 <a href="#!" class="btn btn-soft-danger btn-sm"><iconify-icon icon="solar:trash-bin-minimalistic-2-broken" class="align-middle fs-18"></iconify-icon></a>
            </div>
          </td>
        </tr>
      `;
      tbody.innerHTML += row;
    });
    totalEl.textContent = formatter.format(total);
  }

  function sortTable(key) {
    const isSameKey = currentSort.key === key;
    currentSort.direction = isSameKey && currentSort.direction === 'asc' ? 'desc' : 'asc';
    currentSort.key = key;

    results.sort((a, b) => {
      let valA = a[key];
      let valB = b[key];

	if (key === 'tanggal') {
	  const parseDate = (str) => {
	    const [day, month, year] = str.split("-");
	    return new Date(`${year}-${month}-${day}`);
	  };
	  valA = parseDate(valA);
	  valB = parseDate(valB);
	}


      if (key === 'nominal') {
        valA = parseInt(valA);
        valB = parseInt(valB);
      }

      if (valA < valB) return currentSort.direction === 'asc' ? -1 : 1;
      if (valA > valB) return currentSort.direction === 'asc' ? 1 : -1;
      return 0;
    });

    updateSortIcons();
    renderTable();
  }

  function updateSortIcons() {
    const keys = ['tanggal', 'time', 'nominal'];
    keys.forEach(k => {
      const icon = document.getElementById(`icon-${k}`);
      if (icon) {
        if (currentSort.key === k) {
          icon.className = currentSort.direction === 'asc'
            ? 'bi bi-arrow-up sort-icon'
            : 'bi bi-arrow-down sort-icon';
        } else {
          icon.className = 'bi bi-arrow-down-up sort-icon';
        }
      }
    });
  }

  renderTable();