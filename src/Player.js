import { Gameboard } from "./Gameboard"

class Player {
    #gameboard;
    constructor (isComputer = false) {
        this.isComputer = isComputer;
        this.#gameboard = new Gameboard();

    }

    get board () {
        return this.#gameboard;
    }
}

export {Player}