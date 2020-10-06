function lockedProfile() {
    const buttonElements = document.getElementsByTagName('button');
    for (const buttonElement of buttonElements) {
        buttonElement.addEventListener('click', function (e) {
            const parentDiv = e.target.parentElement;
            const unlockRadioInput = parentDiv.children[4];
            const moreInfoElement = parentDiv.children[9];

            if (unlockRadioInput.checked) {
                if (e.target.textContent === 'Show more') {
                    moreInfoElement.style.display = 'inline-block';
                    e.target.textContent = 'Hide it';
                } else if (e.target.textContent === 'Hide it') {
                    moreInfoElement.style.display = 'none';
                    e.target.textContent = 'Show more';
                }
            }
        });
    }
}