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


describe('My Gameboard', () => {
    let myGameboard = new Gameboard();
    
    // Just checking that the 2D array is real
    test('Gameboard is created with 10x10 spaces', () => {
        expect(myGameboard.board[9][9]).toBe("");
    })

    test('Has placed a horizontal ship of length 3 at (1,1)', () => {
        myGameboard.placeShip(1,1);
        expect(myGameboard.board[1][1]).toBeInstanceOf(Ship);
        expect(myGameboard.board[1][2]).toBeInstanceOf(Ship);
        expect(myGameboard.board[1][3]).toBeInstanceOf(Ship);
    })

    test('Has placed a vertical ship of length 3 at (1,1)', () => {
        myGameboard.placeShip(1,1, true);
        expect(myGameboard.board[1][1]).toBeInstanceOf(Ship);
        expect(myGameboard.board[2][1]).toBeInstanceOf(Ship);
        expect(myGameboard.board[3][1]).toBeInstanceOf(Ship);
    })

    test('Does not allow placed ship of length 3 to go out of bounds', () => {
        myGameboard.placeShip(1,8);
        expect(myGameboard.board[1][10]).toBeUndefined();
        expect(myGameboard.board[1][7]).toBeInstanceOf(Ship);
        
        myGameboard.placeShip(8,1);
        expect(myGameboard.board[7][1]).toBeInstanceOf(Ship);
        expect(myGameboard.board[10]).toBeUndefined(); // Better way to test row doesn't exist?

    })

    describe('receiveAttack', () => {
        test('attack missed and left a mark', () => {
            myGameboard.receiveAttack(2, 4);
            expect(myGameboard.board[2][4]).toMatch('X');
        })

        test('attack hit a ship and updated hits on object', () => {
            myGameboard.placeShip(2,4);
            myGameboard.receiveAttack(2,4);

            expect(myGameboard.board[2][4].hits).toBe(1);
            expect(myGameboard.board[2][5].hits).toBe(1);

        })

        // test('attack hit a ship and left an O mark', () => {
        //     myGameboard.placeShip(2,4);
        //     myGameboard.receiveAttack(2,4);

        //     expect(myGameboard.board[2][4]).toMatch('O');
        // })

    })

})