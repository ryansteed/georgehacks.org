  document.getElementById("timer").innerHTML = "hi";

// Set the date we're counting down to
var countDownDate = new Date("Mar 25, 2018 11:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var  mili = Math.floor(distance%1000);

  var wait = hours + "h " + minutes + "m " + seconds + "s " + mili + "ms";
  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML =  wait;
  //console.log(wait);

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Submit Now!";
  }
}, 15);