function solve(...arguments) {
    let dataObj = {};

    arguments.forEach(argument => {
        let argumentType = typeof argument;
        if (!dataObj[argumentType]) {
            dataObj[argumentType] = 1;
        } else {
            dataObj[argumentType]++;
        }
    });

    let dataArr = Array.from(Object.entries(dataObj));
    dataArr.sort((a, b) => {
        if (a[1] !== b[1]) {
            return b[1] - a[1];
        }
    });

    arguments.forEach(argument => {
        console.log(`${typeof argument}: ${argument}`);
    });

    dataArr.forEach(element => {
        console.log(`${element[0]} = ${element[1]}`);
    });
}

solve('cat', 42, function () { console.log('Hello world!'); });
solve({ name: 'bob' }, 3.333, 9.999);
solve(42, 'cat', [], undefined);