function solve(firstInput, secondInput, thirdInput) {
    let firstNumber = Number(firstInput);
    let secondNumber = Number(secondInput);
    let thirdNumber = Number(thirdInput);

    let largestNumber = Math.max(firstNumber, secondNumber, thirdNumber);

    console.log(`The largest number is ${largestNumber}.`);
}

solve(5, -3, 16);
solve(-3, -5, -22.5);