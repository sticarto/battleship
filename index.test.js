import { Ship } from "./src/Ship";

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