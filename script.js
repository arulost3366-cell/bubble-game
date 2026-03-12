var timerVal = 300
var scoreVal = 0
var nextNumber = 1

var bubbleCount = 10

var area = document.querySelector("#gameArea")

function randomPosition(){

var x = Math.random()*750
var y = Math.random()*420

return {x,y}

}

function createBubble(num){

var bubble = document.createElement("div")

bubble.classList.add("bubble")

bubble.textContent = num

var pos = randomPosition()

bubble.style.left = pos.x + "px"
bubble.style.top = pos.y + "px"

bubble.onclick = function(){

if(num === nextNumber){

scoreVal++

document.querySelector("#scoreVal").innerHTML = scoreVal

nextNumber++

if(nextNumber > 5){
nextNumber = 1
}

document.querySelector("#hitVal").innerHTML = nextNumber

bubble.remove()

spawnBubble()

}

}

area.appendChild(bubble)

}

function spawnBubble(){

var num

if(Math.random() < 0.5){

num = nextNumber

}else{

num = Math.floor(Math.random()*5)+1

}

createBubble(num)

}

function generateBoard(){

for(var i=0;i<bubbleCount;i++){

var num = Math.floor(Math.random()*5)+1

createBubble(num)

}

}

function runTimer(){

var timer = setInterval(function(){

if(timerVal > 0){

timerVal--

}else{

clearInterval(timer)

area.innerHTML = "<h1 style='text-align:center;margin-top:200px'>Game Over</h1>"

}

document.querySelector("#timerVal").innerHTML = timerVal

},1000)

}

document.querySelector("#hitVal").innerHTML = nextNumber

generateBoard()

runTimer()

