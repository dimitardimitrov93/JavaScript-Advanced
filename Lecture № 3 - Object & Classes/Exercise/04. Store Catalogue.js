function solve(arrInput) {

    let arr = arrInput.slice();
    let productsCatalogue = {};

    for (let i = 0; i < arr.length; i++) {
        const tokens = arr[i].split(' : ');
        const product = tokens[0];
        const price = Number(tokens[1]);
        const productInitial = product[0];
        const productObj = {
            [product]: price,
        }

        if (!productsCatalogue[productInitial]) {
            productsCatalogue[productInitial] = [];  
        } 

        productsCatalogue[productInitial].push(productObj);
    }

    let productsCatalogueArr = Array.from(Object.entries(productsCatalogue));
    let sortedProductsCatalogueArr = productsCatalogueArr.sort((a, b) => {
        const initialLetterA = a[0].toLowerCase();
        const initialLetterB = b[0].toLowerCase();

        return initialLetterA.localeCompare(initialLetterB);
    });

    for (let element of sortedProductsCatalogueArr) {
        let tempElement = element[1].sort((a, b) => {
            const initialLetterA = Object.keys(a)
                .join('')
                .toLowerCase();

            const initialLetterB = Object.keys(b)
                .join('')
                .toLowerCase();

            return initialLetterA.localeCompare(initialLetterB);
        });

        element[1] = tempElement;
    }

    for (let i = 0; i < sortedProductsCatalogueArr.length; i++) {
        const element = sortedProductsCatalogueArr[i];
        console.log(element[0]);
        
        for (let j = 0; j < element[1].length; j++) {
            const productTokens = Object.entries(element[1][j]);
            console.log(`  ${productTokens[0][0]}: ${productTokens[0][1]}`);
        }
    }
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);