function circleAreaCalculator(input) {

    let inputType = typeof input;

    if (inputType !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    } else {
        let radius = input;
        let circleArea = Math.PI * Math.pow(radius, 2);
        console.log(Math.round(circleArea * 100) / 100);
    }
}

circleAreaCalculator(5);
circleAreaCalculator('name');