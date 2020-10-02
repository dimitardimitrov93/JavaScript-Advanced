function addItem() {
    const input = document.getElementById('newItemText');
    const ulElement = document.getElementById('items');
    const newLiElement = document.createElement('li');

    if (input.value && input.value !== '') {
        newLiElement.textContent = input.value;
        ulElement.appendChild(newLiElement);
        input.value = '';
    }
}