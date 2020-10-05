function notify(message) {
    const divNotificationElement = document.getElementById('notification');
    divNotificationElement.textContent = message;
    divNotificationElement.style.display = 'block';
    setTimeout(clearNotification, 2000);

    function clearNotification() {
        divNotificationElement.style.display = 'none';
    }
}