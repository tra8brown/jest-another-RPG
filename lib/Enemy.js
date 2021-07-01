//10.3.4. 
const Potion = require('./Potion');

//imported 10.5.4.
const Character = require('./Character');

//10.5.5. updated with code belwo
// function Enemy(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//     this.potion = new Potion();

//     this.health = Math.floor(Math.random() * 10 + 85);
//     this.strength = Math.floor(Math.random() * 5 + 5);
//     this.agility = Math.floor(Math.random() * 5 + 5);
// }

//10.3.6. //10.5.4. deleted
// Enemy.prototype.getHealth = function() {
//     return `The ${this.name}'s health is now ${this.health}!`;
// };

// Enemy.prototype.isAlive = function() {
//     if (this.health === 0) {
//         return false;
//     }
//     return true;
// };

// Enemy.prototype.getAttackValue = function() {
//     const min = this.strength - 5;
//     const max = this.strength + 5;

//     return Math.floor(Math.random() * (max - min) + min);
// };

// Enemy.prototype.reduceHealth = function(health) {
//     this.health -= health;

//     if (this.health < 0) {
//         this.health = 0;
//     }
// };

//10.5.4. inherit prototype methods from Chracter here: //10.5.5 updated with code below
// Enemy.prototype = Object.create(Character.prototype);

//10.3.6. 'gets description of enemy weapon //10.5.5. updated with code belwo
// Enemy.prototype.getDescription = function() {
//     return `A ${this.name} holding a ${this.weapon} has appeared!`;
// };

class Enemy extends Character {
    constructor(name, weapon) {
        super(name);

        this.weapon = weapon;
        this.potion = new Potion();
    }

    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    }
}

module.exports = Enemy;