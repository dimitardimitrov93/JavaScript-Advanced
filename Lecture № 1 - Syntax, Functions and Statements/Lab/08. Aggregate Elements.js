function solve(arrInput) {
    
    let arr = arrInput.slice();

    console.log(sumElements(arr));
    console.log(sumInverseValues(arr));
    console.log(concatElements(arr));

    function sumElements(arr) {
        let elementsSum = arr.reduce((a, b) => a + b, 0);
        return elementsSum;
    }

    function sumInverseValues(arr) {
        let inversedValuesSum = 0;

        for (let i = 0; i < arr.length; i++) {
            let currentNumber = arr[i];
            let inversedValue = 1 / currentNumber;
            inversedValuesSum += inversedValue;
        }

        return inversedValuesSum;
    }

    function concatElements(arr) {
        let convertedElementsArr = arr.map(x => x.toString());
        let concatenatedElements = convertedElementsArr.reduce((a, b) => a + b);
        return concatenatedElements;
    }
}

solve([2, 4, 8, 16]);