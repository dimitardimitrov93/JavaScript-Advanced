function solve(arrInput) {

    let arr = arrInput.slice();
    let delimeter = arr.pop();

    console.log(arr.join(delimeter));
}

solve([
    'How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!',
    '_'
]);

// solve([
//     'One', 
//     'Two', 
//     'Three', 
//     'Four', 
//     'Five', 
//     '-'
// ]);