(function() {

    var game = {

        board : [ , , , , , , , , ,],
        boxes : [],
        mark :"",
        init: function() {
            this.cacheDom();
            this.bindEvents()
            this.addBoxes()
        },
        cacheDom: function() {
            this.gameBoard = document.querySelector('.game-board')
            this.resetButton = document.querySelector('.reset')
            this.playerX = document.querySelector('.player-x')
            this.playerO = document.querySelector('.player-o')
            this.message = document.querySelector('.message')
            this.declaration = document.querySelector('.declaration')
        },
        bindEvents: function() {

            this.playerX.addEventListener('click', () => {
                this.mark = 'x'
                this.message.innerText = 'Player X turn'
            })
            this.playerO.addEventListener('click', () => {
                this.mark = 'o'
                this.message.innerText = 'Player O turn'
            })
            this.resetButton.addEventListener('click', this.erase)
        },
        erase: function() {
            this.board = [ , , , , , , , , ,]
            for(i=0; i<9; i++) {
                this.boxes[i].innerText = ''
                this.mark = ''
            }
            this.message.innerText = "Please select a player before starting !"
            this.declaration.innerText = ''
            console.log('hi')
        },
        addBoxes: function() {
            for (i=0; i<9 ;i++) {
                let gridBox = document.createElement('button')
                gridBox.classList.add(`${i}`)
                this.gameBoard.appendChild(gridBox)
                this.boxes.push(gridBox)
             
                gridBox.addEventListener(('click'), marker.bind(game))
             
                function marker(event) {
                 this.resetButton.innerText = 'restart'
                 if(!this.mark) {
                     alert('please select the player')
                 } else if (event.target.innerText) {
                     alert('box is already marked')
                 } else if (this.declaration.innerText) {
                     alert('game is over boy')
                 }
                 else {
                     event.target.innerText = this.mark
                     this.round(this.mark,event.target.className)
             
                     //flips the marker
                     if( this.mark==='x') { 
                         this.mark ='o'
                         this.message.innerText = `Player O's turn`
                     } 
                     else {
                         this.mark ='x'
                         this.message.innerText = `Player X's turn`
                     }
                 }
             }
             }
        },
        round: function(item, position) {
            this.board.splice(position,1,item)
            console.log(this.board)
            if (
                //rows
                this.board[0] === item && this.board[1] === item && this.board[2] === item || 
                this.board[3] === item && this.board[4] === item && this.board[5] === item ||
                this.board[6] === item && this.board[7] === item && this.board[8] === item ||
            
                //columns
                this.board[0] === item && this.board[3] === item && this.board[6] === item ||
                this.board[1] === item && this.board[4] === item && this.board[7] === item ||
                this.board[2] === item && this.board[5] === item && this.board[8] === item ||
            
                //diag
                this.board[0] === item && this.board[4] === item && this.board[8] === item ||
                this.board[2] === item && this.board[4] === item && this.board[6] === item  
            ) {
                this.erase()
                this.declaration.innerHTML = `${item} Wins, press Restart button`
                this.resetButton.innerText = "Restart"
            }
        }
    };

    game.init();
})()













