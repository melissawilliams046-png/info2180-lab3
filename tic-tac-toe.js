document.addEventListener("DOMContentloaded', function()){
const board = document.querySelector("#board");
const square = board.querySelectorAll("div");
const status = document.querySelector("#status");
const newGameButton = document. querySelector(".controls button");


let currentPlayer = "x"
let gameOver = fales;
let gamestate = ["","","","","","","","",""];

const winningCombinations = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

const startingMessage = "Move ypur mouse over a square and click to play an X or an O.";

square.forEach(function(square,index){
sqaure.classList.add("square");

square.addEvenelistener("click, function()){
if (gameOver || gameState[] != ""){
return;
}

gameState[index] = currentPlayer;
square.textContent = currentPlayer;
square.classList.add(currentPlayer);

for (
gamesState[a] != "" &&
gameState[a] === gamesState[b] &&
gameStat[b] === gameState[c]
){
status.textContent =
"Congratulations!" + currentPlayer + " is the  Winner!";
status.classList.add("you-won");
gameover = true
return;
}
}
if gameState.every(function(value){
return value !== "";}))
{
status.textContent = "It's a draw!";
gameOver = true;
return;
}
currentPlayer = currentPlayer === "X" ? "O" : "X";});

square.addEventListener("mouseenter",function (){
if (!gameOver && gameState[index] === "") {
square.classList.add("hover");
}
});

square.addEventListener("mouseleave", function(){
square.classList.remove("hover");
});
});

if(newGameButton) {
newGameButton.addEventListener("click", function(event){
event. preventDefault();

gameState = ["","","","","","","","",""];
currentPlayer = "X";
gameOver = false;

squares.forEacc(function(square){
square.texyContent = "";
square.classList.remove("X", "O", "hover");
});

stause.textComtemt = startingMessage;
status.classsList.remove("you-won");
});
}
});
