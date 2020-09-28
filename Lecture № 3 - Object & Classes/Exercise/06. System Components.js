function solve(arrInput) {

    let arr = arrInput.slice();
    let databaseObj = {};

    for (let i = 0; i < arr.length; i++) {
        const tokens = arr[i].split(' | ');
        const system = tokens[0];
        const component = tokens[1];
        const subcomponent = tokens[2];

        if (!databaseObj[system]) {
            databaseObj[system] = {};
            databaseObj[system][component] = [subcomponent];
        } else {

            if (databaseObj[system][component]) {
                databaseObj[system][component].push(subcomponent);
            } else {
                databaseObj[system][component] = [subcomponent];
            }
        }
    }

    for (const system in databaseObj) {
        let unsortedComponentsArr = Object.entries(databaseObj[system]);
        let sortedComponentsArr = unsortedComponentsArr.sort((a, b) => {
            return b[1].length - a[1].length;
        });

        databaseObj[system] = sortedComponentsArr;
    }

    let unsortedDatabaseArr = Array.from(Object.entries(databaseObj));
    let sortedDatabaseArr = unsortedDatabaseArr.sort((a, b) => {
        const componentsNumberA = a[1].length;
        const componentsNumberB = b[1].length;

        const systemA = a[0];
        const systemB = b[0];

        if (componentsNumberA !== componentsNumberB) {
            return componentsNumberB - componentsNumberA;
        } else {
            return systemA.localeCompare(systemB);
        }
    });

    for (let i = 0; i < sortedDatabaseArr.length; i++) {
        const system = sortedDatabaseArr[i][0];
        const components = sortedDatabaseArr[i][1];

        console.log(system);

        components.forEach(component => {
            console.log(`|||${component[0]}`);

            component[1].forEach(subcomponent => {
                console.log(`||||||${subcomponent}`);
            });
        });
    }
}

solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);