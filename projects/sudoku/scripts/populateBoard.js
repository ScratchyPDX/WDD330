import { getNewPuzzle } from "./externalServices.js";

export default class populateBoard {

  constructor() {
    this.boardData = [];
  }

  init() {
    document.getElementById("play-button")    
      .addEventListener("click", () => { 
        this.boardData = getNewPuzzle(getRandomInt()).then(response => {
          console.log("response: " + response);
          this.boardData = response;
          console.log("populateBoard: init: boardData: " + this.boardData);
          this.populateValues();
        }) 
      });
  }

  populateValues() {
    console.log("populateBoard");
    console.log("populateBoard: boardData: " + this.boardData);
    const inputs = document.querySelectorAll('input')
    inputs.forEach((input, i) => {
      input.value = this.boardData[i];
    });
  }  
}

function getRandomInt() {
  const min = Math.ceil(0);
  const max = Math.floor(2000);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
