function solve(arrInput) {
    let arr = arrInput.slice();
    let productsInfo = {};

    for (let i = 0; i < arr.length; i++) {
        const tokens = arr[i].split(' | ');
        const currentTown = tokens[0];
        const product = tokens[1];
        const currentTownPrice = Number(tokens[2]);

        if (productsInfo[product]) {
            productsInfo[product][currentTown] = currentTownPrice;
        } else {
            productsInfo[product] = {
                [currentTown]: currentTownPrice,
            }
        }
    }

    for (const product in productsInfo) {

        let lowestPrice = Number.MAX_SAFE_INTEGER;
        let lowestPriceTown = '';

        for (const town in productsInfo[product]) {
            if (productsInfo[product][town] < lowestPrice) {
                lowestPrice = productsInfo[product][town];
                lowestPriceTown = town;
            }
        }

        productsInfo[product]['lowestPriceTown'] = lowestPriceTown;
        productsInfo[product]['lowestPrice'] = lowestPrice;
    }

    let productsInfoArr = Array.from(Object.entries(productsInfo));
    productsInfoArr.forEach(product => {
        console.log(`${product[0]} -> ${product[1].lowestPrice} (${product[1].lowestPriceTown})`);
    });
}

solve([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);

// solve([
//     'Sofia City | Audi | 100000',
//     'Sofia City | BMW | 100000',
//     'Sofia City | Mitsubishi | 10000',
//     'Sofia City | Mercedes | 10000',
//     'Sofia City | NoOffenseToCarLovers | 0',
//     'Mexico City | Audi | 1000',
//     'Mexico City | BMW | 99999',
//     'New York City | Mitsubishi | 10000',
//     'New York City | Mitsubishi | 1000',
//     'Mexico City | Audi | 100000',
//     'Washington City | Mercedes | 1000',
// ]);