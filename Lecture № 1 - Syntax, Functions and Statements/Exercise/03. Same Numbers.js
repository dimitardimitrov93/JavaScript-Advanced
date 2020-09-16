function solve(inputInteger) {

    let arr = inputInteger.toString().split('');
    let sum = arr.reduce((a, b) => Number(a) + Number(b), 0);
    let firstDigit = arr[0];
    let flag = true;

    for (let i = 0; i< arr.length; i++) {
        let digit = arr[i];

        if (firstDigit !== digit) {
            flag = false;
            break;
        }
    }

    console.log(flag);
    console.log(sum);
}

solve(2222222);
solve(1234);