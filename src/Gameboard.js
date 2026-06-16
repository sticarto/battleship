import { Ship } from "./Ship";

class Gameboard {

    constructor(square_board_size = 10) {
        this.board = []
        for (let row = 0; row < square_board_size; row++) {
            this.board[row] = [];
            for (let col = 0; col < square_board_size; col++) {
                this.board[row][col] = "";
            }
        }

    }

    placeShip(x, y, isVertical = false) {
        const ship = new Ship(3);
        const threshold = this.board.length - ship.length; // Keeps ships from placing out of bounds
        const coordinateY = y > threshold ? threshold : y;
        const coordinateX = x > threshold ? threshold : x;
        

        if (isVertical) {
            for (let i = 0; i < ship.length ; i++) {
                this.board[coordinateX + i][coordinateY] = ship;
            }
        } else {
            for (let i = 0; i < ship.length ; i++) {
                this.board[coordinateX][coordinateY + i] = ship;
            }
        }
    }
    
    receiveAttack(x, y) {
        target = this.board[x][y]
        if (target == "") {
            this.board[x][y] = "X";
        }
        if (target instanceof Ship) {
            target.hit();
            // this.board[x][y] = "O";
        }
    }

    reportShipStatus() {

    }
}

export {Gameboard}