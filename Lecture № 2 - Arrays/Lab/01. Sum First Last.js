function solve(arrInput) {
    let arr = arrInput.slice();

    let firstNumber = Number(arr[0]);
    let lastNumber = Number(arr[arr.length - 1]);

    let sum = firstNumber + lastNumber;

    return sum;
}

solve(['5']);