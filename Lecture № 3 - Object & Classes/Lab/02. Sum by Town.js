function solve(arrInput) {
    let arr = arrInput.slice();
    let townsObj = {};

    while (arr.length > 0) {

        let town = arr.shift();
        let currentIncome = Number(arr.shift());

        if (townsObj[town]) {
            let previousIncome = townsObj[town];
            townsObj[town] = previousIncome + currentIncome;
        } else {
            townsObj[town] = currentIncome;
        }
    }

    console.log(JSON.stringify(townsObj));
}

solve(['Sofia','20','Varna','3','Sofia','5','Varna','4']);