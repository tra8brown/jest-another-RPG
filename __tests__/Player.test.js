//10.2.5 added both after creating /lib/__mocks__Potion.js
const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');

//10.2.3 from 10.1.7lesson
const Player = require('../lib/Player');

//10.2.3 test, fail. npm run test
test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    //10.2.5 test to fail
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});

//10.2.6 test to fail. checking that player.getStats() returns an obj with 4 specific properties.//
test("gets player's stats as an object", () => {
    const player = new Player('Dave');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

//10.2.6 test to fail. call to player.inventory() should return an array & false//
test('gets inventory from player or returns false', () => {
    const player = new Player('Dave');

    expect(player.getInventory()).toEqual(expect.any(Array));

    player.inventory = [];

    expect(player.getInventory()).toEqual(false);
});

//10.3.3. to get info about players health
test("gets player's health value", () => {
    const player = new Player('Dave');

    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
});

//10.3.3. after adding player test
test('checks if player is alive or not', () => {
    const player = new Player('Dave');

    expect(player.isAlive()).toBeTruthy();

    player.health = 0;

    expect(player.isAlive()).toBeFalsy();
});