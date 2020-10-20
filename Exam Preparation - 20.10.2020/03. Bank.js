function solve() {
    class Bank {
        // TODO: implement this class...
        #bankName;
        constructor(bankName) {
            this.#bankName = bankName;
            this.allCustomers = [];
        }

        newCustomer(customer) {
            this.allCustomers.forEach(customerInDB => {
                if (JSON.stringify(customerInDB) === JSON.stringify(customer)) {
                    throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
                }
            });

            this.allCustomers.push(customer);
            return customer;
        }

        depositMoney(personalId, amount) {
            let dbHasSuchPersonalId = false;
            let customerInDbIndex;
            this.allCustomers.forEach((customerInDb, index) => {
                if (customerInDb.personalId === personalId) {
                    dbHasSuchPersonalId = true;
                    customerInDbIndex = index;
                }
            });

            if (dbHasSuchPersonalId) {
                if (!this.allCustomers[customerInDbIndex].totalMoney) {
                    this.allCustomers[customerInDbIndex].totalMoney = 0;
                    this.allCustomers[customerInDbIndex].transactions = [];
                }
                this.allCustomers[customerInDbIndex].totalMoney += amount;
                this.allCustomers[customerInDbIndex].transactions.push(`${this.allCustomers[customerInDbIndex].firstName} ${this.allCustomers[customerInDbIndex].lastName} made deposit of ${amount}$!`);
                return `${this.allCustomers[customerInDbIndex].totalMoney}$`;
            } else {
                throw new Error('We have no customer with this ID!');
            }
        }

        withdrawMoney(personalId, amount) {
            let dbHasSuchPersonalId = false;
            let customerInDbIndex;
            this.allCustomers.forEach((customerInDb, index) => {
                if (customerInDb.personalId === personalId) {
                    dbHasSuchPersonalId = true;
                    customerInDbIndex = index;
                }
            });

            if (dbHasSuchPersonalId) {
                if (this.allCustomers[customerInDbIndex].totalMoney >= amount) {
                    this.allCustomers[customerInDbIndex].totalMoney -= amount;
                    this.allCustomers[customerInDbIndex].transactions.push(`${this.allCustomers[customerInDbIndex].firstName} ${this.allCustomers[customerInDbIndex].lastName} withdrew ${amount}$!`);
                    return `${this.allCustomers[customerInDbIndex].totalMoney}$`;
                } else {
                    throw new Error(`${this.allCustomers[customerInDbIndex].firstName} ${this.allCustomers[customerInDbIndex].lastName} does not have enough money to withdraw that amount!`);
                }
            } else {
                throw new Error('We have no customer with this ID!');
            }
        }

        customerInfo(personalId) {
            let dbHasSuchPersonalId = false;
            let customerInDbIndex;
            this.allCustomers.forEach((customerInDb, index) => {
                if (customerInDb.personalId === personalId) {
                    dbHasSuchPersonalId = true;
                    customerInDbIndex = index;
                }
            });

            if (dbHasSuchPersonalId) {
                let printLine = `Bank name: ${this.#bankName}\nCustomer name: ${this.allCustomers[customerInDbIndex].firstName} ${this.allCustomers[customerInDbIndex].lastName}\nCustomer ID: ${this.allCustomers[customerInDbIndex].personalId}\nTotal Money: ${this.allCustomers[customerInDbIndex].totalMoney}$\nTransactions:`;

                for (let i = this.allCustomers[customerInDbIndex].transactions.length - 1; i >= 0; i--) {
                    printLine += `\n${i + 1}. ${this.allCustomers[customerInDbIndex].transactions[i]}`;
                }

                return printLine;
            } else {
                throw new Error('We have no customer with this ID!');
            }
        }
    }

    // Functionality Tests
    let bank = new Bank("SoftUni Bank");

    console.log(bank.newCustomer({ firstName: "Svetlin", lastName: "Nakov", personalId: 6233267 }));
    console.log(bank.newCustomer({ firstName: "Mihaela", lastName: "Mileva", personalId: 4151596 }));

    bank.depositMoney(6233267, 250);
    console.log(bank.depositMoney(6233267, 250));
    bank.depositMoney(4151596, 555);

    console.log(bank.withdrawMoney(6233267, 125));

    console.log(bank.customerInfo(6233267));
}

solve();