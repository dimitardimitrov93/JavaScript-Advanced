function focus() {
    const parentDiv = document.querySelector('body > div');
    let focusedElement;
    parentDiv.addEventListener('focus', function(event) {
        if (event.target && event.target.tagName === 'INPUT') {
            focusedElement = event.target;
            event.target.parentElement.classList.add('focused');
        }
    }, true);

    parentDiv.addEventListener('blur', function(event) {
        if (event.target && event.target.tagName === 'INPUT') {
            focusedElement.parentElement.classList.remove('focused');
        }
    }, true);
}