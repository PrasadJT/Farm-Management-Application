// Simulating soil data
const soilData = [
    {date: '2023-01-01', moisture: 70, ph: 6.5},
    {date: '2023-01-15', moisture: 65, ph: 6.8},
    {date: '2023-02-01', moisture: 72, ph: 6.6},
    {date: '2023-02-15', moisture: 68, ph: 6.9},
    {date: '2023-03-01', moisture: 75, ph: 6.7}
];

// Function to display soil data
function displaySoilData() {
    const soilDataElement = document.getElementById('soil-data');
    soilData.forEach(data => {
        const row = document.createElement('div');
        row.innerHTML = `
            <p>Date: ${data.date}</p>
            <p>Moisture: ${data.moisture}%</p>
            <p>pH: ${data.ph}</p>
        `;
        soilDataElement.appendChild(row);
    });
}

// Initialize chart
function initChart() {
    const ctx = document.getElementById('soil-chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar'],
            datasets: [{
                label: 'Moisture Level',
                data: [70, 65, 72],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)'
            }, {
                label: 'pH Balance',
                data: [6.5, 6.8, 6.6],
                borderColor: 'rgb(54, 162, 235)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    displaySoilData();
    initChart();
});
