function solve(arrInput) {
    let arr = arrInput.slice();
    let equalNeighbourPairs = 0;

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {
            let currentColElement = arr[i][j];

            if ((arr[i + 1] !== undefined) && (currentColElement === arr[i + 1][j])) {
                equalNeighbourPairs++;
            }

            if ((arr[i][j + 1] !== undefined) && (currentColElement === arr[i][j + 1])) {
                equalNeighbourPairs++;
            }
        }
    }

    console.log(equalNeighbourPairs);
}

solve([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);

// solve([
//     [2, 2, 5, 7, 4],
//     [4, 0, 5, 3, 4],
//     [2, 5, 5, 4, 2]
// ])