function solve(firstInput, secondInput, thirdInput) {

    let firstOperand = Number(firstInput);
    let secondOperand = Number(secondInput);
    let operator = thirdInput;

    let result = 0;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        case '%':
            result = firstOperand % secondOperand;
            break;
        case '**':
            result = firstOperand ** secondOperand;
            break;
    }

    console.log(result);
}

solve(5, 6, '+');
solve(3, 5.5, '*');