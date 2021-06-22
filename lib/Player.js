//10.2.5 importing Potion() constructor
const Potion = require('../lib/Potion');

//10.2.4. added after Player.test.js test fail.
function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    //10.2.5: added after above import 
    this.inventory = [new Potion('health'), new Potion()];
}

module.exports = Player;