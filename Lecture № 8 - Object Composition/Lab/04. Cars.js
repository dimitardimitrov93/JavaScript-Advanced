function solve(arr) {

    let resultObj = {};

    arr.forEach(element => {
        let [command, ...cmdArguments] = element.split(' ');

        if (command === 'create') {
            if (!cmdArguments.includes('inherit')) {
                resultObj[cmdArguments[0]] = {};
                Object.defineProperty(resultObj[cmdArguments[0]], 'inherit', {
                    enumerable: false,
                    writable: true,
                });
                resultObj[cmdArguments[0]].inherit = false;
            } else {
                resultObj[cmdArguments[0]] = { ...resultObj[cmdArguments[0]] };
                Object.defineProperty(resultObj[cmdArguments[0]], 'inherit', {
                    enumerable: false,
                    writable: true,
                });

                resultObj[cmdArguments[0]].inherit = cmdArguments[2];
            }
        } else if (command === 'set') {
            if (!resultObj[cmdArguments[0]].inherit) {
                resultObj[cmdArguments[0]][cmdArguments[1]] = cmdArguments[2];
            } else {
                resultObj[cmdArguments[0]] = { [cmdArguments[1]]: cmdArguments[2], ...resultObj[resultObj[cmdArguments[0]].inherit] };
            }
        } else {

            if (resultObj[cmdArguments[0]].inherit) {
                resultObj[cmdArguments[0]] = { ...resultObj[resultObj[cmdArguments[0]].inherit] };
            }

            let printArr = [];
            Object.entries(resultObj[cmdArguments[0]]).forEach(element => printArr.push(element.join(':'))
            );

            console.log(printArr.join(', '));
        }
    });
}

// solve([
//     'create c1',
//     'create c2 inherit c1',
//     'set c1 color red',
//     'set c2 model new',
//     'print c1',
//     'print c2'
// ]);

solve(['create pesho', 'create gosho inherit pesho', 'create stamat inherit gosho', 'set pesho rank number1', 'set gosho nick goshko', 'print stamat']);