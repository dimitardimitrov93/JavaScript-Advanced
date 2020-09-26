function solve() {

    let arrInput = [
        ['Anna', 'Simpson', '22', 'anna@yahoo.com'],
        ['SoftUni'],
        ['Stephan', 'Johnson', '25'],
        ['Gabriel', 'Peterson', '24', 'g.p@gmail.com'],
    ];

    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    let peopleArr = [];

    for (let i = 0; i < arrInput.length; i++) {
        let [firstName, lastName, age, email] = [...arrInput[i]];
        
        const person = new Person(firstName, lastName, age, email);
        peopleArr.push(person);
    }

    return peopleArr;
}

solve();