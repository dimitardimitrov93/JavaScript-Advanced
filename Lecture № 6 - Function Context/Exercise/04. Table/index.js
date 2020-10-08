function solve(){
   const tbodyElement = document.getElementsByTagName('tbody')[0];
   let lastClickedElement;

   tbodyElement.addEventListener('click', function (e) {
      if (e.target.tagName === 'TD') {
         if (e.target.parentElement.style.backgroundColor === '') {

            if (lastClickedElement) {
               lastClickedElement.parentElement.style.backgroundColor = '';
            }

            e.target.parentElement.style.backgroundColor = '#413f5e';
            lastClickedElement = e.target;
         } else {
            e.target.parentElement.style.backgroundColor = '';
            lastClickedElement = undefined;
         }
      }
   });
}
