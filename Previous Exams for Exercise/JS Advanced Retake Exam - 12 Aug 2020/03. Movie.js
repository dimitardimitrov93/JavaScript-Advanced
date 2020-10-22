class Movie {

    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this.totalProfit = 0;
        this.totalSoldTickets = 0;
    }

    newScreening(date, hall, description) {
        let hasSuchScreening = false;
        if (this.screenings.length > 0) {
            for (let i = 0; i < this.screenings.length; i++) {
                if (this.screenings[i].date === date && this.screenings[i].hall === hall) {
                    hasSuchScreening = true;
                    break;
                }
            }
        }


        if (hasSuchScreening) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        } else {
            this.screenings.push({
                date,
                hall,
                description,
            });

            return `New screening of ${this.movieName} is added.`;
        }
    }

    endScreening(date, hall, soldTickets) {
        let hasSuchScreening = false;
        let screeningArrIndex = 0;
        if (this.screenings.length > 0) {
            for (let i = 0; i < this.screenings.length; i++) {
                if (this.screenings[i].date === date && this.screenings[i].hall === hall) {
                    hasSuchScreening = true;
                    screeningArrIndex = i;
                    break;
                }
            }
        }

        if (hasSuchScreening) {
            let currentProfit = Number(soldTickets) * this.ticketPrice
            this.totalSoldTickets += Number(soldTickets);
            this.totalProfit += currentProfit;
            let printLine = `${this.movieName} movie screening on ${this.screenings[screeningArrIndex].date} in ${this.screenings[screeningArrIndex].hall} hall has ended. Screening profit: ${currentProfit}`;
            this.screenings.splice(screeningArrIndex, 1);
            return printLine;
        } else {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }
    }

    toString() {
        if (this.screenings.length > 0) {
            let convertedScreeningsToArr = [];
            this.screenings.forEach(screening => {
                convertedScreeningsToArr.push(Object.values(screening));
            });

            convertedScreeningsToArr.sort((a, b) => {
                return a[1].localeCompare(b[1]);
            });

            let printLine = `${this.movieName} full information:\nTotal profit: ${this.totalProfit.toFixed(0)}$\nSold Tickets: ${this.totalSoldTickets}\nRemaining film screenings:`;

            convertedScreeningsToArr.forEach(element => {
                printLine += `\n${element[1]} - ${element[0]} - ${element[2]}`;
            });

            return printLine;
        } else {
            return `${this.movieName} full information:\nTotal profit: ${this.totalProfit.toFixed(0)}$\nSold Tickets: ${this.totalSoldTickets}\nNo more screenings!`;
        }
    }
}

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150.2));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());