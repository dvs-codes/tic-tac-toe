(function() {
    var game = {
        board:  [, , , , , , , , ,],

        x: 'x',
        o: 'o',
        lastTurn :'',
        init: function() {
            this.cacheDom()
            this.bindEvents()
        },
        cacheDom: function() {
            this.gameBoard = document.querySelector('.game-board')  
            this.resetButton = document.querySelector('.reset')  
        },
        round: function(item, position) {

            this.board.splice(position,1,item)
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
                alert(`${item} wins`)
            } 

        },

        addBox: function() {

            //first turn is always x
            let indexOfBox = gridBox.className; 
  
            if (this.lastTurn ==='' || this.lastTurn === this.o) {
                this.round(this.x,indexOfBox)  
                gridBox.innerText = this.board[indexOfBox]
                this.lastTurn = this.x  
            } else {
                this.round(this.o,indexOfBox)  
                gridBox.innerText = this.board[indexOfBox]
                this.lastTurn = this.o    
            }
        
        },

        bindEvents: function() {
            let gridBoxes =[]
            
            for (i=0; i<9 ;i++) {
                let gridBox = document.createElement('button')
                gridBox.classList.add(`${i}`)
                this.gameBoard.appendChild(gridBox)
                gridBoxes.push(gridBox)
            
                gridBox.addEventListener(('click'), this.addBox)
            
            }
            this.resetButton.addEventListener(('click'), ()=> {
                this.board = [, , , , , , , , ,]
                for (i=0; i<9; i++) {
                    gridBoxes[i].innerText = ''
                }
            })
            
        }

    }
    game.init();

})()