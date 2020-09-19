function solve(arrInput) {
    
    let arr = arrInput.slice();
    let evenNumbersArr = [];

    for (const index in arr) {
        if (index % 2 === 0) {
            evenNumbersArr.push(arr[index]);
        }
    }

    console.log(evenNumbersArr.join(' '));
}

solve(['20', '30', '40'])