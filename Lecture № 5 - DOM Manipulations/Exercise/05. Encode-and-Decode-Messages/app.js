function encodeAndDecodeMessages() {
    const inputTextAreaElement = document.querySelector('main div:first-of-type > textarea');
    const outputTextAreaElement = document.querySelector('main div:last-of-type > textarea');
    
    const encodeButton = document.querySelector('main div:first-of-type > button');
    const decodeButton = document.querySelector('main div:last-of-type > button');

    encodeButton.addEventListener('click', encodeMessage);
    decodeButton.addEventListener('click', decodeMessage);

    function encodeMessage() {
        let inputMessage = inputTextAreaElement.value;
        let tempMessage = inputMessage.split('').map(x => x.charCodeAt());
        let encodedMessage = tempMessage.map(x => String.fromCharCode(x + 1)).join('');

        inputTextAreaElement.value = '';
        outputTextAreaElement.value = encodedMessage;
    }

    function decodeMessage() {
        let encodedMessage = outputTextAreaElement.value;
        let tempMessage = encodedMessage.split('').map(x => x.charCodeAt());
        let decodedMessage = tempMessage.map(x => String.fromCharCode(x - 1)).join('');

        outputTextAreaElement.value = decodedMessage;
    }
}