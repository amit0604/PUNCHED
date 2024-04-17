// Reference to your Firebase database
const database = firebase.database();

// Function to listen for changes in heart rate (BPM)
function listenForHeartRate() {
  const heartRateRef = database.ref('bpm');
  heartRateRef.on('value', (snapshot) => {
    const heartRateData = snapshot.val();
    // Update the UI with the new heart rate value
    document.getElementById('heart-rate-data').innerText = heartRateData;
    document.getElementById('heart-rate-data2').innerText = heartRateData;
    document.getElementById('heart-rate-data-report').innerText = heartRateData;
  });
}

// Function to listen for changes in temperature in Celsius
function listenForTemperatureCelsius() {
  const temperatureCRef = database.ref('temp');
  temperatureCRef.on('value', (snapshot) => {
    const temperatureCData = snapshot.val();
    // Update the UI with the new temperature value in Celsius
    document.getElementById('temperature-data').innerText = temperatureCData;
  });
}

// Function to listen for changes in temperature in Fahrenheit
function listenForTemperatureFahrenheit() {
  const temperatureFRef = database.ref('tempf');
  temperatureFRef.on('value', (snapshot) => {
    const temperatureFData = snapshot.val();
    // Update the UI with the new temperature value in Fahrenheit
    document.getElementById('temperature-data2').innerText = temperatureFData;
  });
}

// Function to listen for changes in temperature in Fahrenheit
function listenForSpo2() {
  const temperatureFRef = database.ref('spo2');
  temperatureFRef.on('value', (snapshot) => {
    const temperatureFData = snapshot.val();
    const temperatureFData2 = snapshot.val();
    // Update the UI with the new temperature value in Fahrenheit
    document.getElementById('spo2-data').innerText = temperatureFData;
    document.getElementById('spo2-data2').innerText = temperatureFData2;
    document.getElementById('spo2-data-report').innerText = temperatureFData2;
  });
}

// Function to listen for changes in temperature in Fahrenheit
function listenForSpeed() {
  const temperatureFRef = database.ref('speed');
  temperatureFRef.on('value', (snapshot) => {
    const temperatureFData = snapshot.val();
    const temperatureFData2 = snapshot.val();
    // Update the UI with the new temperature value in Fahrenheit
    document.getElementById('speed-data').innerText = temperatureFData;
    document.getElementById('speed-data-report').innerText = temperatureFData;
  });
}

// Call the functions to start listening for data changes
listenForHeartRate();
listenForTemperatureCelsius();
listenForTemperatureFahrenheit();
listenForSpo2();
listenForSpeed();

