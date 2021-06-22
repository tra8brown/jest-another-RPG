const randomNumber = require('../lib/random.js');

test('gets random number between 1 and 10', () => {
    expect(randomNumber()).toBeGreaterThanOrEqual(1);
    expect(randomNumber()).toBeLessThanOrEqual(10);
});

//10.1.6
// function Potion(name) {
//     this.name = name;

//     if (this.name === 'health') {
//         this.value = Math.floor(Math.random() * 10 + 30);
//     } else {
//         this.value = Math.floor(Math.random() * 5 + 7);
//     }
// }

// 10.1.7. refactoring above potion function after test
function Potion(name) {
    this.types = ['strength', 'agility', 'health'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    if (this.name === 'health') {
        this.value = Math.floor(Math.random() * 10 + 30);
    } else {
        this.value = Math.floor(Math.random() * 5 + 7);
    }
}

module.exports = Potion;