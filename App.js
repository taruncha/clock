function startTime() {
    var today = new Date();

    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    amorpm = (hr < 12) ? "AM" : "PM";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
   
   
    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec + " " + amorpm;
    document.getElementById("date").innerHTML = today;
    var time = setTimeout(function(){ startTime() }, 10);
}
