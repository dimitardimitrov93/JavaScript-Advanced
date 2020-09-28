function solve(arrInput, sortingCriterion) {
    let arr = arrInput.slice();
    let ticketsArr = [];

    for (let i = 0; i < arr.length; i++) {
        const tokens = arr[i].split('|');

        let currentTicket = {
            destination: tokens[0],
            price: Number(tokens[1]),
            status: tokens[2],
        }

        ticketsArr.push(currentTicket);
    }

    let sortedTicketsArr = ticketsArr.sort((a, b) => {
        if (sortingCriterion === 'price') {
            return Number(a.price) - Number(b.price);
        } else {
            return a[sortingCriterion].localeCompare(b[sortingCriterion]);
        }
    });

    return sortedTicketsArr;
}

solve([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
);