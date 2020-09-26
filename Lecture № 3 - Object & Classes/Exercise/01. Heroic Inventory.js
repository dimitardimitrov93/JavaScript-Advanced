function solve(arrInput) {
    
    let arr = arrInput.slice();
    let heroesInventoryArr = [];

    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = Number(level);
            this.items = items;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        const tokens = arr[i].split(' / ');
        const heroName = tokens[0];
        const level = Number(tokens[1]);
        const items = tokens[2] ? tokens[2].split(', ') : [];

        let currentHero = new Hero(heroName, level, items);
        heroesInventoryArr.push(currentHero);
    }

    console.log(JSON.stringify(heroesInventoryArr));
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);