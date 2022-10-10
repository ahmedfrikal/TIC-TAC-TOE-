const cell = document.querySelectorAll('.cell');
const player1Scorespan = document.querySelector('.player1score');
const player2Scorespan = document.querySelector('.player2score');
const restrartbtn = document.querySelector('.Restart');
const winCombination = [
    [0, 1, 2],
    [0, 3, 6],
    [6, 7, 8],
    [2, 5, 8],
    [1, 4, 7],
    [3, 4, 5],
    [0, 4, 8],
    [2, 4, 6],
]

let player1 = [];
let player2 = [];

let score = {
    player1: 0,
    player2: 0,
}
let flag = true;
for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', () => {
        if (flag === true) {
            addCellsplayer1(i);
        }
        else {
            addCellsplayer2(i);
        }
        checkWinner();
    })
}
function addCellsplayer1(i) {
    cell[i].innerHTML = "X";
    player1.push(i);
    flag = false;
}
function addCellsplayer2(i) {
    cell[i].innerHTML = "O";
    player2.push(i);
    flag = true;
}
function checkWinner() {
    winCombination.find((item) => {
        if (item.filter((i) => player1.includes(i)).length === 3) {
            alert('Player1');
            score.player1++;
            drawscore();
            clearField();
            return item;
        }else if(item.filter((i) => player2.includes(i)).length === 3){
            score.player2++;
            drawscore();
            clearField();
            alert('player 2');
        }
        return 
    })
}
function drawscore(){
    player1Scorespan.innerHTML="player 1 :"+score.player1;
    player2Scorespan.innerHTML="player 2 :"+score.player2;
}
drawscore();
function clearField(){
    for(let i=0;i<cell.length;i++){
        cell[i].innerHTML="";
    }
    player1=[];
    player2=[];
    flag=true;
}
restrartbtn.addEventListener('click',()=>{
    clearField();
})