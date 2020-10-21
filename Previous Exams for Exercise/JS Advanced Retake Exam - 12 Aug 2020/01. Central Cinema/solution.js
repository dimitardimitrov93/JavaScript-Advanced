function solve() {
    const nameInputElement = document.querySelector('#container > input');
    const hallInputElement = document.querySelector('#container input:nth-child(2)');
    const priceInputElement = document.querySelector('#container input:nth-child(3)');
    const submitButtonElement = document.querySelector('#container button');
    const moviesOnScreenUlElement = document.querySelector('#movies ul');
    const archiveUlElement = document.querySelector('#archive ul');
    const clearButtonElement = document.querySelector('#archive > button');

    submitButtonElement.addEventListener('click', function (e) {
        e.preventDefault();

        if (nameInputElement.value !== '' && hallInputElement.value !== '' && priceInputElement.value !== '' && !isNaN(priceInputElement.value)) {

            const newListElement = document.createElement('li');
            const nameSpanElement = document.createElement('span');
            const hallStrongElement = document.createElement('strong');
            const priceStrongElement = document.createElement('strong');
            const divWrapperElement = document.createElement('div');
            const ticketsInputElement = document.createElement('input');
            const archiveButtonElement = document.createElement('button');

            nameSpanElement.innerHTML = nameInputElement.value;
            hallStrongElement.innerHTML = `Hall: ${hallInputElement.value}`;
            priceStrongElement.innerHTML = Number(priceInputElement.value).toFixed(2);
            ticketsInputElement.placeholder = 'Tickets Sold';
            archiveButtonElement.innerHTML = 'Archive';

            divWrapperElement.appendChild(priceStrongElement);
            divWrapperElement.appendChild(ticketsInputElement);
            divWrapperElement.appendChild(archiveButtonElement);

            newListElement.appendChild(nameSpanElement);
            newListElement.appendChild(hallStrongElement);
            newListElement.appendChild(divWrapperElement);

            moviesOnScreenUlElement.appendChild(newListElement);

            nameInputElement.value = '';
            hallInputElement.value = '';
            priceInputElement.value = '';
        }
    });

    moviesOnScreenUlElement.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {

            const ticketsCountInputElement = e.target.previousSibling;

            if (ticketsCountInputElement.value !== '' && !isNaN(ticketsCountInputElement.value)) {
                const parentListElement = e.target.parentElement.parentElement;
                const movieNameSpanElement = parentListElement.querySelector('span');
                const ticketPriceInputElement = ticketsCountInputElement.previousSibling;

                const newListElement = document.createElement('li');
                const deleteButtonElement = document.createElement('button');
                const totalAmountStrongElement = document.createElement('strong');

                deleteButtonElement.innerHTML = 'Delete';
                totalAmountStrongElement.innerHTML = `Total amount: ${(Number(ticketsCountInputElement.value) * Number(ticketPriceInputElement.innerHTML)).toFixed(2)}`;

                newListElement.appendChild(movieNameSpanElement);
                newListElement.appendChild(totalAmountStrongElement);
                newListElement.appendChild(deleteButtonElement);

                moviesOnScreenUlElement.removeChild(parentListElement);
                archiveUlElement.appendChild(newListElement);
            }
        }
    });

    archiveUlElement.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            archiveUlElement.removeChild(e.target.parentElement);
        }
    });

    clearButtonElement.addEventListener('click', function (e) {
        archiveUlElement.innerHTML = '';
    });
}