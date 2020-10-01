function toggle() {

    const moreTextDiv = document.querySelector('#accordion div:last-child');
    const button = document.querySelector('#accordion .button');

    if (moreTextDiv.style.display === 'none') {
        moreTextDiv.style.display = 'block';
        button.innerHTML = 'Less'
    } else {
        moreTextDiv.style.display = 'none';
        button.innerHTML = 'More'
    }
}