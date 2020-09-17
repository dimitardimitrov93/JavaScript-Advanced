function solve(arrInput) {
    
    let arr = arrInput.slice();
    let number = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {

        let operation = arr[i];

        if (operation === 'chop') {
            number /= 2;
            console.log(number);
        } else if (operation === 'dice') {
            number = Math.sqrt(number);
            console.log(number);
        } else if (operation === 'spice') {
            number += 1;
            console.log(number);
        } else if (operation === 'bake') {
            number *= 3;
            console.log(number);
        } else if (operation === 'fillet') {
            number -= (number * 0.2);
            console.log(number);
        }
    }
}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);

// solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);