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
        this.ships = [];

    }

    // This is technically better for the battle ship grid since y = row, not x
    // and these helper functions will save me from sanity... according to google.
    getCell(x, y) {
        if (x >= this.board.length || y >= this.board.length) return;

        return this.board[y][x]; // y = row
    }

    setCell(x, y, value) {
        this.board[y][x] = value;
    }

    placeShip(x, y, isVertical = false) {
        const ship = new Ship(3);
        const threshold = this.board.length - ship.length; // Keeps ships from placing out of bounds
        const coordinateY = y > threshold ? threshold : y;
        const coordinateX = x > threshold ? threshold : x;
        

        if (isVertical) {
            for (let i = 0; i < ship.length ; i++) {
                this.setCell(x, coordinateY + i, ship);
            }
        } else {
            for (let i = 0; i < ship.length ; i++) {
                this.setCell(coordinateX + i, y, ship);
            }
        }

        this.ships.push(ship);
    }
    
    receiveAttack(x, y) {
        target = this.getCell(x, y)
        if (target == "") {
            this.setCell(x, y, "X")
        }
        else if (target instanceof Ship) {
            target.hit();
            this.setCell(x, y, "O");
        }
    }

    isEveryShipActive () {
        return this.ships.every(ship => ship.isSunk() === false)
    }
}

export {Gameboard}