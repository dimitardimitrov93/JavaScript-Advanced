function solve(arrInput) {
    let arr = arrInput.slice();
    let biggestNumber = Number.MIN_SAFE_INTEGER;

    for (const row of arr) {
        let currentRowBiggestNumber = Math.max(...row);

        if (currentRowBiggestNumber > biggestNumber) {
            biggestNumber = currentRowBiggestNumber;
        }
    }

    return biggestNumber;
}

solve([
    [20, 50, 10],
    [8, 33, 145]
]);