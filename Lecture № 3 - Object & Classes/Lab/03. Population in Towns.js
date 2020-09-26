function solve(arrInput) {

    let arr = arrInput.slice();
    let townsInfo = {};

    for (let i = 0; i < arr.length; i++) {
        const tokens = arr[i].split(' <-> ');
        const town = tokens[0];
        const population = Number(tokens[1]);


        if (townsInfo[town]) {
            const updatedPopulation = townsInfo[town] + population;
            townsInfo[town] = updatedPopulation;
        } else {
            townsInfo[town] = population;
        }
    }

    for (const key in townsInfo) {
        console.log(`${key} : ${townsInfo[key]}`);
    }
}

solve([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);