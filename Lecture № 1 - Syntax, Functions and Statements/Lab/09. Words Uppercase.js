function solve(strInput) {

    let str = strInput;
    let regEx = /[\w]+/g;

    let matchesArr = str.match(regEx);
    let convertedWordsArr = matchesArr.map(x => x.toUpperCase());

    console.log(convertedWordsArr.join(', '));
}

solve('Hi, how are you?');
solve('Functions in JS can be nested, i.e. hold other functions');