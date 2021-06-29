//10.2.5 importing Potion() constructor
const Potion = require('../lib/Potion');

//10.2.4. added after Player.test.js test fail.
// function Player(name = '') {
//     this.name = name;

//     this.health = Math.floor(Math.random() * 10 + 95);
//     this.strength = Math.floor(Math.random() * 5 + 7);
//     this.agility = Math.floor(Math.random() * 5 + 7);

//     //10.2.5: added after above import 
//     this.inventory = [new Potion('health'), new Potion()];
// }

//10.2.7.updated above Player() with this.
function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];

    //10.2.7 returns an object with various player properties
    // this.getStats = function() {
    //     return {
    //         potions: this.inventory.length,
    //         health: this.health,
    //         strength: this.strength,
    //         agility: this.agility
    //     };
    // };

    //10.2.7. returns the inventory array or false if empty
    // this.getInventory = function() {
    //     if (this.inventory.length) {
    //         return this.inventory;
    //     }
    //     return false;
    // };

    //updated 10.2.7. refactoring the 2 above code blocks using prototype syntax:
    Player.prototype.getStats = function() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    };

    Player.prototype.getInventory = function() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;

    }

    //10.3.3. after run failing test
    Player.prototype.getHealth = function() {
        return `${this.name}'s health is now ${this.health}!`;
    };

    //
    Player.prototype.isAlive = function() {
        if (this.health === 0) {
            return false;
        }
        return true;
    };

    //reduceHealth()method
    Player.prototype.reduceHealth = function(health) {
        this.health -= health;

        if (this.health < 0) {
            this.health = 0;
        }
    };

    //10.3.4 getAttackValue()
    Player.prototype.getAttackValue = function() {
        const min = this.strength - 5;
        const max = this.strength + 5;

        return Math.floor(Math.random() * (max - min) + min);
    };


    //10.3.4. add potion()
    Player.prototype.addPotion = function(potion) {
        this.inventory.push(potion);
    };

    //10.3.4 keeping track of potion inventory
    Player.prototype.usePotion = function(index) {
        const potion = this.getInventory().splice(index, 1)[0];

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;
            case 'strength':
                this.strength += potion.value;
                break;
        }
    };

    module.exports = Player;