let board = [
     , , ,
     , , ,
     , , ,
]


let x = 'x'
let o = 'o'
let lastTurn =''

let gameBoard = document.querySelector('.game-board')

for (i=0; i<9 ;i++) {
    let gridBox = document.createElement('button')
    gridBox.classList.add(`${i}`)
    gameBoard.appendChild(gridBox)

    gridBox.addEventListener(('click'), () => {
        //first turn is always x
        let indexOfBox = gridBox.className; 

        if (lastTurn ==='' || lastTurn === o) {
            round(x,indexOfBox)  
            gridBox.innerText = board[indexOfBox]
            lastTurn = x  
        } else {
            round(o,indexOfBox)  
            gridBox.innerText = board[indexOfBox]
            lastTurn = o     
        }
    })

}



function round(item, position) {
    board.splice(position,1,item)
    console.log(board)
    if (
        //rows
        board[0] === o && board[1] === o && board[2] === o || 
        board[3] === o && board[4] === o && board[5] === o ||
        board[6] === o && board[7] === o && board[8] === o ||

        //columns
        board[0] === o && board[3] === o && board[6] === o ||
        board[1] === o && board[4] === o && board[7] === o ||
        board[2] === o && board[5] === o && board[8] === o ||

        //diag
        board[0] === o && board[4] === o && board[8] === o ||
        board[2] === o && board[4] === o && board[6] === o  
    ) {
        console.log(" o win")
    } else if (
        
        //rows
        board[0] === x && board[1] === x && board[2] === x || 
        board[3] === x && board[4] === x && board[5] === x ||
        board[6] === x && board[7] === x && board[8] === x ||
        //column
        board[0] === x && board[3] === x && board[6] === x ||
        board[1] === x && board[4] === x && board[7] === x ||
        board[2] === x && board[5] === x && board[8] === x ||
        //dia
        board[0] === x && board[4] === x && board[8] === x ||
        board[2] === x && board[4] === x && board[6] === x  
    ) {
        console.log( "x win")
    }
} 