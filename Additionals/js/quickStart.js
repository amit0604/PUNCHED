const main = document.getElementById("main-dashboard");
const workout = document.getElementById("quick-start");
const workouthistory = document.getElementById("workout-history");
const reports = document.getElementById("reports"); 

function dashboard() {
    // Display
    main.style.display = "block";
    workout.style.display = "none";
    workouthistory.style.display = "none";
    reports.style.display = "none";
}


function quickStart() {
    // Display
    main.style.display = "none";
    workout.style.display = "block";
    workouthistory.style.display = "none";
    reports.style.display = "none";
}

function workoutHistory() {
    // Display
    main.style.display = "none";
    workout.style.display = "none";
    workouthistory.style.display = "block";
    reports.style.display = "none";
}

function report() {
    // Display
    main.style.display = "none";
    workout.style.display = "none";
    workouthistory.style.display = "none";
    reports.style.display = "block";
}


