const timeDisplay = document.querySelector('#time-display');
const startBtn = document.querySelector("#start-button");
const pauseBtn = document.querySelector("#pause-button");
const resetBtn = document.querySelector("#reset-button");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hours = 0;
let minutes = 0;
let seconds = 0;

let timer = null;
function stopWatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0 ;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    let h = hours<10?"0" + hours:hours;
    let m = minutes<10?"0" + minutes:minutes;
    let s = seconds<10?"0" + seconds:seconds;

    timeDisplay.innerHTML = h + ":" + m + ":" + s;  
}


// to increase the time by 1 every 1 second
function watchStart(){
    if(timer!= null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000)
}

function watchStop(){
    clearInterval(timer);
}

function watchReset(){
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timeDisplay.innerHTML = "00 : 00 : 00";
}

startBtn.addEventListener("click",watchStart);
pauseBtn.addEventListener("click",watchStop);
resetBtn.addEventListener("click",watchReset);