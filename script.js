function clearScreen(){
for (let i=0;i<document.getElementsByClassName("quadrado").length;i++){
document.getElementsByClassName("quadrado")[i].setAttribute("style","background-color: black");
document.getElementsByClassName("quadrado")[i].innerHTML = "";
}
}

function moveSnake(currentWayAux){
if (currentWayAux === 4){
if(indexMap[getCoordenatesMap(positionSnake[0])[1]]!=0 && positionSnake[1]!=positionSnake[0]-1 && !statusCrash && !statusFinished){
if(positionSnake[0]-1 === positionSweet){positionSnake.unshift(positionSnake[0]-1);addBody(currentFruit);positionSweet = getRandomSweetPosition();}
else{
let bodyDuplicated = hasDuplicated(positionSnake);
if (bodyDuplicated.length === 0){positionSnake.unshift(positionSnake[0]-1);positionSnake.pop();}
else{positionSnake.unshift(positionSnake[0]-1);positionSnake.splice(positionSnake.indexOf(bodyDuplicated[0]),1);}
}
currentWay = 4;
//updateSetIntervals();
}
}
else if (currentWayAux === 2){
console.log("currentWay antes "+currentWay);
if(indexMap[getCoordenatesMap(positionSnake[0])[1]]!=linhaMeio.length-1 && positionSnake[1]!=positionSnake[0]+1 && !statusCrash && !statusFinished){
console.log("entrou no 2 if");
if(positionSnake[0]+1 === positionSweet){positionSnake.unshift(positionSnake[0]+1);addBody(currentFruit);positionSweet = getRandomSweetPosition();console.log("entrou no 2 if if");}
else{
console.log("entrou no 2 if else");
let bodyDuplicated = hasDuplicated(positionSnake);
if (bodyDuplicated.length === 0){positionSnake.unshift(positionSnake[0]+1);positionSnake.pop(); console.log("entrou no 2 if else if");}
else{positionSnake.unshift(positionSnake[0]+1);positionSnake.splice(positionSnake.indexOf(bodyDuplicated[0]),1);console.log("entrou no 2 if else else");}
}

currentWay = 2;
//updateSetIntervals();
console.log("currentWay depois "+currentWay);
}
}
else if (currentWayAux === 1){
if(indexMap[getCoordenatesMap(positionSnake[0])[0]]!=0 && positionSnake[1]!=positionSnake[0]-linhaMeio.length && !statusCrash && !statusFinished){
if (positionSnake[0] - linhaMeio.length === positionSweet){positionSnake.unshift(positionSnake[0] - linhaMeio.length);addBody(currentFruit);positionSweet = getRandomSweetPosition();}
else{
let bodyDuplicated = hasDuplicated(positionSnake);
if (bodyDuplicated.length === 0){positionSnake.unshift(positionSnake[0] - linhaMeio.length);positionSnake.pop();}
else{positionSnake.unshift(positionSnake[0] - linhaMeio.length);positionSnake.splice(positionSnake.indexOf(bodyDuplicated[0]),1);}
}
currentWay = 1;
//updateSetIntervals();
}
}
else if (currentWayAux === 3){
if(indexMap[getCoordenatesMap(positionSnake[0])[0]]!=map.length-1 && positionSnake[1]!=positionSnake[0]+linhaMeio.length && !statusCrash && !statusFinished){
if(positionSnake[0] + linhaMeio.length === positionSweet){positionSnake.unshift(positionSnake[0] + linhaMeio.length);addBody(currentFruit);positionSweet = getRandomSweetPosition();}
else{
let bodyDuplicated = hasDuplicated(positionSnake);
if (bodyDuplicated.length === 0){positionSnake.unshift(positionSnake[0] + linhaMeio.length);positionSnake.pop();}
else{positionSnake.unshift(positionSnake[0] + linhaMeio.length);positionSnake.splice(positionSnake.indexOf(bodyDuplicated[0]),1);}
}
currentWay = 3;
//updateSetIntervals();
}
}
checkCrash(); checkFinished(); updateScreen();
}

function hasDuplicated(array){
let duplicated = [];
for (let i=0;i<array.length;i++){
for (let j=0;j<array.length;j++){
if (i != j && positionSnake[i] === positionSnake[j] && !duplicated.includes(positionSnake[i])){duplicated.push(positionSnake[i]);}
}
}
return duplicated;
}

function theEnd(posicao){ //somar 35 8x pra criar efeito <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
let quadrados = document.getElementsByClassName("quadrado");
let mensagemTheEnd = [352,353,354,355,356,358,360,362,363,364,368,369,370,372,376,378,379,380,381,
389,393,395,397,403,407,408,411,413,417,
424,428,429,430,432,433,434,438,439,440,442,444,446,448,452,
459,463,465,467,473,477,480,481,483,487,
494,498,500,502,503,504,508,509,510,512,516,518,519,520,521]
clearScreen();
for (let i=0;i<mensagemTheEnd.length;i++){
quadrados[mensagemTheEnd[i]+35*posicao].setAttribute("style","background-color: white");
}
}

function showCongratulations(){
setTimeout(function(){theEnd(8);},0);
setTimeout(function(){theEnd(7);},250);
setTimeout(function(){theEnd(6);},500);
setTimeout(function(){theEnd(5);},750);
setTimeout(function(){theEnd(4);},1000);
setTimeout(function(){theEnd(3);},1250);
setTimeout(function(){theEnd(2);},1500);
setTimeout(function(){theEnd(1);},1750);
setTimeout(function(){theEnd(0);},2000);
}

function getCoordenatesMap(position){
for (i=0;i<25;i++){
for(j=0;j<35;j++){
if(positionMap[i][j]===position){return [i,j];}
}
}
}

function getRandomSweetPosition(){
currentFruit = Math.trunc(Math.random()*fruit.length);
let freePositions = [];
for (let i=0;i<indexMap.length;i++){
if(indexMap[i]===0 && !positionSnake.includes(i)){freePositions.push(i);}
}
return freePositions[Math.trunc(Math.random()*freePositions.length)];
}

function updateSetIntervals(){
clearInterval(moveSnakeInterval);
moveSnakeInterval = setInterval(function(){moveSnake(currentWay);},speedSnake);
/*updateScreenInterval = setInterval(function () {updateScreen();},50);
moveSnakeInterval = setInterval(function () {moveMonster();},speedSnake);
checkCrashInterval = setInterval(function () {checkCrash();},1);
updateTimeInterval = setInterval(function (){time++;},1000);*/
}

function addBody(qntd){
for(let i=0;i<qntd-1;i++){
positionSnake.splice(1,0,positionSnake[1]);
}
}

function startGame(){

clearScreen();
map.push(linhaExtremidade);
for(let i=0;i<23;i++){map.push(linhaMeio);}
map.push(linhaExtremidade);
updateMap();
positionSnake = [109,108,107];
positionSweet = getRandomSweetPosition();
updateScreen();

}

function updateMap(){
indexMap = [];
positionMap = [];
for (let i=0;i<map.length;i++){
for (let j=0;j<linhaMeio.length;j++){indexMap.push(map[i][j]);}
}
for (let i=0;i<map.length;i++){
let line = [];
for (let j=0;j<linhaMeio.length;j++){line.push(i*35+j);}
positionMap.push(line);
}
//updateSetIntervals();
}

function checkCrash(){
if (indexMap[positionSnake[0]]===1){statusCrash=true;}
else {
for (let i=1;i<positionSnake.length;i++){
if (positionSnake[i]===positionSnake[0]){statusCrash=true;}
}
}
}

function checkFinished(){
if (positionSnake.length >= 759){statusFinished=true; showCongratulations();}
}

function updateScreen(){
clearScreen();
let pixel = document.getElementsByClassName("quadrado");
for (let i=0;i<indexMap.length;i++){
if (indexMap[i] == 0){pixel[i].setAttribute("style","background-color: black");}
else if (indexMap[i] == 1){pixel[i].setAttribute("style","background-color: gray");}
}
for (let i=1;i<positionSnake.length;i++){pixel[positionSnake[i]].setAttribute("style","background-color: yellow");}
pixel[positionSweet].innerHTML = fruit[currentFruit];

//INSERIR BORDAS
let border1 = []
let border2 = []
let border3 = []
let border4 = []
for (let i=1;i<positionSnake.length-1;i++){
if((positionSnake[i]+35 === positionSnake[i+1] && positionSnake[i]+1 === positionSnake[i-1]) || (positionSnake[i]+35 === positionSnake[i-1] && positionSnake[i]+1 === positionSnake[i+1])){border1.push(positionSnake[i])}
else if((positionSnake[i]-1 === positionSnake[i+1] && positionSnake[i]+35 === positionSnake[i-1])||(positionSnake[i]-1 === positionSnake[i-1] && positionSnake[i]+35 === positionSnake[i+1])){border2.push(positionSnake[i])}
else if((positionSnake[i]-35 === positionSnake[i+1] && positionSnake[i]-1 === positionSnake[i-1])||(positionSnake[i]-35 === positionSnake[i-1] && positionSnake[i]-1 === positionSnake[i+1])){border3.push(positionSnake[i])}
else if((positionSnake[i]-35 === positionSnake[i+1] && positionSnake[i]+1 === positionSnake[i-1])||(positionSnake[i]-35 === positionSnake[i-1] && positionSnake[i]+1 === positionSnake[i+1])){border4.push(positionSnake[i])}
}
for(let i=0;i<border1.length;i++){pixel[border1[i]].setAttribute("style","background-color: yellow; border-radius: 10px 0 0 0 ");}
for(let i=0;i<border2.length;i++){pixel[border2[i]].setAttribute("style","background-color: yellow; border-radius: 0 10px 0 0 ");}
for(let i=0;i<border3.length;i++){pixel[border3[i]].setAttribute("style","background-color: yellow; border-radius: 0 0 10px 0 ");}
for(let i=0;i<border4.length;i++){pixel[border4[i]].setAttribute("style","background-color: yellow; border-radius: 0 0 0 10px ");}



//MUDAR RABO
if(positionSnake[positionSnake.length-1]-35 === positionSnake[positionSnake.length-2]){pixel[positionSnake[positionSnake.length-1]].setAttribute("style","background-color: yellow; border-radius: 0 0 10px 10px");}
else if(positionSnake[positionSnake.length-1]+1 === positionSnake[positionSnake.length-2]){pixel[positionSnake[positionSnake.length-1]].setAttribute("style","background-color: yellow; border-radius: 10px 0 0 10px");}
else if(positionSnake[positionSnake.length-1]+35 === positionSnake[positionSnake.length-2]){pixel[positionSnake[positionSnake.length-1]].setAttribute("style","background-color: yellow; border-radius: 10px 10px 0 0");}
else if(positionSnake[positionSnake.length-1]-1 === positionSnake[positionSnake.length-2]){pixel[positionSnake[positionSnake.length-1]].setAttribute("style","background-color: yellow; border-radius: 0 10px 10px 0");}

//MOSTRAR DUPLICADOS
let bodyDuplicated = hasDuplicated(positionSnake);
for(let i=0;i<bodyDuplicated.length;i++){pixel[bodyDuplicated[i]].setAttribute("style","background-color: orange");}

//MUDAR CABEÇA
if (currentWay === 1){pixel[positionSnake[0]].setAttribute("style","background-color: red; border-radius: 10px 10px 0 0");}
else if(currentWay === 2){pixel[positionSnake[0]].setAttribute("style","background-color: red; border-radius: 0 10px 10px 0");}
else if(currentWay === 3){pixel[positionSnake[0]].setAttribute("style","background-color: red; border-radius: 0 0 10px 10px");}
else if(currentWay === 4){pixel[positionSnake[0]].setAttribute("style","background-color: red; border-radius: 10px 0 0 10px");}
}

const linhaExtremidade = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
const linhaMeio = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];


let map = [];
let indexMap = [];
let positionMap = [];

let level = 1;
let lastLevel = 5;
let positionSnake = [];
let speedSnake = 250;
let score = 0;
let time = 0;
let positionSweet;
let currentWay = 2;
let pause = false;

//ABACAXI-BANANA-CEREJA-COCO-LIMÃO-MAÇA-MELANCIA-MORANGO-TANGERINA-UVA
let fruit = ["&#127821","&#127820","&#127826","&#129381","&#127819","&#127822","&#127817","&#127827","&#127818","&#127815"];
let currentFruit = Math.trunc(Math.random()*fruit.length);

let statusCrash = false;
let statusFinished = false;

let updateScreenInterval;
let moveSnakeInterval;
let checkCrashInterval;
let updateTimeInterval;

startGame();

moveSnakeInterval = setInterval(function(){moveSnake(currentWay);},speedSnake);

document.body.addEventListener('keydown', function(event)
{
const key = event.key;
switch (key) {

case "ArrowLeft":
currentWay =4;
//moveSnake(4);
break;
case "ArrowRight":
currentWay =2;
//moveSnake(2);
break;
case "ArrowUp":
currentWay =1;
//moveSnake(1);
break;
case "ArrowDown":
currentWay =3;
//moveSnake(3);
break;
case "Enter":
if (!pause){clearInterval(moveSnakeInterval);pause=true;}
else{moveSnakeInterval = setInterval(function(){moveSnake(currentWay);},speedSnake); pause=false;}
break;
}
});
