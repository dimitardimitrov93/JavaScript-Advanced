function solve(arrInput) {

    let matrix = arrInput.slice();
    let columnsArr = [];

    for (let i = 0; i < matrix.length; i++) {
        let tempArr = [];
        
        for (let j = 0; j < matrix.length; j++) {
            tempArr.push(matrix[j][i])
        }

        columnsArr.push(tempArr);
    }

    let flattenedColArr = columnsArr.map(x => x.reduce((acc, currentValue) => acc + currentValue, 0));
    let isWithMagicalCols = flattenedColArr.every(x => x === flattenedColArr[0]);
    
    let flattenedRowArr = matrix.map(x => x.reduce((acc, currentValue) => acc + currentValue, 0));
    let isWithMagicalRows = flattenedRowArr.every(x => x === flattenedRowArr[0]);

    if (isWithMagicalRows && isWithMagicalCols) {
        console.log(true);
    } else {
        console.log(false);
    }
}

// solve([
//     [1, 1],
// ]);

solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);