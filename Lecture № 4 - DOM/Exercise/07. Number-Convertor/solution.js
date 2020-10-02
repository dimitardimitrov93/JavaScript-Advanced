function solve() {

    const selectMenu = document.getElementById('selectMenuTo');
    const binaryOption = document.createElement('option');
    const hexadecimalOption = document.createElement('option');
    const convertionButton = document.querySelector('#container button');
    const inputField = document.getElementById('input');
    const resultField = document.getElementById('result');

    let result;

    binaryOption.value = 'binary';
    binaryOption.innerHTML = 'Binary';

    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.innerHTML = 'Hexadecimal';

    selectMenu.appendChild(binaryOption);
    selectMenu.appendChild(hexadecimalOption);

    convertionButton.addEventListener('click', convert);

    function convert() {
        const inputNumber = Number(inputField.value);

        if (selectMenu.value === 'binary') {
            result = inputNumber.toString(2);
        } else {
            result = inputNumber.toString(16).toUpperCase(); 
        }

        resultField.setAttribute('value', `${result}`);  
    } 
}