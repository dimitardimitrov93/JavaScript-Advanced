function addItem() {
    let textInput = document.getElementById('newItemText');
    let valueInput = document.getElementById('newItemValue');

    const newOption = document.createElement('option');
    const menu = document.getElementById('menu');

    newOption.value = valueInput.value;
    newOption.innerHTML = textInput.value;

    textInput.value = '';
    valueInput.value = '';

    menu.appendChild(newOption);
}