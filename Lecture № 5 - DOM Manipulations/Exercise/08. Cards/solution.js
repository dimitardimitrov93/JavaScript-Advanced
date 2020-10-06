function solve() {
   const firstPlayerDivElement = document.getElementById('player1Div');
   const firstPlayerSpanElement = document.querySelector('#result span:first-of-type');

   const secondPlayerDivElement = document.getElementById('player2Div');
   const secondPlayerSpanElement = document.querySelector('#result span:last-of-type');

   const historyDivElement = document.getElementById('history');

   let firstPlayerCard;
   let firstPlayerCardValue = 0;

   let secondPlayerCard;
   let secondPlayerCardValue = 0;

   firstPlayerDivElement.addEventListener('click', function (e) {
      if (e.target.tagName === 'IMG') {
         e.target.src = 'images/whiteCard.jpg';
         firstPlayerSpanElement.innerHTML = e.target.name;
         firstPlayerCard = e.target;
         firstPlayerCardValue = Number(e.target.name);
      }
   });

   secondPlayerDivElement.addEventListener('click', function (e) {
      if (e.target.tagName === 'IMG') {
         e.target.src = 'images/whiteCard.jpg';
         secondPlayerSpanElement.innerHTML = e.target.name;
         secondPlayerCard = e.target;
         secondPlayerCardValue = Number(e.target.name)
      }
   });

   document.addEventListener('click', function () {
      if (firstPlayerCardValue && secondPlayerCardValue) {
         if (firstPlayerCardValue > secondPlayerCardValue) {
            firstPlayerCard.style.border = '2px solid green';
            secondPlayerCard.style.border = '2px solid red';
         } else {
            firstPlayerCard.style.border = '2px solid red';
            secondPlayerCard.style.border = '2px solid green';
         }

         historyDivElement.innerHTML += `[${firstPlayerCardValue} vs ${secondPlayerCardValue}] `;

         firstPlayerCardValue = undefined;
         secondPlayerCardValue = undefined;
      }
   });
}