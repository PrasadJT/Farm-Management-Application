const ctx1 = document.getElementById('chart-1').getContext('2d');
const myChart = new Chart(ctx1, {
    type: 'polarArea',
    data: {
        labels: ['Corn', 'Wheat', 'Soybeans'],
        datasets: [{
            label: 'Crop Yield (tons)',
            data: [600, 800, 1000],
            backgroundColor: [
                'rgba(76, 175, 80, 1)',
                'rgba(255, 193, 7, 1)',
                'rgba(139, 69, 19, 1)',
            ],
        }],
    },
    options: {
      responsive: true, 
    }
});

const ctx2 = document.getElementById('chart-2').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Tractor', 'Harvester', 'Plow'],
        datasets: [{
            label: 'Machine Usage (hours)',
            data: [300, 400, 150],
            backgroundColor: [
                'rgba(76, 175, 80, 1)',
                'rgba(255, 193, 7, 1)',
                'rgba(139, 69, 19, 1)',
            ],
        }],
    },
    options: {
        responsive: true, 
    },
});