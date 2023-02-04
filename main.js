populateBoard(10)

function changeSize(input){
    populateBoard(input)
}

function populateBoard(size)
{
const board = document.querySelector('.board')
let squares = board.querySelectorAll('div')
squares.forEach(square=>square.remove())
board.style.gridTemplateColumns = `repeat(${size},1fr)`
board.style.gridTemplateRows = `repeat(${size},1fr)`

for (let i=0;i<size*size;i++){
    let square = document.createElement("div")
    square.addEventListener('mousemove',squareColor)
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend",square)
}

}

const color = black;
function squareColor(){
    if(color === 'random')
    this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
    else
    this.style.backgroundColor = color;
}

function colorChange(choice){
    color = choice;
}

function remove(){
    const board = document.querySelector('.board')
    let squares = board.querySelectorAll('div')
    squares.forEach(square=>square.style.backgroundColor='white')
}

function reset(){
    const board = document.querySelector('.board')
    let squares = board.querySelectorAll('div')
    squares.forEach(square=>square.remove())
}

function getRandomValue() {
    return Math.floor(Math.random() * 256);
  }