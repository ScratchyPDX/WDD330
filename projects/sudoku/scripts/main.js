import { drawInitialBoard } from "./drawBoard.js";
import populateBoard from "./populateBoard.js";
import { insertValues, solve, populateValues } from "./solver.js";

const solveButton = document.querySelector("#solve-button")
const clearButton = document.querySelector("#clear-button")

function main() {
    drawInitialBoard()
    solveButton.addEventListener('click', () => {
        insertValues()
        if(solve()) {
            populateValues()
        } else {
            alert("Can't solve this puzzle!")
        }
    })
    clearButton.addEventListener('click', () => window.location.reload(true))
}

const play = new populateBoard();
play.init();
main();