function solve() {
   const searchInput = document.getElementById('searchField');
   const searchButton = document.getElementById('searchBtn');

   const tableDataCellElements = document.getElementsByTagName('td');
   const tableRowElements = document.querySelectorAll('tbody tr');

   searchButton.addEventListener('click', getSearchResults);

   function getSearchResults() {

      for (const tableRowElement of tableRowElements) {
         tableRowElement.classList.remove('select');
      }

      for (const tableDataCellElement of tableDataCellElements) {

         if (tableDataCellElement.textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
            tableDataCellElement.parentElement.classList.add('select');
         }
      }
   }
}