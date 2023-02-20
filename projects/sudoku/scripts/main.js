import { drawInitialBoard } from "./drawBoard.js";
import populateBoard from "./populateBoard.js";
import solveBoard from "./solveBoard.js";
// import { insertValues, solve, populateValues } from "./solver.js";

const solveButton = document.querySelector("#solve-button")
const clearButton = document.querySelector("#clear-button")

function main() {
    drawInitialBoard();
    clearButton.addEventListener('click', () => window.location.reload(true));
}

const play = new populateBoard();
play.init();

const solve = new solveBoard("#solve-button");
solve.init();

main();