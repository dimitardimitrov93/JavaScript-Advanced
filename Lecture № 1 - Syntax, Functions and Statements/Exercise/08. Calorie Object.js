function solve(arrInput) {
    
    let arr = arrInput.slice();
    let productsObj = {};

    for (let i = 0; i < arr.length; i+=2) {
        let product = arr[i];
        let calories = Number(arr[i + 1]);
        productsObj[product] = calories;
    }

    console.log(productsObj);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);