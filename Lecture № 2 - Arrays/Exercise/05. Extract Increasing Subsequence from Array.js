function solve(arrInput) {

    let arr = arrInput.slice();
    let resultArr = [];

    arr.reduce((accumulator, currentValue) => {
        if (currentValue >= accumulator) {
            resultArr.push(currentValue);
            accumulator = currentValue;
        }
        
        return accumulator;
    }, Number.MIN_SAFE_INTEGER);

    console.log(resultArr.join('\n'));
}

solve([
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);

solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
     );