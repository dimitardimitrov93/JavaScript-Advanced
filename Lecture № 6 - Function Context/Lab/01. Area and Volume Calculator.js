function solve(area, vol, input) {

    let coordinatesArr = JSON.parse(input);
    let resultArr = [];

    class Result {
        constructor(area, volume) {
            this.area = area;
            this.volume = volume;
        }
    }

    class Coordinates {
        constructor(x, y, z) {
            this.x = Math.abs(Number(x));
            this.y = Math.abs(Number(y));
            this.z = Math.abs(Number(z));
        }
    }

    for (const coordinates of coordinatesArr) {
        let currentCoordinates = new Coordinates(...Object.values(coordinates));
        let currentArea = area.call(currentCoordinates);
        let currentVolume = vol.call(currentCoordinates);
        let currentResult = new Result(currentArea, currentVolume);
        resultArr.push(currentResult);
    }

    return resultArr;
}

function area() {
    return this.x * this.y;
};

function vol() {
    return this.x * this.y * this.z;
};

solve(area, vol, '[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]');

solve(area, vol,'[{"x":"10","y":"-22","z":"10"},{"x":"47","y":"7","z":"-5"},{"x":"55","y":"8","z":"0"},{"x":"100","y":"100","z":"100"},{"x":"55","y":"80","z":"250"}]');
