function solve(arrInput) {
    
    let arr = arrInput.slice();
    let smallestNumbers = arr
    .sort((a, b) => a - b)
    .slice(0, 2)
    .join(' ');

    console.log(smallestNumbers);
}

solve([30, 15, 50, 5]);