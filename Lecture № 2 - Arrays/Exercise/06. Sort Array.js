function solve(arrInput) {

    let arr = arrInput.slice();
    let sortedArr = arr.sort((a, b) => {

        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }
    });

    console.log(sortedArr.join('\n'));
}

solve([
    'Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
]);