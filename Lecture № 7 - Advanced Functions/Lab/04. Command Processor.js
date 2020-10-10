function solution() {
    let string = '';
    let tempString = '';
    
    return {
        append: (msg) => string += msg,
        removeStart: (n) => {
            tempString = string.substring(n);
            string = tempString;
            return string;
        },
        removeEnd: (n) => {
            tempString = string.substring(0, string.length - n);
            string = tempString;
            return string;
        },
        print: () => console.log(string),
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();