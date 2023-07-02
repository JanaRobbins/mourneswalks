// Set the date we're counting down to - 8. 7. 2023
var countDownDate = new Date("Jul 8, 2023").getTime();
// Update the count down every day
var x = setInterval(function() {
  // Get today's date 
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  
  // Output the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "  days to start -  1st July 2023 ";
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Walk started on 1st of July 2023, email us or check our web page for another walk in the future";
  }
}, 1000);
