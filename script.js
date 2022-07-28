let xturn = true;
const wins=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];


const board = document.getElementsByClassName('board')
const cells = document.querySelectorAll('.cell')
const yscore = document.getElementsByClassName('ywin')
const xscore = document.getElementsByClassName('xwin')
const winnermsg = document.getElementsByClassName('msg')
const winnertext = document.getElementsByClassName('win')
const winnerbtn = document.getElementById('winner')
let xwins = 0
let ywins = 0
winnerbtn.addEventListener('click',start)

start()
function start(){
    xturn = true
    cells.forEach(cell=>{
        cell.id = ''
        cell.addEventListener('click',show,{once : true})
    })
    xscore[0].innerHTML = `${xwins}` 
    yscore[0].innerHTML = `${ywins}`
    board[0].id = 'x'
    winnermsg[0].removeAttribute('id')
}

function show(e){
    const currclass = xturn ? 'x' : 'o'
    e.target.id= currclass
    if (checkwin(currclass)){
        if(xturn){
            xwins++
            winnertext[0].innerHTML='X wins!'
            winnermsg[0].id = 'show'

        }else{
            ywins++
            winnertext[0].innerHTML='O wins!'
            winnermsg[0].id = 'show'
        }
    }else if(draw()){
        winnertext[0].innerHTML='Draw!'
        winnermsg[0].id = 'show'
    }else{
    xturn = ! xturn
    board[0].id = xturn ? 'x' : 'o'
    }
}
function checkwin(currclass){
    return wins.some(win =>{
        return win.every(i =>{
            return cells[i].id == currclass
        })
    })
}
function draw(){
    let dr=0
    for(let i =0; i < cells.length;i++){
        if (cells[i].id == 'x'||cells[i].id == 'o'){
            dr++
        }
    }
    return dr == 9
}