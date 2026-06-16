import { Ship } from "./src/Ship";
import { Gameboard } from "./src/Gameboard";

describe ('My ship', () => {
    
    test('has been hit', () => {
        let myShip = new Ship(3, 0, false);
        myShip.hit();
        expect(myShip.hits).toBe(1);
    })
    
    test('has sunk', () => {
        let myShip = new Ship(3, 3, false);
        expect(myShip.isSunk()).toBeTruthy();
    })

})

// Just checking that the 2D array is real
test('Gameboard is created with 10x10 spaces', () => {
    let myGameboard = new Gameboard();
    expect(myGameboard.board[9][9]).toBe("");
})