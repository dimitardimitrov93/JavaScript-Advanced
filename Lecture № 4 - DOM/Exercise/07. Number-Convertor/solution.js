function solve() {

    const selectMenu = document.getElementById('selectMenuTo');
    const binaryOption = document.createElement('option');
    const hexadecimalOption = document.createElement('option');
    const convertionButton = document.querySelector('#container button');
    const inputField = document.getElementById('input');
    const resultField = document.getElementById('result');
    let convertionType;
    let result;

    binaryOption.value = 'binary';
    binaryOption.innerHTML = 'Binary';

    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.innerHTML = 'Hexadecimal';

    selectMenu.appendChild(binaryOption);
    selectMenu.appendChild(hexadecimalOption);

    selectMenu.addEventListener('click', (event) => {
        if (event.target.value === 'binary') {
            convertionType = "binary";
            selectMenu.setAttribute('value', 'binary')
        } else if (event.target.value === 'hexadecimal') {
            convertionType = "hexadecimal";
            selectMenu.setAttribute('value', 'hexadecimal');
        }
    });

    convertionButton.addEventListener('click', convert);

    function convert() {
        const inputNumber = Number(inputField.value);
        inputField.value = '';
        selectMenu.value = '';

        if (selectMenu.value === 'binary') {
            convertToBinary(inputNumber);
        } else {
            convertToHexadecimal(inputNumber);
        }
    }

    function convertToBinary(inputNumber) {
        let tempBinary = '';

        for (let i = 0; inputNumber > 0; i++) {
            let currentRemainder = inputNumber % 2;
            inputNumber = Math.trunc(inputNumber / 2);
            tempBinary += currentRemainder.toString();
        }

        result = tempBinary.split('').reverse().join('');
        resultField.setAttribute('value', `${result}`);
    }

    function convertToHexadecimal(inputNumber) {
        let tempHexadecimal = '';

        for (let i = 0; inputNumber > 0; i++) {
            let currentRemainder = inputNumber % 16;
            
            switch (currentRemainder) {
                case 10:
                    currentRemainder = 'A';
                    break;
                case 11:
                    currentRemainder = 'B';
                    break;
                case 12:
                    currentRemainder = 'C';
                    break;
                case 13:
                    currentRemainder = 'D';
                    break;
                case 14:
                    currentRemainder = 'E';
                    break;
                case 15:
                    currentRemainder = 'F';
                    break;
            }

            console.log(currentRemainder);

            tempHexadecimal += currentRemainder.toString();
            inputNumber = Math.trunc(inputNumber / 16);
        }

        result = `0x${tempHexadecimal.split('').reverse().join('')}`;
        resultField.setAttribute('value', `${result}`);        
    }
}