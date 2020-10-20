function solve() {
    
    const taskInputElement = document.getElementById('task');
    const descriptionInputElement = document.getElementById('description');
    const dateInputElement = document.getElementById('date');
    const addButtonElement = document.getElementById('add');
    const openedTasksDivElement = document.querySelector('section:nth-child(2) > div:nth-child(2)');
    const inProgressTasksDivElement = document.getElementById('in-progress');
    const completedTasksDivElement = document.querySelector('section:nth-child(4) > div:nth-child(2)');

    addButtonElement.addEventListener('click', function (e) {
       if ((taskInputElement.value !== '') && (descriptionInputElement.value !== '') && (dateInputElement.value !== '')) {
            e.preventDefault();

            const newArticleElement = document.createElement('article');
            const h3Element = document.createElement('h3');
            const descriptionParagraphElement = document.createElement('p');
            const dueDateParagraphElement = document.createElement('p');
            const buttonHolderDivElement = document.createElement('div');
            const startButtonElement = document.createElement('button');
            const deleteButtonElement = document.createElement('button');

            buttonHolderDivElement.classList.add('flex');
            startButtonElement.classList.add('green');
            deleteButtonElement.classList.add('red');

            h3Element.innerHTML = taskInputElement.value;
            descriptionParagraphElement.innerHTML = `Description: ${descriptionInputElement.value}`;
            dueDateParagraphElement.innerHTML = `Due Date: ${dateInputElement.value}`;
            startButtonElement.innerHTML = 'Start';
            deleteButtonElement.innerHTML = 'Delete';

            buttonHolderDivElement.appendChild(startButtonElement);
            buttonHolderDivElement.appendChild(deleteButtonElement);

            newArticleElement.appendChild(h3Element);
            newArticleElement.appendChild(descriptionParagraphElement);
            newArticleElement.appendChild(dueDateParagraphElement);
            newArticleElement.appendChild(buttonHolderDivElement);

            openedTasksDivElement.appendChild(newArticleElement);

            taskInputElement.value = '';
            descriptionInputElement.value = '';
            dateInputElement.value = '';
       }
    });

    openedTasksDivElement.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            const currentArticleElement = e.target.parentElement.parentElement;

            if (e.target.innerHTML === 'Start') {

                e.target.classList.remove('green');
                e.target.classList.add('red');
                e.target.innerHTML = 'Delete';

                e.target.nextSibling.classList.remove('red');
                e.target.nextSibling.classList.add('orange');
                e.target.nextSibling.innerHTML = 'Finish';

                inProgressTasksDivElement.appendChild(currentArticleElement);
            } else {
                openedTasksDivElement.removeChild(currentArticleElement);
            }
        }
    });

    inProgressTasksDivElement.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            const currentArticleElement = e.target.parentElement.parentElement;

            if (e.target.innerHTML === 'Finish') {
                currentArticleElement.removeChild(e.target.parentElement);
                completedTasksDivElement.appendChild(currentArticleElement);
            } else {
                inProgressTasksDivElement.removeChild(currentArticleElement);
            }
        }
    });
}