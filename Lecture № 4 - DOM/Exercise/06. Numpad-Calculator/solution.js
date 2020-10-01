function solve() {

    const buttons = document.querySelectorAll('.keys button');
    const expressionOutput = document.getElementById('expressionOutput');
    const resultOutput = document.getElementById('resultOutput');
    const clearButton = document.querySelector('button.clear');
    clearButton.addEventListener('click', clearData);

    let expression = [];
    let currentOperandString = '';
    let leftOperand;
    let rightOperand;
    let operator = '';
    let result;

    for (const button of buttons) {
        button.addEventListener('click', addInput);
    }

    function addInput(e) {

        const inputValue = e.currentTarget.value;

        if (inputValue !== '=') {
            if (isNaN(inputValue) && inputValue !== '.') {
                expressionOutput.innerHTML += ` ${inputValue} `;
            } else {
                expressionOutput.innerHTML += inputValue;
            }
        }

        if (!isNaN(inputValue) || inputValue === '.') {
            currentOperandString += inputValue;
        } else {

            if (inputValue !== '=') {
                operator = inputValue;
                expression.push(Number(currentOperandString));
                currentOperandString = '';
            } else {

                if (currentOperandString !== '') {
                    expression.push(Number(currentOperandString));
                }

                leftOperand = expression[0];
                rightOperand = expression[1];

                switch (operator) {
                    case '/':
                        result = leftOperand / rightOperand;
                        break;
                    case '*':
                        result = leftOperand * rightOperand;
                        break;
                    case '-':
                        result = leftOperand - rightOperand;
                        break;
                    case '+':
                        result = leftOperand + rightOperand;
                        break;
                }

                resultOutput.innerHTML = result;
            }
        }
    }

    function clearData() {
        expressionOutput.innerHTML = '';
        resultOutput.innerHTML = '';
    }
}