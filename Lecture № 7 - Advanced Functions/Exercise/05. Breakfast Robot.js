function solution(str) {

    let robotStorage = {
        carbohydrate: 0,
        protein: 0,
        flavour: 0,
        fat: 0,
    };
    
    return function (str) {
        let tokens = str.split(' ');
        let order = tokens[0];
        let quantity = Number(tokens[2]);
        let reqCarbElements;
        let reqFlavourElements;
        let reqFatElements;
        let reqProteinElements;

        if (order === 'restock') {
            let microelement = tokens[1];
            
            if (!robotStorage[microelement]) {
                robotStorage[microelement] = quantity;
            } else {
                robotStorage[microelement] += quantity;
            }

            return 'Success';

        } else if (order === 'prepare') {
            let recipe = tokens[1];

            if (recipe === 'apple') {
                reqCarbElements = quantity;
                reqFlavourElements = quantity * 2;

                if (robotStorage.carbohydrate < reqCarbElements) {
                    return `Error: not enough carbohydrate in stock`;
                }
                
                if (robotStorage.flavour < reqFlavourElements) {
                    return `Error: not enough flavour in stock`;
                }

                robotStorage.flavour -= reqFlavourElements;
                robotStorage.carbohydrate -= reqCarbElements;

                return 'Success';

            } else if (recipe === 'lemonade') {
                reqCarbElements = quantity * 10;
                reqFlavourElements = quantity * 20;

                if (robotStorage.carbohydrate < reqCarbElements) {
                    return `Error: not enough carbohydrate in stock`;
                }
                
                if (robotStorage.flavour < reqFlavourElements) {
                    return `Error: not enough flavour in stock`;
                }

                robotStorage.flavour -= reqFlavourElements;
                robotStorage.carbohydrate -= reqCarbElements;

                return 'Success';

            } else if (recipe === 'burger') {
                reqCarbElements = quantity * 5;
                reqFatElements = quantity * 7;
                reqFlavourElements = quantity * 3;

                if (robotStorage.carbohydrate < reqCarbElements) {
                    return `Error: not enough carbohydrate in stock`;
                }
                
                if (robotStorage.flavour < reqFlavourElements) {
                    return `Error: not enough flavour in stock`;
                }
                
                if (robotStorage.fat < reqFatElements) {
                    return `Error: not enough fat in stock`;
                }

                robotStorage.fat -= reqFatElements;
                robotStorage.flavour -= reqFlavourElements;
                robotStorage.carbohydrate -= reqCarbElements;

                return 'Success';

            } else if (recipe === 'eggs') {
                reqProteinElements = quantity * 5;
                reqFatElements = quantity;
                reqFlavourElements = quantity;

                if (robotStorage.protein < reqProteinElements) {
                    return `Error: not enough protein in stock`;
                }

                if (robotStorage.fat < reqFatElements) {
                    return `Error: not enough fat in stock`;
                }
                
                if (robotStorage.flavour < reqFlavourElements) {
                    return `Error: not enough flavour in stock`;
                }

                robotStorage.fat -= reqFatElements;
                robotStorage.flavour -= reqFlavourElements;
                robotStorage.protein -= reqProteinElements;

                return 'Success';

            } else if (recipe === 'turkey') {
                reqProteinElements = quantity * 10;
                reqCarbElements = quantity * 10;
                reqFatElements = quantity * 10;
                reqFlavourElements = quantity * 10;

                if (robotStorage.protein < reqProteinElements) {
                    return `Error: not enough protein in stock`;
                }

                if (robotStorage.carbohydrate < reqCarbElements) {
                    return `Error: not enough carbohydrate in stock`;
                }
                     
                if (robotStorage.fat < reqFatElements) {
                    return `Error: not enough fat in stock`;
                }

                if (robotStorage.flavour < reqFlavourElements) {
                    return `Error: not enough flavour in stock`;
                }

                robotStorage.flavour -= reqFlavourElements;
                robotStorage.fat -= reqFatElements;
                robotStorage.carbohydrate -= reqCarbElements;
                robotStorage.protein -= reqCarbElements;

                return 'Success';
            }
        } else if (order === 'report') {
            return `protein=${robotStorage.protein} carbohydrate=${robotStorage.carbohydrate} fat=${robotStorage.fat} flavour=${robotStorage.flavour}`; 
        }
    };
}

let manager = solution();
console.log(manager('restock protein 100'));
console.log(manager('restock carbohydrate 100'));
console.log(manager('restock fat 100'));
console.log(manager('restock flavour 100'));
console.log(manager('report'));
console.log(manager('prepare eggs 2'));
console.log(manager('report'));
console.log(manager('prepare eggs 1'));
console.log(manager('report'));

// console.log(manager('restock carbohydrate 10'));
// console.log(manager('restock flavour 10'));
// console.log(manager('prepare apple 1'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare burger 1'));
// console.log(manager('report'));

// console.log(manager("restock flavour 50")); // Success
// console.log(manager("prepare lemonade 4"));
// console.log(manager('report'));

// console.log(manager('prepare turkey 1'));
// console.log(manager('restock protein 10'));
// console.log(manager('prepare turkey 1'));

// console.log(manager('restock carbohydrate 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock flavour 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('report'));

