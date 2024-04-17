const timeDisplay = document.querySelector('#time-display');
const table = document.querySelector("#myTable");

let startTime = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let idCounter = 1; // Initialize ID counter to 1
let timer = null;

function stopWatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    timeDisplay.innerHTML = h + " : " + m + " : " + s;
}

function watchStart() {
    if (timer != null) {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
    // Set the start time in the table
    let now = new Date();
    let startTimeFormatted = now.toLocaleTimeString();
    addRowToTable(startTimeFormatted, "", "", "");
}

function watchStop() {
    clearInterval(timer);
    // Calculate duration
    let duration = calculateDuration();
    // Set the end time in the table
    let now = new Date();
    let endTimeFormatted = now.toLocaleTimeString();
    updateLastRowInTable(endTimeFormatted, duration);
    // Reset stopwatch time
    resetStopwatch();
    // Save data in local storage
    saveDataToLocalStorage();
}

function resetStopwatch() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timeDisplay.innerHTML = "00 : 00 : 00";
}

function addRowToTable(startTime, realTimeStart, endTime, realTimeEnd) {
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    cell1.innerHTML = idCounter++; // Increment ID counter and set as ID
    cell2.innerHTML = new Date().toLocaleDateString();
    cell3.innerHTML = startTime;
    cell4.innerHTML = "";
    cell5.innerHTML = "";
}

function updateLastRowInTable(realTimeEnd, duration) {
    let lastRow = table.rows[table.rows.length - 1];
    lastRow.cells[4].innerHTML = realTimeEnd;
    lastRow.cells[3].innerHTML = duration;
}

function calculateDuration() {
    let totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
    let durationHours = Math.floor(totalSeconds / 3600);
    let durationMinutes = Math.floor((totalSeconds % 3600) / 60);
    let durationSeconds = totalSeconds % 60;
    return `${durationHours < 10 ? '0' + durationHours : durationHours} : ${durationMinutes < 10 ? '0' + durationMinutes : durationMinutes} : ${durationSeconds < 10 ? '0' + durationSeconds : durationSeconds}`;
}

function saveDataToLocalStorage() {
    let tableData = [];
    let rows = table.rows;
    for (let i = 1; i < rows.length; i++) {
        let row = rows[i];
        let rowData = {
            id: row.cells[0].innerText,
            date: row.cells[1].innerText,
            startTime: row.cells[2].innerText,
            duration: row.cells[3].innerText,
            realTimeEnd: row.cells[4].innerText
        };
        tableData.push(rowData);
    }
    localStorage.setItem('tableData', JSON.stringify(tableData));
}

// Load table data from local storage if available
window.onload = function () {
    let savedTableData = localStorage.getItem('tableData');
    if (savedTableData) {
        let parsedTableData = JSON.parse(savedTableData);
        parsedTableData.forEach(data => {
            addRowToTable(data.startTime, "", data.duration, data.realTimeEnd);
        });
        idCounter = parsedTableData.length + 1; // Set the ID counter to the next available ID
    }
};
