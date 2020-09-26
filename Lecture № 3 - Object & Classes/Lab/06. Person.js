function solve() {

    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = Number(age);
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    let person = new Person('Sharky', 'Shark', '16', 'sharkythedog@gmail.com')
    console.log(person.toString());
}

solve();