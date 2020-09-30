class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(length) {
        return this.innerLength += length;
    }

    decrease(length) {
        if ((this.innerLength - length) < 0) {
            return this.innerLength = 0;
        } else {
            return this.innerLength -= length;
        }
    }

    toString() {
        if (this.innerLength < this.innerString.length) {
            const lengthDifference = this.innerString.length - this.innerLength;
            const stringToPrint = `${this.innerString.slice(0, this.innerLength)}...`;

            return stringToPrint;
        } else {
            return this.innerString;
        }
    }
}

// Test the functionality of the class:
let s = new Stringer("Viktor", 6);
s.decrease(9);
console.log(s.toString());

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
