let board = []

export function insertValues() {
    const inputs = document.querySelectorAll('input')
    
    inputs.forEach((input) => {
        if(input.value) {
            board.push(parseInt(input.value))
            input.classList.add('input-el') 
        } else {
            board.push(0)
            input.classList.add('empty-el')
        }
    })
}