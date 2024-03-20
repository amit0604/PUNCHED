function realTimeClock(){
    var rtclck = new Date()

    var hours =rtclck.getHours()
    var minutes =rtclck.getMinutes()
    var seconds =rtclck.getSeconds()

    // Add AM:PM system
    var amPm = (hours < 12) ? "AM" : "PM"

    // Convert the hours component to 12-hours format
    hours = (hours > 12) ? hours -12 : hours

    //Pad the Hours, Minutes and Seconds with leading zeros
    hours = ("0" + hours).slice(-2)
    minutes = ("0" + minutes).slice(-2)
    seconds = ("0" + seconds).slice(-2)

    //Display the clock
    document.getElementById('time-data').innerHTML = hours + " : " + minutes + " : " + seconds + " " + amPm
    var t = setTimeout(realTimeClock,500)
}