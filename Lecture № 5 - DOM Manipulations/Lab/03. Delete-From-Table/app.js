function deleteByEmail() {
    const mailToDelete = document.querySelector('label > input');
    const allLiElements = document.querySelectorAll('table tbody tr td:nth-child(2)');
    const result = document.getElementById('result');
    
    let throwError = true;

    for (const liElement of allLiElements) {
        if (liElement.innerHTML === mailToDelete.value) {
            document.querySelector('tbody').removeChild(liElement.parentElement);
            throwError = false;
        }
    }

    if (throwError) {
        result.innerHTML = 'Not found.';
    }
}