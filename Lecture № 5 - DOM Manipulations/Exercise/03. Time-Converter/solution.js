function attachEventsListeners() {

    const daysInputElement = document.getElementById('days');
    const daysButtonElement = document.getElementById('daysBtn');
    daysButtonElement.addEventListener('click', timeConverter);

    const hoursInputElement = document.getElementById('hours');
    const hoursButtonElement = document.getElementById('hoursBtn');
    hoursButtonElement.addEventListener('click', timeConverter);

    const minutesInputElement = document.getElementById('minutes');
    const minutesButtonElement = document.getElementById('minutesBtn');
    minutesButtonElement.addEventListener('click', timeConverter);

    const secondsInputElement = document.getElementById('seconds');
    const secondsButtonElement = document.getElementById('secondsBtn');
    secondsButtonElement.addEventListener('click', timeConverter);

    function timeConverter(e) {
        let inputType = e.target.previousElementSibling.id;
        let inputData = Number(e.target.previousElementSibling.value);

        switch (inputType) {
            case 'days':
                hoursInputElement.value = inputData * 24;
                minutesInputElement.value = inputData * 1440;
                secondsInputElement.value = inputData * 86400;
                break;
            case 'hours':
                daysInputElement.value = inputData / 24;
                minutesInputElement.value = inputData * 60;
                secondsInputElement.value = inputData * 3600;
                break;
            case 'minutes':
                daysInputElement.value = inputData / 1440;
                hoursInputElement.value = inputData / 60;
                secondsInputElement.value = inputData * 60;
                break;
            case 'seconds':
                daysInputElement.value = inputData / 86400;
                hoursInputElement.value = inputData / 3600;
                minutesInputElement.value = inputData / 60;
                break;
        }
    }
}