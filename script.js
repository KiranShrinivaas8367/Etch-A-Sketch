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
    let innerTemp=`<h2>Hover over Me</h2>`;
}
}
populateBoard(5)


function squareColor(){
    
    if(click)
    {
        const board = document.querySelector('.board');
        if(color === 'Multicolor')
        {
            // this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
            // document.querySelector('.color-code').innerHTML=color;
            t1=getRandomValue();
            t2=getRandomValue();
            t3=getRandomValue();
            this.style.backgroundColor=`rgb(${t1},${t2},${t3})`;
            document.querySelector('.color-code').innerHTML=`RGB(${t1},${t2},${t3})`;
            board.style.border=`1px solid rgb(${t1},${t2},${t3})`;
        }
    
        else if(color==='unset')
        {
         this.style.backgroundColor = color;
         document.querySelector('.color-code').innerHTML='Erase';
         board.style.border = 'none';
        }

        else if(color==='Gray'){
            t1=getRandomValue();
            t2=t1;
            t3=t1;
            this.style.backgroundColor=`rgb(${t1},${t2},${t3})`;
            document.querySelector('.color-code').innerHTML=`RGB(${t1},${t2},${t3})`;
            board.style.border=`2px solid rgb(${t1},${t2},${t3})`;
          }

        else
        {
            this.style.backgroundColor = color;
            document.querySelector('.color-code').innerHTML=color;
            board.style.border=`1px solid ${color}`
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
    board.style.border = 'none'
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