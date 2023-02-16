export function drawInitialBoard() {
    const sudokuBoard = document.querySelector("#puzzle")
    const squares = 81
    const darkSquare = [0,1,2,6,7,8,9,10,11,15,16,17,18,
        19,20,24,25,26,30,31,32,39,40,41,48,49,50,54,55,
        56,60,61,62,63,64,65,69,70,71,72,73,74,78,79,80];

    for (let i = 0; i < squares; i++) {
        const inputElement = document.createElement("input")
        inputElement.setAttribute("type", "number")
        inputElement.setAttribute("maxlength", "1")
        inputElement.setAttribute("oninput", "this.value=this.value.slice(0,this.maxLength)")
        inputElement.setAttribute("onkeyup", "if(value<1) value='';")
       
        if (darkSquare.includes(i)) {
            inputElement.classList.add("odd-section")
        }
        sudokuBoard.appendChild(inputElement)
    }
}

