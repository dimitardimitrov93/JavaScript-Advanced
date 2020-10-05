function solve() {
  const inputTextAreaElement = document.querySelector('#exercise > textarea');
  const outputTextAreaElement = document.querySelector('#exercise textarea:last-of-type');
  const generateButton = document.querySelector('#exercise > button');
  const buyButton = document.querySelector('#exercise button:last-of-type');
  
  generateButton.addEventListener('click', generateItems);
  buyButton.addEventListener('click', buyItems);

  function generateItems() {
    const dataArr = JSON.parse(inputTextAreaElement.value);
    const tbodyElement = document.getElementsByTagName('tbody')[0];

    for (const item of dataArr) {
      const tableRowElement = document.createElement('tr');

      const imgTdElement = document.createElement('td');
      const imgElement = document.createElement('img');
      imgElement.src = item['img'];
      imgTdElement.appendChild(imgElement);

      const nameTdElement = document.createElement('td');
      const nameParagraph = document.createElement('p');
      nameParagraph.textContent = item['name'];
      nameTdElement.appendChild(nameParagraph);

      const priceTdElement = document.createElement('td');
      const priceParagraph = document.createElement('p');
      priceParagraph.textContent = item['price'];
      priceTdElement.appendChild(priceParagraph);

      const decorationFactorTdElement = document.createElement('td');
      const decorationFactorParagraph = document.createElement('p');
      decorationFactorParagraph.textContent = item['decFactor'];
      decorationFactorTdElement.appendChild(decorationFactorParagraph);

      const markTableCellElement = document.createElement('td');
      const markInputElement = document.createElement('input');
      markInputElement.type = 'checkbox';
      markTableCellElement.appendChild(markInputElement);

      tableRowElement.appendChild(imgTdElement);
      tableRowElement.appendChild(nameTdElement);
      tableRowElement.appendChild(priceTdElement);
      tableRowElement.appendChild(decorationFactorTdElement);
      tableRowElement.appendChild(markTableCellElement);

      tbodyElement.appendChild(tableRowElement);
    }
  }

  function buyItems() {
    let checkedItems = [];
    let totalDecoration = 0;
    let totalPrice = 0;
    const allItems = document.querySelectorAll('tbody tr');

    for (const item of allItems) {
      if (item.children[4].children[0].checked) {
        checkedItems.push(item.children[1].children[0].textContent);
        totalPrice += Number(item.children[2].children[0].textContent);
        totalDecoration += Number(item.children[3].children[0].textContent);
      }
    }

    let averageDecoration = totalDecoration / checkedItems.length;

    outputTextAreaElement.value = `Bought furniture: ${checkedItems.join(', ')}`;
    outputTextAreaElement.value += `\nTotal price: ${totalPrice.toFixed(2)}`;
    outputTextAreaElement.value += `\nAverage decoration factor: ${averageDecoration}`
  }
}