/*Document Id's*/
const Months = document.getElementById("Months");
const Days = document.getElementById("Days");
const Hours = document.getElementById("Hours");
const Minutes = document.getElementById("Minutes");
const Seconds = document.getElementById("Seconds");

/*CountDown*/
function endYear(){
    var date = new Date();
    var Idate = new Date("Jul 1 2021 16:15:00 GMT-0500");
    var Tseg = (Idate - date) / 1000;

    var seg = Math.round(Tseg) % 60;
    var min = Math.floor(Tseg / 60) % 60;
    var hours = Math.floor(Tseg / 3600) % 24;
    var days = Math.floor(Tseg / 3600 / 24);
    var month = Math.floor(days / 30.4167);

    Months.innerHTML = month;
    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = min;
    Seconds.innerHTML = seg;

    const Tend = month + days + hours + min + seg;
    return Tend; 
}; setInterval(endYear, 1000);

/*Save the value of Tend*/
var Tend = endYear();

if(Tend === 0){
    function birthday(){
        alert("HAPPY BIRTHDAY ALEXIS!!!");
    }
    birthday();
}
console.log(Tend);