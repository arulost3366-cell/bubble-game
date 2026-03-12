var timerVal = 300;
var scoreVal = 0;
var nextNumber = 1;
var totalBubbles = 40;

function createBubble(num){
  return `<div class="bubble">${num}</div>`;
}

function generateBoard(){

  var numbers=[];

  for(var i=0;i<totalBubbles-1;i++){
    numbers.push(Math.floor(Math.random()*5)+1);
  }

  numbers.push(nextNumber);

  numbers.sort(()=>Math.random()-0.5);

  var clutter="";

  numbers.forEach(n=>{
    clutter+=createBubble(n);
  });

  document.querySelector("#pbtm").innerHTML=clutter;
}

function runTimer(){

  var timer=setInterval(function(){

    if(timerVal>0){

      timerVal--;

    }else{

      clearInterval(timer);

      document.querySelector("#pbtm").innerHTML=
      `<h1 style="color:royalblue">Game Over</h1>`;

    }

    document.querySelector("#timerVal").innerHTML=timerVal;

  },1000);
}

document.querySelector("#pbtm").addEventListener("click",function(e){

  if(!e.target.classList.contains("bubble")) return;

  var clickedNum=Number(e.target.textContent);

  if(clickedNum===nextNumber){

    scoreVal++;

    document.querySelector("#scoreVal").innerHTML=scoreVal;

    nextNumber++;

    if(nextNumber>5) nextNumber=1;

    document.querySelector("#hitVal").innerHTML=nextNumber;

    generateBoard();

  }

});

document.querySelector("#hitVal").innerHTML=nextNumber;

generateBoard();

runTimer();

runTimer();

