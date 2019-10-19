class TicTacToe {
    constructor() {
        this.playersymbol = "x";

        this.table = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];

        this.winner = "";

    }

    getCurrentPlayerSymbol() {
        return this.playersymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.table[rowIndex][columnIndex] === null) { //fill the cell with the symbol of the current player
            this.table[rowIndex][columnIndex] = this.playersymbol;
            if (this.playersymbol === "x") { //changing the symbol for the next player
                this.playersymbol = "o";
            } else {
                this.playersymbol = "x";
            }
        }

    }

    isFinished() {
        if (this.getWinner() || this.isDraw()) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        //Check horizontal
        for (let i = 0; i < 3; i++) {

            let x1 = this.getFieldValue(i, 0);
            let x2 = this.getFieldValue(i, 1);
            let x3 = this.getFieldValue(i, 2);

            if (x1 === x2 && x2 === x3) {
                return x1;
            }

            //Check vertical
            let y1 = this.getFieldValue(0, i);
            let y2 = this.getFieldValue(1, i);
            let y3 = this.getFieldValue(2, i);

            if (y1 === y2 && y2 === y3) {
                return y1;
            }
        }

        //Check diagonals
        let diog1 = this.getFieldValue(0, 0);
        let diog2 = this.getFieldValue(1, 1);
        let diog3 = this.getFieldValue(2, 2);
        if (diog1 === diog2 && diog2 === diog3) {
            return diog1;
        }
        let diog4 = this.getFieldValue(0, 2);
        let diog5 = this.getFieldValue(1, 1);
        let diog6 = this.getFieldValue(2, 0);
        if (diog4 === diog5 && diog5 === diog6) {
            return diog4;
        }
        return null;
    }



    noMoreTurns() {
        return !this.table.some(row => row.includes(null)); //determine whether an array contains a particular element by returning true or false depending on this.    
    }

    isDraw() {
        if (this.noMoreTurns() === true && this.getWinner() === null) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.table[rowIndex][colIndex]

    }
}

module.exports = TicTacToe;