function solve(arrInput) {
    let arr = arrInput.slice();
    let peopleArr = [];

    for (let i = 0; i < arr.length; i++) {
        const personObj = JSON.parse(arr[i]);
        peopleArr.push(personObj);
    }

    console.log('<table>');
    peopleArr.forEach(person => {
        console.log('   <tr>');
        for (const key in person) {
            console.log(`       <td>${person[key]}</td>`);
        }
        console.log('   </tr>');
    });
    console.log('</table>');
}

solve([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]);