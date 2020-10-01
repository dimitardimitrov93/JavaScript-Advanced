function solve() {

    const newName = document.getElementsByTagName('input')[0];
    const listItems = document.getElementsByTagName('li');
    const button = document.querySelector('button');
    const olElement = document.querySelector('ol');
    olElement.setAttribute('type', 'A');

    let isNameImplemented = false;
    
    button.addEventListener('click', addNewName);
    
    function addNewName() {

        for (const listItem of listItems) {
            
            if (listItem.innerHTML && newName.value) {
    
                if (listItem.innerHTML[0].toUpperCase() === newName.value[0].toUpperCase()) {
                    let firstLetter = newName.value[0].toUpperCase();
                    let restOfLetters = newName.value.slice(1).toLowerCase();
                    let nameToAdd = `${firstLetter}${restOfLetters}`;
                    listItem.innerHTML += `, ${nameToAdd}`;
                    isNameImplemented = true;
                }
            }
        }
    
        if (!isNameImplemented) {

            const initialLetterNumber = Number(newName.value[0].charCodeAt()) - 64;
            let firstLetter = newName.value[0].toUpperCase();
            let restOfLetters = newName.value.slice(1).toLowerCase();
            let nameToAdd = `${firstLetter}${restOfLetters}`;

            if (document.querySelector(`ol li:nth-child(${initialLetterNumber})`).innerHTML) {
                document.querySelector(`ol li:nth-child(${initialLetterNumber})`).innerHTML += `, ${nameToAdd}`;
            } else {
                document.querySelector(`ol li:nth-child(${initialLetterNumber})`).innerHTML = nameToAdd;
            }
        }

        newName.value = '';
    }
}