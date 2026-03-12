var timerVal = 300;
var scoreVal = 0;
var nextNumber = 1;

//生成 bubbles
var makeBubble = () => {

  var clutter = "";

  for(var i=0;i<40;i++){

    var randomNum = Math.floor(Math.random()*9)+1;

    clutter += `<div class="bubble">${randomNum}</div>`;

  }

  document.querySelector("#pbtm").innerHTML = clutter;

};


//Timer
var runTimer = () => {

  var timer = setInterval(function(){

    if(timerVal > 0){

      timerVal--;

    }else{

      clearInterval(timer);

      document.querySelector("#pbtm").innerHTML =
      `<h1 style='color:royalblue'>Game Over</h1>`;

    }

    document.querySelector("#timerVal").innerHTML = timerVal;

  },1000);

};


//点击 bubble
document.querySelector("#pbtm").addEventListener("click",function(e){

  var clickedNum = Number(e.target.textContent);

  if(clickedNum === nextNumber){

    scoreVal++;

    document.querySelector("#scoreVal").innerHTML = scoreVal;

    nextNumber++;

    if(nextNumber > 9){
      nextNumber = 1;
    }

    document.querySelector("#hitVal").innerHTML = nextNumber;

    e.target.remove();

  }

});


//初始化
document.querySelector("#hitVal").innerHTML = nextNumber;

makeBubble();

runTimer();
