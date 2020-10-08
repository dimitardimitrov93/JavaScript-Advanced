function getFibonator() {
    let fibonacciArr = [0, 1, 0];
    let currentFibonacci = 0;
    let previousFibonacci = 0;

    function fibonacciFinder() {

        if (fibonacciArr[2] === 0) {
            currentFibonacci = fibonacciArr[0] + fibonacciArr[1];
            fibonacciArr[2] = currentFibonacci;
        } else if (fibonacciArr[0] === 0 && fibonacciArr[2] === 1) {
            fibonacciArr[0] = 1;
        } else {

            if (fibonacciArr.length === 3) {
                fibonacciArr.pop();
            }

            previousFibonacci = fibonacciArr[1];
            currentFibonacci = fibonacciArr[0] + fibonacciArr[1];

            fibonacciArr[0] = previousFibonacci;
            fibonacciArr[1] = currentFibonacci;
        }

        return currentFibonacci;
    }
    
    return fibonacciFinder;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13

