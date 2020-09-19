function solve(arrInput) {
    let arr = arrInput.slice();
    let oddNumbersArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (i % 2 !== 0) {
            let oddNumber = arr[i];
            let doubledOddNumber = oddNumber * 2;
            oddNumbersArr.push(doubledOddNumber);
        }
    }

    console.log(oddNumbersArr.reverse().join(' '));
}

solve([10, 15, 20, 25]);