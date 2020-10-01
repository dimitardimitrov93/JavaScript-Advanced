function solve() {
   const sendButton = document.getElementById('send');
   sendButton.addEventListener('click', sendMessage);

   function sendMessage() {
      const newMessageInput = document.getElementById('chat_input');
      const newMessageText = newMessageInput.value;
      const newMessageHolderElement = document.createElement('div');
      const chatMessagesHolderElement = document.getElementById('chat_messages');
      newMessageHolderElement.classList.add('message');
      newMessageHolderElement.classList.add('my-message');
      newMessageHolderElement.innerHTML = newMessageText;

      chatMessagesHolderElement.appendChild(newMessageHolderElement);
      newMessageInput.value = '';
   }
}

