function attachGradientEvents() {
    const gradientDivElement = document.getElementById('gradient');
    const resultElement = document.getElementById('result');

    gradientDivElement.addEventListener('mousemove', getGradientPercentage);
    gradientDivElement.addEventListener('mouseout', removeGradientPercentage);

    function getGradientPercentage(event) {
        let percentage = event.offsetX / (event.target.clientWidth - 1);
        percentage = Math.trunc(percentage * 100);
        resultElement.textContent = `${percentage}%`;
    }

    function removeGradientPercentage() {
        resultElement.textContent = '';
    }
}