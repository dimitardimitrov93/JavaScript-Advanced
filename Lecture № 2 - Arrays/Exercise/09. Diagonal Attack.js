function solve(arrInput) {
    let arr = arrInput.slice();
    let matrix = arr.map(x => x.split(' ').map(el => Number(el)));

    let mainDiagonalSum = 0;
    let mainDiagonalArr = [];

    let secondDiagonalSum = 0;
    let secondDiagonalArr = [];

    let indexCounter = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainDiagonalSum += matrix[i][i];
        mainDiagonalArr.push(matrix[i][i]);
    }

    for (let j = (matrix.length - 1); j >= 0; j--) {
        secondDiagonalSum += matrix[j][indexCounter];
        secondDiagonalArr.push(matrix[j][indexCounter]);
        indexCounter++;
    }

    if (mainDiagonalSum === secondDiagonalSum) {
        indexCounter = 0;
        matrix = matrix.map(x => x.map(el => el = mainDiagonalSum));

        for (let i = 0; i < matrix.length; i++) {
            matrix[i][i] = mainDiagonalArr.shift();
        }

        for (let j = (matrix.length - 1); j >= 0; j--) {
            matrix[j][indexCounter] = secondDiagonalArr.shift();
            indexCounter++;
        }

        matrix.forEach(element => {
            console.log(element.join(' '));
        });
    } else {
        arr.forEach(element => {
            console.log(element);
        });
    }
}

solve([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);

solve([
    '1 1 1',
    '1 1 1',
    '1 1 0'
]);