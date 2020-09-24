function solve(arrInput) {

    class Town {
        constructor(town, latitude, longitude) {
            this['Town'] = town;
            this['Latitude'] = latitude;
            this['Longitude'] = longitude;
        }
    }

    let arr = arrInput.slice(1);
    let resultArr = [];

    let regEx = /[\s*\|\s*]+(?<town>[A-Za-z\s]+[^\s\|])[\s*\|\s*]+(?<latitude>\W[0-9]+\.*[0-9]+)[\s*\|\s*]+(?<longitude>\W[0-9]+\.*[0-9]+)[\s*\|\s*]+/;

    arr.forEach(element => {

        let data = Array.from(element.matchAll(regEx));

        let town = data[0].groups['town'];
        let latitude = Number(Number(data[0].groups['latitude']).toFixed(2));
        let longitude = Number(Number(data[0].groups['longitude']).toFixed(2));

        resultArr.push(new Town(town, latitude, longitude));
    });

    console.log(JSON.stringify(resultArr));
}

solve([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);

solve([
    '| Town | Latitude | Longitude |',
    '| Delhi |  28.38 | 77.12 |',
    '| Is it a real town? | 71.42 | -13.91 |'
]);

solve([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
]);