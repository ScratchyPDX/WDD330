
export default class populateBoard {

  constructor() {
    this.boardData = [];
  }

  init() {
    document.getElementById("play-button")    
      .addEventListener("click", () => { 
        this.getBoardData().then(() => {
          console.log("populateBoard: init: boardData: " + this.boardData);
          this.populateValues();
        }) 
      });
  }

  async getBoardData() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'af23287987mshc12f3e6f80944bcp117c10jsn6dc87d745977',
        'X-RapidAPI-Host': 'sudoku-generator1.p.rapidapi.com'
      }
    };
    
    await fetch('https://sudoku-generator1.p.rapidapi.com/sudoku/generate?seed=1337', options)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        const responseArray = Array.from(response.puzzle.replaceAll('.', ' '));
        console.log(responseArray);
        this.boardData = responseArray;
      })
      .catch(err => console.error(err));
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

