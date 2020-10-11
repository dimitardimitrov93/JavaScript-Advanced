function solve(arr, strArg) {

    let resultArr = [];
    let currentSmallestNumber = Number.MAX_SAFE_INTEGER;
    let currentBiggestNumber = Number.MAX_SAFE_INTEGER;

    if (strArg === 'asc') {
        while (arr.length > 0) {
            currentSmallestNumber = Math.min(...arr);
            resultArr.push(currentSmallestNumber);
            arr.splice(arr.indexOf(currentSmallestNumber), 1);
        }

    } else if (strArg === 'desc') {
        while (arr.length > 0) {
            currentBiggestNumber = Math.max(...arr);
            resultArr.push(currentBiggestNumber);
            arr.splice(arr.indexOf(currentBiggestNumber), 1);
        }
    }

    return resultArr;
}

solve([14, 7, 17, 6, 8], 'asc');
solve([14, 7, 17, 6, 8], 'desc');