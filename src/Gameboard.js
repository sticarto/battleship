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

    receiveAttack(x, y) {

    }

    // I hate that I have to figure out what to do lol.
    // IDK if this should be included or nah.
    // Odin Project, tell me what to do!!!
    placeShip(x, y) {

    }

    reportShipStatus() {

    }
}

export {Gameboard}