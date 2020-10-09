function getArticleGenerator(articles) {
            
    const contentDivElement = document.getElementById('content');

    function displayArticle() {
        if (articles.length >= 1) {
            const newArticle = document.createElement('article');
            newArticle.innerHTML = articles.shift();
            contentDivElement.appendChild(newArticle);
        }
    }

    return displayArticle;
}