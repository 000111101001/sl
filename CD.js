jQuery(document).ready(function() {
var sec = 5
var timer = setInterval(function() {
   $("#anuTimer span").text(sec--);
   if (sec == 0) {
$("#anuAchor").delay(1000).fadeIn(1000);
$("#anuDL").delay(1000).fadeIn(1000);
$("#anuTimer").hide(1000) .fadeOut(1000);}
},1000);
});