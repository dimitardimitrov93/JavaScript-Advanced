function createArticle() {
	
	const inputTitle = document.getElementById('createTitle');
	const inputText = document.getElementById('createContent');

	const articlesSection = document.getElementById('articles');

	const newArticle = document.createElement('article');
	const articleHeading = document.createElement('h3');
	const articleContent = document.createElement('p');

	articleHeading.innerHTML = inputTitle.value;
	articleContent.innerHTML = inputText.value;

	if (articleHeading.innerHTML === '' || articleContent.innerHTML === '') return;

	newArticle.appendChild(articleHeading);
	newArticle.appendChild(articleContent);
	articlesSection.appendChild(newArticle);

	inputTitle.value = '';
	inputText.value = '';
}