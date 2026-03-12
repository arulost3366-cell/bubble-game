var timerVal = 300;
var scoreVal = 0;
var nextNumber = 1;

var gridCols = 4;
var gridRows = 3;

var area = document.querySelector("#gameArea");

function shuffle(array){
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateBoard(){

  area.innerHTML = "";

  nextNumber = 1;
  document.querySelector("#hitVal").innerHTML = nextNumber;

  var numbers = [1,2,3,4,5,6,7,8,9];
  numbers = shuffle(numbers);

  var cellWidth = area.clientWidth / gridCols;
  var cellHeight = area.clientHeight / gridRows;

  for(let i=0;i<9;i++){

    var bubble = document.createElement("div");
    bubble.classList.add("bubble");

    bubble.textContent = numbers[i];

    var col = i % gridCols;
    var row = Math.floor(i / gridCols);

    var offsetX = Math.random()*40;
    var offsetY = Math.random()*40;

    bubble.style.left = (col * cellWidth + 30 + offsetX) + "px";
    bubble.style.top = (row * cellHeight + 30 + offsetY) + "px";

    bubble.onclick = function(){

      var num = Number(this.textContent);

      if(num === nextNumber){

        scoreVal++;
        document.querySelector("#scoreVal").innerHTML = scoreVal;

        this.remove();

        nextNumber++;

        if(nextNumber > 9){

          setTimeout(()=>{
            generateBoard();
          },500);

        }else{

          document.querySelector("#hitVal").innerHTML = nextNumber;

        }

      }

    };

    area.appendChild(bubble);

  }

}

function runTimer(){

  var timer = setInterval(function(){

    if(timerVal > 0){

      timerVal--;

    }else{

      clearInterval(timer);

      area.innerHTML = "<h1 style='text-align:center;margin-top:200px'>Game Over</h1>";

    }

    document.querySelector("#timerVal").innerHTML = timerVal;

  },1000)

}

generateBoard();
runTimer();
