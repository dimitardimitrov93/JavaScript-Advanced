function growingWord() {

  const fontColours = {
    blue: "green",
    green: "red",
    red: "blue",
  }

  const growingWordParagraph = document.querySelector('#exercise p');

  if (!growingWordParagraph.hasAttribute('style')) {
    growingWordParagraph.style.fontSize = '2px';
    growingWordParagraph.style.color = 'blue';
  } else {
    let currentFontSize = Number(growingWordParagraph.style.fontSize.split('px')[0]);
    let currentColor = growingWordParagraph.style.color;

    growingWordParagraph.style.color = fontColours[currentColor];
    growingWordParagraph.style.fontSize = `${currentFontSize * 2}px`;
  }
}