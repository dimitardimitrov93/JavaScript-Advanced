function solve(arrInput) {
    
    let arr = arrInput.slice();
    let currentSpeed = arr.shift();
    let area = arr.shift();
    let speedOverTheLimit = 0;

    if (area === 'city') {
        if (currentSpeed > 50) {
            speedOverTheLimit = Math.abs(currentSpeed - 50);
        }

    } else if (area === 'residential') {
        if (currentSpeed > 20) {
            speedOverTheLimit = Math.abs(currentSpeed - 20);
        }

    } else if (area === 'interstate') {
        if (currentSpeed > 90) {
            speedOverTheLimit = Math.abs(currentSpeed - 90);
        }

    } else if (area === 'motorway') {
        if (currentSpeed > 130) {
            speedOverTheLimit = Math.abs(currentSpeed - 130);
        }
    }

    if (speedOverTheLimit > 0 && speedOverTheLimit <= 20) {
        console.log('speeding');

    } else if (speedOverTheLimit > 20 && speedOverTheLimit <= 40) {
        console.log('excessive speeding');

    } else if (speedOverTheLimit > 40) {
        console.log('reckless driving ');
    }
}

solve([40, 'city']);
solve([21, 'residential']);
solve([120, 'interstate']);
solve([200, 'motorway']);