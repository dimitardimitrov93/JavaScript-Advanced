function solve(arrInput) {

    let arr = arrInput.slice();
    let resultArr = [];
    let currentValue = 1;

    for (let i = 0; i < arr.length; i++) {
        let currentCommand = arr[i];

        if (currentCommand === 'add') {
            resultArr.push(currentValue);
        } else {
            resultArr.pop();
        }

        currentValue++;
    }

    if (resultArr.length > 0) {
        console.log(resultArr.join('\n'));
    } else {
        console.log('Empty');
    }
}

solve([
    'add',
    'add',
    'remove',
    'add',
    'add'
]);