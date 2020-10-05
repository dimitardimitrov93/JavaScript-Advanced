function create(words) {

   const divContentElement = document.getElementById('content');

   words.forEach(word => {
      const divParent = document.createElement('div');
      const paragraphElement = document.createElement('p');
      paragraphElement.textContent = word;
      paragraphElement.style.display = 'none';
      divParent.appendChild(paragraphElement);
      divParent.addEventListener('click', function(e) {
         e.target.firstChild.style.display = 'block';
      });
      divContentElement.appendChild(divParent);
   });
}