// Set up SVG
const svg = d3.select('.ring-chart')
  .append('svg')
  .attr('width', '100%')
  .attr('height', '100%')
  .attr('viewBox', '0 0 400 400')
  .append('g')
  .attr('transform', 'translate(200,200)');

// Create initial rings
const rings = svg.selectAll('.ring')
  .data([60, 40, 20]) // Initial ring values
  .enter()
  .append('circle')
  .attr('class', (d, i) => i === 0 ? 'ring bpm' : (i === 1 ? 'ring spo2' : 'ring'))
  .attr('r', (_, i) => 100 - (i * 20))
  .attr('stroke', (_, i) => i === 0 ? 'red' : (i === 2 ? 'orange' : 'lightblue'))
  .attr('stroke-dasharray', (_, i) => `${(60 / 100) * Math.PI * (100 - (i * 20)) * 2 * 100 / 100} ${Math.PI * 2 * 100}`);

// Function to update rings based on input data
function updateRings() {
  const newData = [
    parseInt(document.getElementById('ring1').value),
    parseInt(document.getElementById('ring2').value),
    parseInt(document.getElementById('ring3').value)
  ];

  rings.data(newData)
    .transition()
    .duration(1000)
    .attr('stroke-dasharray', (_, i) => `${(newData[i] / 100) * Math.PI * (100 - (i * 20)) * 2 * 100 / 100} ${Math.PI * 2 * 100}`)
    .attr('stroke', (_, i) => i === 0 ? 'red' : (i === 2 ? 'orange' : 'lightblue'));

  // Display input data
  document.getElementById('workoutHeartRate').innerText = newData[0];
  document.getElementById('workoutSpo2').innerText = newData[1];
  document.getElementById('workoutSpeed').innerText = newData[2];
}
