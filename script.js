(function() {
    var game = {
        board:  [, , , , , , , , ,],

        x: 'x',
        item: 'o',
        lastTurn :'',
        init: function() {
            this.cacheDom()
            this.bindEvents()
            this.addBox()
        },
        cacheDom: function() {
            this.gameBoard = document.querySelector('.game-board')   
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
        bindEvents: function() {
            for (i=0; i<9 ;i++) {
                let gridBox = document.createElement('button')
                gridBox.classList.add(`${i}`)
                this.gameBoard.appendChild(gridBox)
            
                gridBox.addEventListener(('click'), () => {
                    //first turn is always x
                    let indexOfBox = gridBox.className; 
            
                    if (this.lastTurn ==='' || this.lastTurn === this.item) {
                        this.round(this.x,indexOfBox)  
                        gridBox.innerText = this.board[indexOfBox]
                        this.lastTurn = this.x  
                    } else {
                        this.round(this.item,indexOfBox)  
                        gridBox.innerText = this.board[indexOfBox]
                        this.lastTurn = this.item     
                    }
                })
            
            }
        
        },
        render: function() {

        },
        addBox: function() {},

    }
    game.init();

})()




