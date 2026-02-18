var second = 0;
var minute = 0;
var hour = 0;
var date = new Date();


setInterval(
    function () {
           date=new Date();
           second=date.getSeconds()*6;  // a seond move 360 deg and total 60 second so 360/60=6  so here multiply second by 6
           minute=date.getMinutes()*6; // here also total sixty minute and move 360/6 = 6
           hour=date.getHours()*30+Math.round(minute/12);       // here the tortal diameter(360) divided by 12 360/12=30
           document.getElementById("second").style.transform="rotate("+second+"deg)"
           document.getElementById("minute").style.transform="rotate("+minute+"deg)"
           document.getElementById("hour").style.transform="rotate("+hour+"deg)"

    },1000 // call function at every second
);