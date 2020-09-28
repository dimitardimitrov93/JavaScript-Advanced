function solve(arrInput) {

    let arr = arrInput.slice();
    let fruitsQuantityObj = {};
    let juiceBottlesObj = {};

    for (let i = 0; i < arr.length; i++) {
        const tokens = arr[i].split(' => ');
        const juice = tokens[0];
        const currentQuantity = Number(tokens[1]);

        if (fruitsQuantityObj[juice]) {
            let oldQuantity = fruitsQuantityObj[juice];
            fruitsQuantityObj[juice] = oldQuantity + currentQuantity;
        } else {
            fruitsQuantityObj[juice] = currentQuantity;
        }

        if (fruitsQuantityObj[juice] >= 1000) {
            let producedBottles = Math.trunc(fruitsQuantityObj[juice] / 1000);
            let quantityLeft = fruitsQuantityObj[juice] % 1000;
            fruitsQuantityObj[juice] = quantityLeft;

            let oldbottles = juiceBottlesObj[juice] || 0;
            juiceBottlesObj[juice] = oldbottles + producedBottles;
        }
    }

    for (const juice in juiceBottlesObj) {
        console.log(`${juice} => ${juiceBottlesObj[juice]}`);
    }
}

solve([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);