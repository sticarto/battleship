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
        expect(myGameboard.getCell(9,9)).toBe("");
    })

    test('Has placed a horizontal ship of length 3 at (1,1)', () => {
        myGameboard.placeShip(1,1);
        expect(myGameboard.getCell(1, 1)).toBeInstanceOf(Ship);
        expect(myGameboard.getCell(2, 1)).toBeInstanceOf(Ship);
        expect(myGameboard.getCell(3, 1)).toBeInstanceOf(Ship);
    })

    test('Has placed a vertical ship of length 3 at (1,1)', () => {
        myGameboard.placeShip(1,1, true);
        expect(myGameboard.getCell(1,1)).toBeInstanceOf(Ship);
        expect(myGameboard.getCell(1,2)).toBeInstanceOf(Ship);
        expect(myGameboard.getCell(1,3)).toBeInstanceOf(Ship);
    })

    test('Does not allow placed ship of length 3 to go out of bounds', () => {
        myGameboard.placeShip(1,8, true);
        expect(myGameboard.getCell(1, 10)).toBeUndefined();
        expect(myGameboard.getCell(1, 7)).toBeInstanceOf(Ship);

        
        myGameboard.placeShip(8,1);
        expect(myGameboard.getCell(7,1)).toBeInstanceOf(Ship);
        expect(myGameboard.getCell(10, 1)).toBeUndefined();

    })

    describe('receiveAttack', () => {
        test('attack missed and left a mark', () => {
            myGameboard.receiveAttack(2, 4);
            expect(myGameboard.getCell(2, 4)).toMatch('X');
        })

        test('attack hit a ship, updated hits on object, and left a mark', () => {
            myGameboard.placeShip(2,4);
            myGameboard.receiveAttack(2,4);

            expect(myGameboard.getCell(2,4)).toMatch("O");
            expect(myGameboard.getCell(3,4).hits).toBe(1);

        })

    })

    test('report all ships are active', ()=> {
        myGameboard.placeShip(1,1);
        myGameboard.placeShip(4,2,true);

        expect(myGameboard.isEveryShipActive()).toBeTruthy()
    })
    
    test('report all ships are destroyed', () => {
        myGameboard.placeShip(1,1);
        myGameboard.receiveAttack(1,1);
        myGameboard.receiveAttack(2,1);
        myGameboard.receiveAttack(3,1);

        expect(myGameboard.isEveryShipActive()).toBeFalsy()
    })

})