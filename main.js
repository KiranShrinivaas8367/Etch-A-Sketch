function populateBoard(size)
{
const board = document.querySelector('.board')
let squares = board.querySelectorAll('div')
squares.forEach(div=>div.remove())
board.style.gridTemplateColumns = `repeat(${size},1fr)`
board.style.gridTemplateRows = `repeat(${size},1fr)`

for (let i=0;i<size*size;i++){
    let square = document.createElement("div")
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend",square)
}

}

// populateBoard(16)
function changeSize(input){
    populateBoard(input)
}