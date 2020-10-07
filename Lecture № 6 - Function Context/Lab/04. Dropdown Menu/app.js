function solve() {
    const chooseStyleButtonEl = document.getElementById('dropdown');
    const dropDownUlEl = document.getElementById('dropdown-ul');
    const boxDivEl = document.getElementById('box');

    chooseStyleButtonEl.addEventListener('click', function () {
        if (!dropDownUlEl.attributes.style || boxDivEl.style.backgroundColor === 'black') {
            dropDownUlEl.style.display = 'block';
        } else {
            dropDownUlEl.style.display = 'none';
            boxDivEl.style.backgroundColor = 'black';
            boxDivEl.style.color = 'white';
        }
    });

    dropDownUlEl.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            boxDivEl.style.backgroundColor = e.target.textContent;
            boxDivEl.style.color = 'black';
        }
    });
}