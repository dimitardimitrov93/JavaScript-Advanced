function solve(inputN, inputM) {
    let n = Number(inputN);
    let m = Number(inputM);

    let result = 0;

    for (let i = n; i <= m; i++) {
        result += i;
    }

    console.log(result);
}

solve('1', '5');
solve('-8', '20');