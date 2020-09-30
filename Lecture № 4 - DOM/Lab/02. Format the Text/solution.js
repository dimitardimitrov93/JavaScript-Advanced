function solve() {
  let inputParagraph = document.getElementById('input').innerHTML;
  let parentElement = document.getElementById('output');

  if (inputParagraph === '') return;
  let sentencesArr = inputParagraph.split('.');

  while (sentencesArr.length >= 3) {

    let currentParagraph = document.createElement('p');
    currentParagraph.innerHTML += `${sentencesArr.splice(0, 2)}.`;
    parentElement.appendChild(currentParagraph);
  }

  let currentParagraph = document.createElement('p');
  currentParagraph.innerHTML += `${sentencesArr.join('.')}`;
  parentElement.appendChild(currentParagraph);
}