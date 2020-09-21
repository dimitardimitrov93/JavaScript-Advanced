function solve(arrInput) {

    let arr = arrInput.slice();
    let stepN = Number(arr.pop());

    for (let i = 0; i < arr.length; i+=stepN) {
        console.log(arr[i]);
    }
}

solve([
    '5',
    '20',
    '31',
    '4',
    '20',
    '2'
]);