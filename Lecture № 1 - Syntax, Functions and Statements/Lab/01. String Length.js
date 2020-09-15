function solve(firstInput, secondInput, thirdInput) {

    let firstStringLength = firstInput.length;
    let secondStringLength = secondInput.length;
    let thirdStringLength = thirdInput.length;

    let sumOfLengths = firstStringLength + secondStringLength + thirdStringLength;
    let averageLength = sumOfLengths / 3;

    console.log(sumOfLengths);
    console.log(Math.floor(averageLength));
}

solve('chocolate', 'ice cream', 'cake');