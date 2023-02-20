import { getNewPuzzle } from "./externalServices.js";
import { getRandomInt } from "./utils.js";

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
      if(this.boardData[i] != " ") {
        input.value = this.boardData[i];
      }
    });
  }  
}
