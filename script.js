let click = true;
let color = 'Black';

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

for (let i=0;i<size*size;i++)
{
    let square = document.createElement("div")
    square.addEventListener('mouseover',squareColor)
    square.style.backgroundColor = "unset";
    board.insertAdjacentElement("beforeend",square)
    document.querySelector('.value').innerText=`${size}*${size} squares`;
}
}
populateBoard(5)


function squareColor(){
    
    if(click)
    {
        if(color === 'Multicolor')
        {
            this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
            document.querySelector('.color-code').innerHTML=color;
        }
    
        else if(color==='unset')
        {
         this.style.backgroundColor = color;
         document.querySelector('.color-code').innerHTML='Erase';
        }

        else
        {
            const board = document.querySelector('.board')
            this.style.backgroundColor = color;
            document.querySelector('.color-code').innerHTML=color;
        }
    }
}

function colorChange(choice){
    color = choice;
}

function remove(){
    const board = document.querySelector('.board')
    let squares = board.querySelectorAll('div')
    squares.forEach(square=>square.style.backgroundColor='unset')
    // board.style.border=`.5px solid black`;
    document.querySelector('.color-code').innerHTML='Clear' ;
}

function reset(){
    const board = document.querySelector('.board')
    let squares = board.querySelectorAll('div')
    squares.forEach(square=>square.remove())
}

function getRandomValue() {
    return Math.floor(Math.random() * 256);
  }

  document.querySelector("body").addEventListener('click',(e)=>
  {
    if(e.target.tagName != "BUTTON" && e.target.tagName != "INPUT")
    {
        click = !click;
        if(click)
        {
            document.querySelector('.mode').innerText= "Coloring";
        }
        else{
            document.querySelector('.mode').innerText="Not coloring";
        }
            
    }
        
  });