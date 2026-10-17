document.addEventListener("DOMContentLoaded", function() {
const board = document.querySelector("#board");
const squares = board.querySelectorAll("div");
const status = document.querySelector("#status");
const newGameButton = document.querySelector(".controls button");


let currentPlayer = "X"
let gameOver = false;
let gameState = ["","","","","","","","",""];

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

const startingMessage = "Move your mouse over a square and click to play an X or an O.";

squares.forEach(function(square,index){
square.classList.add("square");

square.addEventListener("click", function(){
if (gameOver || gameState[index] !== ""){
return;
}

gameState[index] = currentPlayer;
square.textContent = currentPlayer;
square.classList.add(currentPlayer);

for (const combination of winningCombinations){
const [a,b,c] = combination;

if (gameState[a] != "" &&
gameState[a] === gameState[b] &&
gameState[b] === gameState[c]
){
status.textContent =
"Congratulations!" + currentPlayer + " is the  Winner!";
status.classList.add("you-won");
gameOver = true
return;
}
}
if (gameState.every(function(value){
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

newGameButton.addEventListener("click", function(event){
event.preventDefault();

gameState = ["","","","","","","","",""];
currentPlayer = "X";
gameOver = false;

squares.forEach(function(square){
square.textContent = "";
square.classList.remove("X", "O", "hover");
});

status.textContent = startingMessage;
status.classsList.remove("you-won");
});
});
