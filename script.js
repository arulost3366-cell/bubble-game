var timerVal = 300;
var scoreVal = 0;
var nextNumber = 1;

var area = document.querySelector("#gameArea");

function shuffle(array){
for(let i=array.length-1;i>0;i--){
let j=Math.floor(Math.random()*(i+1));
[array[i],array[j]]=[array[j],array[i]];
}
return array;
}

function generateBoard(){

area.innerHTML="";

nextNumber=1;
document.querySelector("#hitVal").innerHTML=nextNumber;

var numbers=[1,2,3,4,5,6];
numbers=shuffle(numbers);

var cols=3;
var rows=2;

var cellWidth=area.clientWidth/cols;
var cellHeight=area.clientHeight/rows;

for(let i=0;i<6;i++){

var bubble=document.createElement("div");
bubble.classList.add("bubble");

bubble.textContent=numbers[i];

var col=i%cols;
var row=Math.floor(i/cols);

var offsetX=Math.random()*40;
var offsetY=Math.random()*40;

bubble.style.left=(col*cellWidth+40+offsetX)+"px";
bubble.style.top=(row*cellHeight+40+offsetY)+"px";

bubble.onclick=function(){

var num=Number(this.textContent);

if(num===nextNumber){

scoreVal++;
document.querySelector("#scoreVal").innerHTML=scoreVal;

this.classList.add("pop");

setTimeout(()=>{
this.remove();
},250);

nextNumber++;

if(nextNumber>6){

setTimeout(()=>{
generateBoard();
},500);

}else{

document.querySelector("#hitVal").innerHTML=nextNumber;

}

}else{

/* 点击错误闪红 */

this.style.background="crimson";

setTimeout(()=>{
this.style.background="royalblue";
},200);

}

}

area.appendChild(bubble)

}

}

function runTimer(){

var timer=setInterval(function(){

if(timerVal>0){
timerVal--;
}else{
clearInterval(timer);
area.innerHTML="<h1 style='text-align:center;margin-top:200px'>Game Over</h1>";
}

document.querySelector("#timerVal").innerHTML=timerVal;

},1000)

}

generateBoard();
runTimer();
