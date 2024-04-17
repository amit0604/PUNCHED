// Function to generate random ECG data
function generateRandomECGData(length) {
    const ecgData = [];
    for (let i = 0; i < length - 80; i++) {
      ecgData.push(Math.floor(Math.random() * 70) + 20); // Random value between 20 and 89
    }
    return ecgData;
  }
  
  const ecgDataLength = 200;
  const ecgData = generateRandomECGData(ecgDataLength);
  
  const ctx = document.getElementById('ecgChart').getContext('2d');
  const ecgChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array.from({ length: ecgData.length }, (_, i) => i.toString()),
      datasets: [{
        label: 'ECG',
        data: ecgData,
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.1, // Adjust the tension to make the curves less pronounced
        fill: false,
        borderCapStyle: 'butt' // Make the curves into corners
      }]
    },
    options: {
      scales: {
        x: {
          display: false
        },
        y: {
          suggestedMin: 0,
          suggestedMax: 120
        }
      }
    }
  });
  