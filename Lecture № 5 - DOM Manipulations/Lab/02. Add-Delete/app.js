function addItem() {
    const input = document.getElementById('newItemText');
    const ulElement = document.getElementById('items');
    const newLiElement = document.createElement('li');

    if (input.value && input.value !== '') {
        const deleteButton = document.createElement('a');

        deleteButton.setAttribute('href', '#');
        deleteButton.innerHTML = '[Delete]';
        deleteButton.addEventListener('click', function(event) {
            ulElement.removeChild(event.target.parentElement);
        });
        newLiElement.textContent = input.value;
        newLiElement.appendChild(deleteButton);
        ulElement.appendChild(newLiElement);
        input.value = '';
    }
}