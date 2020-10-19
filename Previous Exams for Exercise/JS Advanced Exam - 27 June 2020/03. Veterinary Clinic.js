function solve() {
    class VeterinaryClinic {
        constructor(clinicName, capacity) {
            this.clinicName = clinicName;
            this.capacity = capacity;
            this.database = {};
            this.currentWorkLoad = 0;
            this.totalProfit = 0;
        }

        newCustomer(ownerName, petName, kind, procedures) {
            if (this.currentWorkLoad < this.capacity) {

                if (this.database[ownerName]) {

                    if (this.database[ownerName][petName]) {

                        if (this.database[ownerName][petName].procedures.length > 0) {
                            throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${this.database[ownerName][petName].procedures.join(', ')}.`);
                        } else {
                            this.database[ownerName][petName].procedures = [...procedures];
                            this.currentWorkLoad++;
                            return `Welcome ${petName}!`;
                        }
                    } else {
                        this.database[ownerName][petName] = {
                            kind: kind.toLowerCase(),
                            procedures,
                        };
                        this.currentWorkLoad++;
                        return `Welcome ${petName}!`;
                    }

                } else {
                    this.database[ownerName] = {};
                    this.database[ownerName][petName] = {
                        kind: kind.toLowerCase(),
                        procedures,
                    };
                    this.currentWorkLoad++;
                    return `Welcome ${petName}!`;
                }
            } else {
                throw new Error('Sorry, we are not able to accept more patients!');
            }
        }

        onLeaving(ownerName, petName) {
            if (this.database[ownerName]) {
                if ((!this.database[ownerName][petName]) || (this.database[ownerName][petName].procedures.length === 0)) {
                    throw new Error(`Sorry, there are no procedures for ${petName}!`);
                } else {
                    this.totalProfit += this.database[ownerName][petName].procedures.length * 500;
                    this.database[ownerName][petName].procedures = [];
                    this.currentWorkLoad--;
                    return `Goodbye ${petName}. Stay safe!`;
                }
            } else {
                throw new Error('Sorry, there is no such client!');
            }
        }

        toString() {
            let databaseArr = Array.from(Object.entries(this.database));
            databaseArr.sort((a, b) => {
                return a[0].localeCompare(b[0]);
            });

            databaseArr.forEach(owner => {
                owner[1] = Object.entries(owner[1]).sort((a, b) => {
                    return a[0].localeCompare(b[0]);
                });
            });

            let printLine = `${this.clinicName} is ${Math.floor((this.currentWorkLoad * 100) / this.capacity)}% busy today!\nTotal profit: ${this.totalProfit.toFixed(2)}$`;
            databaseArr.forEach(owner => {
                printLine += `\n${owner[0]} with:`;
                owner[1].forEach(pet => {
                    printLine += `\n---${pet[0]} - a ${pet[1].kind} that needs: ${pet[1].procedures.join(', ')}`;
                });
            });
            return printLine;
        }
    }

    let clinic = new VeterinaryClinic('SoftCare', 10);
    console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
    console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
    console.log(clinic.newCustomer('Anna Morgan', 'Var', 'Dog', ['SK456', 'DFG45', 'KS456']));
    console.log(clinic.onLeaving('Anna Morgan', 'Var'));
    console.log(clinic.newCustomer('Anna Morgan', 'Var', 'Dog', ['SK456', 'DFG45', 'KS456']));

    console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
    console.log(clinic.toString());
    clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
    console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
    console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
    console.log(clinic.toString());

}

solve();