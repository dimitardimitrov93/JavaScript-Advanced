function solve(arrInput) {

    let arr = arrInput.slice();
    let carsInfoObj = {};

    for (let i = 0; i < arr.length; i++) {
        const tokens = arr[i].split(' | ');
        const brand = tokens[0];
        const model = tokens[1];
        const currentQuantity = Number(tokens[2]);

        if (!carsInfoObj[brand]) {
            carsInfoObj[brand] = {};
            carsInfoObj[brand][model] = currentQuantity;
        } else {

            if (carsInfoObj[brand][model]) {
                let oldQuantity = carsInfoObj[brand][model];
                carsInfoObj[brand][model] = oldQuantity + currentQuantity;
            } else {
                carsInfoObj[brand][model] = currentQuantity;
            }
        }
    }

    for (const brand in carsInfoObj) {
        console.log(brand);
        Object.entries(carsInfoObj[brand]).map(x => console.log(`###${x[0]} -> ${x[1]}`));
    }
}

solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);