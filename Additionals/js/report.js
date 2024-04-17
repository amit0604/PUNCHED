// Function to listen for changes in heart rate (BPM)
function hreart() {
    const heartRateRef = database.ref('bpm');
    const saturationRef = database.ref('spo2');
    const speedRef = database.ref('speed');

    heartRateRef.on('value', (snapshot) => {
        const heartRateData = snapshot.val();
        // Update the UI with the new heart rate value
        // Assuming the heart rate value is in bpmData
        let bpmData = heartRateData; // Adjust this line according to your Firebase structure
        console.log(bpmData );
        updateProgressCircle(bpmData);
    });

    saturationRef.on('value', (snapshot) => {
        const spo2eData = snapshot.val();
        // Update the UI with the new heart rate value
        // Assuming the heart rate value is in bpmData
        console.log(spo2eData );
        updateProgressCircle2(spo2eData);
    });

    speedRef.on('value', (snapshot) => {
        const speedData = snapshot.val();
        // Update the UI with the new heart rate value
        // Assuming the heart rate value is in bpmData
        console.log(speedData );
        updateProgressCircle3(speedData);
    });
    reportSummery();
}

function updateProgressCircle(bpmData) {
    const circle = document.querySelector('circle');
    const circumference = circle.getTotalLength();
    let counter = 0;
    
    let intervalId = setInterval(() => {
        if (counter >= bpmData) {
            clearInterval(intervalId);
        } else {
            counter++;
            const progress = counter / 100;
            circle.style.strokeDashoffset = circumference * (1 - progress);
            // Print the BPM value to the console
            console.log("BPM:", bpmData);
            // Set the value of number to be the BPM value
            number.innerHTML = bpmData + " BPM";
        }
    }, 30);
}

function updateProgressCircle2(spo2eData) {
    const circle = document.querySelector('.circle2');
    const circumference = circle.getTotalLength();
    let counter = 0;
    
    let intervalId = setInterval(() => {
        if (counter >= spo2eData) {
            clearInterval(intervalId);
        } else {
            counter++;
            const progress = counter / 100;
            circle.style.strokeDashoffset = circumference * (1 - progress);
            // Print the BPM value to the console
            console.log("SPO2:", spo2eData);
            // Set the value of number to be the BPM value
            numberspo.innerHTML = spo2eData + " SPO2";
        }
    }, 30);
}

function updateProgressCircle3(speedData) {
    const circle = document.querySelector('.circle3');
    const circumference = circle.getTotalLength();
    let counter = 0;
    
    let intervalId = setInterval(() => {
        if (counter >= speedData) {
            clearInterval(intervalId);
        } else {
            counter++;
            const progress = counter / 100;
            circle.style.strokeDashoffset = circumference * (1 - progress);
            // Print the BPM value to the console
            console.log("speed:", speedData);
            // Set the value of number to be the BPM value
            numberspeed.innerHTML = speedData + " m/h";
        }
    }, 30);
}

function reportSummery(bpmData, spo2eData, speedData){
    if(bpmData>89 && spo2eData>70 && speedData>100){
        document.getElementById("report").innerHTML = "congratulations! Your workout was highly effective, promoting improved fitness and overall health.";
    }else if(bpmData<=89 && spo2eData>70 && speedData>100){
        document.getElementById("report").innerHTML = "Your heart rate during the workout was a crucial indicator of your cardiovascular exertion."+
                                                    "An optimal heart rate range during exercise indicates that your cardiovascular system is effectively being challenged, promoting endurance and calorie burn.";
    
    }else if(bpmData>89 && spo2eData<=70 && speedData>100){
        document.getElementById("report").innerHTML = 'Maintaining adequate blood oxygen levels is essential for sustaining energy levels and performance.';
        
    }else if(bpmData>89 && spo2eData>70 && speedData<=12){
        document.getElementById("report").innerHTML = "Adjusting your speed can help tailor the workout to your fitness goals, whether it's building endurance, improving cardiovascular health, or increasing calorie burn.";

    }else if(bpmData<=89 && spo2eData<=70 && speedData>100){
        document.getElementById("report").innerHTML = "Low heart rate coupled with decreased blood oxygen levels may indicate insufficient oxygen delivery to muscles,"+
                                                    "hindering performance and energy levels."+        
                                                    "Consider consulting with a healthcare professional to address any underlying health concerns affecting cardiovascular and respiratory function. Adjustments to your workout regimen may be necessary to ensure safe and effective training.";

    }else if(bpmData>89 && spo2eData<=70 && speedData<=12){
        document.getElementById("report").innerHTML = "Lower blood oxygen levels could lead to decreased stamina and performance,"+
                                                        "while reduced speed might suggest a lack of intensity or fatigue."+
                                                        "To improve, focus on controlled breathing techniques, pacing strategies, and gradual increases in speed to optimize oxygen utilization and performance";

    }else if(bpmData<=89 && spo2eData>70 && speedData<=12){
        document.getElementById("report").innerHTML = "A lower heart rate might indicate that you're not pushing yourself hard enough to reach your target heart rate zone,"+
                                                    "limiting cardiovascular benefits."+
                                                    "Adjustments in intensity, such as increasing resistance or incorporating interval training, can help elevate heart rate and improve overall cardiovascular endurance.";

    }else if(bpmData<=89 && spo2eData<=70 && speedData<=12){
        document.getElementById("report").innerHTML = "congratulations! Your workout was highly effective, promoting improved fitness and overall health.";

    }else{
        document.getElementById("report").innerHTML = "congratulations! Your workout was highly effective, promoting improved fitness and overall health.";
    }

}

// Call the hreart() function to start listening for heart rate changes
hreart();


