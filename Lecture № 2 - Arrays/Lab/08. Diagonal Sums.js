function solve(arrInput) {
    let arr = arrInput.slice();
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < arr.length; i++) {
        mainDiagonalSum += arr[i][i];
        secondaryDiagonalSum += arr[i][(arr.length - 1) - i];
    }

    console.log(`${mainDiagonalSum} ${secondaryDiagonalSum}`);
}

solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);