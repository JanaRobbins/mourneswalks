// Set the date we're counting down to - 21. 1. 2024
var countDownDate = new Date("Jan 21, 2025").getTime();
// Update the count down every day
var x = setInterval(function() {
  // Get today's date 
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  
  // Output the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "  days to start -  21st January 2024 ";
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Walk started on 21st of January 2024, email us or check our web page for another walk in the future";
  }
}, 1000);
