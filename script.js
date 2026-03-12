var timerVal = 300;
var scoreVal = 0;
var hitVal = 0;

//Increase score
var increaseScore = () => {
  scoreVal += 10;
  document.querySelector("#scoreVal").innerHTML = scoreVal;
};

//Hit value update
var getNewHit = () => {
  hitVal = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").innerHTML = hitVal;
};

//Creates Bubbles with random numbers.
var makeBubble = () => {
  var clutter = "";
  for (var i = 0; i < 40; i++) {
    var random_num = Math.floor(Math.random() * 10);
    bubbleVal = random_num;
    clutter += `<div class="bubble">${bubbleVal}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
};

//Timer run
var runTimer = () => {
  var timer = setInterval(() => {
    if (timerVal > 0) {
      timerVal--;
    } else {
      clearInterval(timer);
      document.querySelector("#pbtm").innerHTML = `<h1 style='color:royalblue'>Game Over</h1>`;
      //Clears memory when timer is finished.
    }
    document.querySelector("#timerVal").innerHTML = timerVal;
  }, 1000);
};
getNewHit();
document.querySelector("#pbtm").addEventListener("click", (e) => {
  if (e.target.classList.contains("bubble")) {
    e.target.remove();   // bubble 消失
    scoreVal += 1;
    document.querySelector("#scoreVal").innerHTML = scoreVal;
  }
});
makeBubble();
runTimer();


