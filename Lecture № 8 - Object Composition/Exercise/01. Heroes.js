function solve() {
    
    return {
        mage: function(name) {
            return {
                name,
                health: 100,
                mana: 100,

                cast: function (spell) {
                    this.mana -= 1;
                    console.log(`${name} cast ${spell}`);
                },
            };
        },

        fighter: function (name) {
            return {
                name,
                health: 100,
                stamina: 100,

                fight: function () {
                    this.stamina -= 1;
                    console.log(`${name} slashes at the foe!`);
                },
            };
        }
    };
}

// Test functionality:
let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);