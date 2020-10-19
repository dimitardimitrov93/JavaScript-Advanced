function solve() {
    const inputElements = document.getElementsByTagName('input');
    const [nameInputElement, ageInputElement, kindInputElement, currentOwnerInputElement] = inputElements;
    const addButtonElement = document.querySelector('#container button');
    const ulElement = document.querySelector('#adoption ul');
    const adoptedSectionUlElement = document.querySelector('#adopted ul');
    
    addButtonElement.addEventListener('click', function (e) {
        e.preventDefault();
        if ((!Array.from(inputElements).some(x => x.value === '')) && (!isNaN(Number(ageInputElement.value)))) {

            const listElement = document.createElement('li');
            const paragraphElement = document.createElement('p');
            const spanElement = document.createElement('span');
            const contactButtonElement = document.createElement('button');
            const nameStrongElement = document.createElement('strong');
            const ageStrongElement = document.createElement('strong');
            const kindStrongElement = document.createElement('strong');

            nameStrongElement.innerHTML = nameInputElement.value;
            ageStrongElement.innerHTML = ageInputElement.value;
            kindStrongElement.innerHTML = kindInputElement.value;

            paragraphElement.appendChild(nameStrongElement);
            paragraphElement.innerHTML += ' is a ';
            paragraphElement.appendChild(ageStrongElement);
            paragraphElement.innerHTML += ' year old ';
            paragraphElement.appendChild(kindStrongElement);

            spanElement.textContent = `Owner: ${currentOwnerInputElement.value}`;
            contactButtonElement.innerHTML = 'Contact with owner';

            listElement.appendChild(paragraphElement);
            listElement.appendChild(spanElement);
            listElement.appendChild(contactButtonElement);
            ulElement.appendChild(listElement);
            // clearInputs
            Array.from(inputElements).map(x => x.value = '');
        }
    });

    ulElement.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON' && e.target.innerHTML !== 'Yes! I take it!') {
            const divElement = document.createElement('div');
            const inputElement = document.createElement('input');
            const buttonElement = document.createElement('button');

            inputElement.placeholder = 'Enter your names';
            buttonElement.innerHTML = 'Yes! I take it!';

            divElement.appendChild(inputElement);
            divElement.appendChild(buttonElement);
            e.target.parentElement.appendChild(divElement);
            e.target.parentElement.removeChild(e.target);
        } else if (e.target.tagName === 'BUTTON' && e.target.innerHTML === 'Yes! I take it!') {
            if (e.target.previousSibling.value !== '') {
                const spanElement = document.createElement('span');
                const buttonElement = document.createElement('button');
                const currentListElement = e.target.parentElement.parentElement;
                const currentDivElement = e.target.parentElement;
                const currentSpanElement = currentDivElement.previousSibling;
        
                spanElement.innerHTML = `New Owner: ${e.target.previousSibling.value}`;
                buttonElement.innerHTML = 'Checked';

                currentListElement.removeChild(currentSpanElement);
                currentListElement.removeChild(currentDivElement);
                currentListElement.appendChild(spanElement);
                currentListElement.appendChild(buttonElement);

                adoptedSectionUlElement.appendChild(currentListElement);
            }
        } 
    });
    
    adoptedSectionUlElement.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON') {
            adoptedSectionUlElement.removeChild(e.target.parentElement);
        }
    });
}

