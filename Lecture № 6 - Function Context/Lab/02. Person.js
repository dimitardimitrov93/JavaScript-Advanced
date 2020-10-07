function solve(firstName, lastName) {
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            Object.defineProperty(this, "fullName", {
                set: function (value) {
                    let validationRegEx = /^[A-Z]{1}[a-z]+[ ][A-Z]{1}[a-z]+$/;
                    if (validationRegEx.test(value)) {
                        [this.firstName, this.lastName] = value.split(' ');
                    }
                },
                get: function () {
                    return `${this.firstName} ${this.lastName}`;
                }
            });
        }
    }
    
    let result = new Person(firstName, lastName);
    return result;
}

solve();