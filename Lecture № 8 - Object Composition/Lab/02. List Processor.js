function solve(arrInput) {
    let resultArr = [];
    arrInput.forEach(element => {
        let [command, str] = element.split(' ');
        if (command === 'add') {
            resultArr.push(str);
        } else if (command === 'remove') {
            while (resultArr.includes(str)) {
                resultArr.splice(resultArr.indexOf(str), 1);
            }
        } else {
            console.log(resultArr.join(','));
        }
    });
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);
solve(['add peter', 'add george', 'add peter', 'remove peter','print']);