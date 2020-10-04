function stopwatch() {

    const timeData = document.getElementById('time');
    const startButton = document.getElementById('startBtn');
    const stopButton = document.getElementById('stopBtn');

    let minutes;
    let seconds;

    let intervalID;

    startButton.addEventListener('click', function () {

        minutes = 0;
        seconds = 0;
        timeData.textContent = '00:00';
        startButton.disabled = true;
        stopButton.disabled = false;
        intervalID = setInterval(startWatch, 1000);
    });

    stopButton.addEventListener('click', function () {
        startButton.disabled = false;
        stopButton.disabled = true;
        clearInterval(intervalID);
    });

    function startWatch() {

        seconds++;
        
        if (seconds >= 60) { 
            seconds = 0;
            minutes++;
        }

        if (seconds < 10) {
            secondsToDisplay = `0${seconds}`;
        } else {
            secondsToDisplay = seconds;
        }

        if (minutes < 10) {
            minutesToDisplay = `0${minutes}`;
        } else {
            minutesToDisplay = minutes;
        }

        timeData.textContent = `${minutesToDisplay}:${secondsToDisplay}`;
    }
}