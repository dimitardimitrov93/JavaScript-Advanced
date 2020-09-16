function solve(stepsFromHomeToUni, footprintLengthInM, speedInKmH) {

    let distanceToUniInM = (stepsFromHomeToUni * footprintLengthInM);
    let distanceToUniInKm = distanceToUniInM / 1000;
    let minutesToPassOneKm = 60 / speedInKmH;
    let minutesForTheRoad = distanceToUniInKm * minutesToPassOneKm;
    let minutesForBreaks = Math.floor(distanceToUniInM / 500);

    let totalMinutes = minutesForTheRoad + minutesForBreaks;
    let hours = Math.floor(totalMinutes / 60);
    let minutes = Math.floor(totalMinutes % 60);
    let seconds = Math.ceil(totalMinutes * 60) % 60;

    let hoursToPrint = '';
    let minutesToPrint = '';
    let secondsToPrint = '';

    if (hours < 10) {
        hoursToPrint = `0${hours}`;
    } else {
        hoursToPrint = hours;
    }

    if (minutes < 10) {
        minutesToPrint = `0${minutes}`;
    } else {
        minutesToPrint = minutes;
    }

    if (seconds < 10) {
        secondsToPrint = `0${seconds}`;
    } else {
        secondsToPrint = seconds;
    }

    console.log(`${hoursToPrint}:${minutesToPrint}:${secondsToPrint}`);
}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);