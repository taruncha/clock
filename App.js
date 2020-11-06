function startTime() {
    var today = new Date();

    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    amorpm = (hr < 12) ? "AM" : "PM";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
   if (hr<10) {
       hr="0"+hr;
   } 
   if (min<10) {
       min="0"+min;
   }
   if (sec<10) {
       sec="0"+sec;
   }
   
    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec + " " + amorpm;
  
    var time = setTimeout(function(){ startTime() }, 10);
}
