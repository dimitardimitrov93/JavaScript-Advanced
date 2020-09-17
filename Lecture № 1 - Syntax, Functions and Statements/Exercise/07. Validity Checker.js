function solve(arrInput) {
    let arr = arrInput.slice();
    let [x1, y1, x2, y2] = [...arr];

    let x1y1ToZeroComparison = Math.sqrt(Math.pow((0 - x1), 2) + Math.pow((0 - y1), 2));
    let x2y2toZeroComparison = Math.sqrt(Math.pow((0 - x2), 2) + Math.pow((0 - y2), 2));
    let x1y1Tox2y2Comparison = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

    if (x1y1ToZeroComparison % 1 !== 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }

    if (x2y2toZeroComparison % 1 !== 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }

    if (x1y1Tox2y2Comparison % 1 !== 0) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
}

solve([3, 0, 0, 4]);
// solve([2, 1, 1, 1]);