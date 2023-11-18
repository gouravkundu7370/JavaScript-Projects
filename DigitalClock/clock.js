let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let sec = document.getElementById("sec");
let dt = document.getElementById("dt");

setInterval(() => {
  let currTime = new Date();
  hrs.innerHTML = currTime.getHours();
  mins.innerHTML = currTime.getMinutes();
  sec.innerHTML = currTime.getSeconds();
  dt.innerHTML = currTime.toDateString();
}, 1000);
