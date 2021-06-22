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