function solve(arrInput) {

    let arr = arrInput.slice();
    let rotationsAmount = Number(arr.pop());

    for (let i = 0; i < (rotationsAmount % arr.length); i++) {
        arr.unshift(arr.pop());
    }

    console.log(arr.join(' '));
}

solve([
    '1',
    '3',
    '3'
]);