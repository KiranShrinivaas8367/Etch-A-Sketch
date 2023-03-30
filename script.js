let click = true;
let color = 'Multicolor';
const board = document.querySelector('.board')
const gridbtn = document.querySelector('.grid')
const colorselect = document.querySelector('.color')

function changeSize(input){
    populateBoard(input)
}

populateBoard(5)

function populateBoard(size)
{
const board = document.querySelector('.board')
// let squares = board.querySelectorAll('div')
// squares.forEach(square=>square.remove())
board.innerHTML = ""
board.style.gridTemplateColumns = `repeat(${size},1fr)`
board.style.gridTemplateRows = `repeat(${size},1fr)`

for (let i=0;i<size*size;i++)
{
    let square = document.createElement("div")
    square.addEventListener('mouseover',squareColor)
    // square.style.backgroundColor = "unset";
    board.insertAdjacentElement("beforeend",square)
    document.querySelector('.value').innerText=`${size}*${size} squares`;
}
}

function squareColor(){
    
    if(click)
    {
        if(color === 'Multicolor'){
            // this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
            // document.querySelector('.color-code').innerHTML='MUlticolor'
            c1=getRandomValue()
            c2=getRandomValue()
            c3=getRandomValue()
            this.style.backgroundColor=`rgb(${c1},${c2},${c3})`
            document.querySelector('.color-code').innerHTML=`RGB(${c1},${c2},${c3})`
            // this.style.border=`3px solid rgb(${c1},${c2},${c3})`
            board.style.border=`3px solid rgb(${c1},${c2},${c3})`
        }
    
        else if(color==='unset')
        {
         this.style.backgroundColor = color;
         document.querySelector('.color-code').innerHTML='Erase';
         board.style.border = 'transparent'
        }

        else if(color==='Gray'){
            t1=getRandomValue();
            t2=t1;
            t3=t1;
            this.style.backgroundColor=`rgb(${t1},${t2},${t3})`;
            document.querySelector('.color-code').innerHTML=`RGB(${t1},${t2},${t3})`;
            board.style.border=`3px solid rgb(${t1},${t2},${t3})`;
            // this.style.border=`3px solid rgb(${t1},${t2},${t3})`;
          }

        else
        {
            this.style.backgroundColor = color;
            document.querySelector('.color-code').innerHTML=color;
            board.style.border=`3px solid ${color}`
        }
    }
}

function colorChange(choice){
    color = choice;
}

colorselect.querySelector('input').addEventListener('input',()=>{
    color=colorselect.querySelector('input').value
})

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
    populateBoard(5)
    board.style.border='none'
    document.querySelector('.color-code').innerHTML='RGB(255,255,255)'
}

function grid(){
    gridbtn.addEventListener('click',()=>
    {
        gridbtn.textContent = (gridbtn.textContent==='Grid On')?'Grid Off' : 'Grid On'
        
        if(gridbtn.textContent == 'Grid Off'){
            board.classList.add("border")
            document.querySelector('.color-code').innerHTML='GRID ON'
        } 
        else{
            board.classList.remove("border")
            document.querySelector('.color-code').innerHTML='GRID OFF'
        }
        
    })
}

function getRandomValue() {
    return Math.floor(Math.random() * 256);
  }

  document.querySelector("body").addEventListener('click',(e)=>
  {
    if(e.target.tagName != "BUTTON" && e.target.tagName != "INPUT")
    {
        // click = !click;
        if(click)
        {
            document.querySelector('.mode').innerText= "Mode : Coloring";
        }
        else{
            document.querySelector('.mode').innerText="Mode : Not coloring";
        }
            
    }
        
  });