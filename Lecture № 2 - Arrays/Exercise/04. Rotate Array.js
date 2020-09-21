function solve(arrInput) {

    let arr = arrInput.slice();
    let rotationsAmount = Number(arr.pop());

    while (rotationsAmount > arr.length) {
        rotationsAmount -= arr.length;
    }

    for (let i = 0; i < rotationsAmount; i++) {
        arr.unshift(arr.pop());
    }

    console.log(arr.join(' '));
}

solve([
    '1',
    '3',
    '3'
]);