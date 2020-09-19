function solve(inputN, inputK) {
    let n = Number(inputN);
    let k = Number(inputK);

    let resultArr = [1];

    for (let i = 1; i < n; i++) {

        let currentSum = 0;
        let startIndex = Math.max(0, (resultArr.length - k));
        let endIndex = resultArr.length;

        for (let j = startIndex; j < endIndex; j++) {
            currentSum += resultArr[j];
        }

        resultArr.push(currentSum);
    }

    console.log(resultArr.join(' '));
}

solve(6, 3);
solve(8, 2);