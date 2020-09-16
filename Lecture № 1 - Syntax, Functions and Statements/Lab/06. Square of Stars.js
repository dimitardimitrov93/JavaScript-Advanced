function solve(defaultParam = 5) {
    
    let starsNumber = Number(defaultParam);

    for (let i = 1; i <= starsNumber; i++) {
        console.log('* '.repeat(starsNumber));
    }
}

solve(2);
solve();