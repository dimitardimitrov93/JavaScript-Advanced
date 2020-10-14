function solve(carRequirementsObj) {
    let carResultObj = { model: carRequirementsObj.model };

    let engineArr = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 },
    ];

    carResultObj.engine = engineArr
        .reduce((acc, engine) => {
            if (engine.power >= carRequirementsObj.power) {
                acc.push(engine);
            }

            return acc;
        }, [])
        .sort((a, b) => a.power - b.power)[0];

    carResultObj.carriage = {
        type: carRequirementsObj.carriage,
        color: carRequirementsObj.color,
    };

    carResultObj.wheels = new Array(4).fill(carRequirementsObj.wheelsize % 2 !== 0 ? carRequirementsObj.wheelsize : --carRequirementsObj.wheelsize);
    console.log(carResultObj);

    return carResultObj;
}

solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});

solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});