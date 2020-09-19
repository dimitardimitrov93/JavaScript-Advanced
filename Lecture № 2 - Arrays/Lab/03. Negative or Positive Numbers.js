function solve(arrInput) {
    let arr = arrInput.slice();

    let resultArr = [];

    for (const number of arr) {
        if (number < 0) {
            resultArr.unshift(number);
        } else {
            resultArr.push(number);
        }
    }

    console.log(resultArr.join('\n'));
}

solve([7, -2, 8, 9]);