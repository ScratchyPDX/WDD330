import { getPuzzleSolution } from "./externalServices.js";

export default class solveBoard {
  
  constructor(solveButtonSelector) {
    this.solveButton = document.querySelector(solveButtonSelector);
  }

  init() {
    this.solveButton.addEventListener('click', () => {
      const board = getBoardValues();
      getPuzzleSolution(board).then(res => {
        console.log("solution: " + res);
      })
    });
  }
}

function getBoardValues() {
  const inputs = document.querySelectorAll("input")
  let board = "";
  inputs.forEach((input) => {
      if(input.value) {
          board += input.value; 
      } else {
          board += ".";
      }
  })
  console.log("getBoardValues: board: " + board);
  return board;
}