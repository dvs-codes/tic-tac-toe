
let board = [ , , , , , , , , ,]

let boxes = []

let mark = "";

let gameBoard = document.querySelector('.game-board')
let resetButton = document.querySelector('.reset')
let playerX = document.querySelector('.player-x')
let playerO = document.querySelector('.player-o')
let message = document.querySelector('.message')
let declaration = document.querySelector('.declaration')

playerX.addEventListener('click', () => {
    mark = 'x'
    message.innerText = 'Player X turn'
})

playerO.addEventListener('click', () => {
    mark = 'o'
    message.innerText = 'Player O turn'
})

resetButton.addEventListener('click', erase)

for (i=0; i<9 ;i++) {
   let gridBox = document.createElement('button')
   gridBox.classList.add(`${i}`)
   gameBoard.appendChild(gridBox)
   boxes.push(gridBox)

   gridBox.addEventListener(('click'), marker)

   function marker(event) {
    resetButton.innerText = 'restart'
    if(!mark) {
        alert('please select the player')
    } else if (event.target.innerText) {
        alert('box is already marked')
    } else if (declaration.innerText) {
        alert('game is over boy')
    }
    else {
        event.target.innerText = mark
        round(mark,event.target.className)

        //flips the marker
        if( mark==='x') { 
            mark ='o'
            message.innerText = `Player O's turn`
        } 
        else {
            mark ='x'
            message.innerText = `Player X's turn`
        }
    }
}
}

function erase() {
    board = [ , , , , , , , , ,]
    for(i=0; i<9; i++) {
        boxes[i].innerText = ''
        mark = ''
    }
    message.innerText = "Please select a player before starting !"
    declaration.innerText = ''
}

function round(item, position) {
   board.splice(position,1,item)
   console.log(board)
   if (
       //rows
       board[0] === item && board[1] === item && board[2] === item || 
       board[3] === item && board[4] === item && board[5] === item ||
       board[6] === item && board[7] === item && board[8] === item ||

       //columns
       board[0] === item && board[3] === item && board[6] === item ||
       board[1] === item && board[4] === item && board[7] === item ||
       board[2] === item && board[5] === item && board[8] === item ||

       //diag
       board[0] === item && board[4] === item && board[8] === item ||
       board[2] === item && board[4] === item && board[6] === item  
   ) {
       declaration.innerHTML = `${item} Wins, press Restart button`
       resetButton.innerText = "Restart"

   }
}