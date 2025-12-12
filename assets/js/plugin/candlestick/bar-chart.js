var barChart = document.getElementById('barChart').getContext('2d');

var myBarChart = new Chart(barChart, {
type: 'bar',
data: {
labels: ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
datasets : [{
	label: "Income",
	backgroundColor: '#32CD32',
	borderColor: '#228B22',
	data: [4, 5.5, 5, 3.5, 4, 7, 6.5, 5, 9.5, 9.5, 0, 0],
}],
},
options: {
responsive: true,
maintainAspectRatio: false,
scales: {
	yAxes: [{
		ticks: {
			beginAtZero:true
		}
	}]
},
}
});