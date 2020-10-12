function solution() {

    return {

        add: function (...arguments) {
            let [x1, y1] = [...arguments[0]];
            let [x2, y2] = [...arguments[1]];

            return [(x1 + x2), (y1 + y2)];
        },

        multiply: function (...arguments) {
            let [x1, y1] = [...arguments[0]];
            let scalar = arguments[1];

            x1 *= scalar;
            y1 *= scalar;

            return [x1, y1];
        },

        length: function (...arguments) {
            let [x1, y1] = [...arguments[0]];

            return Math.sqrt(x1 * x1 + y1 * y1);
        },

        dot: function (...arguments) {
            let [x1, y1] = [...arguments[0]];
            let [x2, y2] = [...arguments[1]];

            return x1 * x2 + y1 * y2;
        },

        cross: function (...arguments) {
            let [x1, y1] = [...arguments[0]];
            let [x2, y2] = [...arguments[1]];

            return x1 * y2 - y1 * x2;
        },
    };
}

let solve = solution();
console.log(solve.dot([1, 0], [0, -1]));
console.log(solve.dot([2, 3], [2, -1]));
console.log(solve.add([1, 1], [1, 0]));
console.log(solve.multiply([3.5, -2], 2));
console.log(solve.length([3, -4]));
console.log(solve.dot([1, 0], [0, -1]));
console.log(solve.cross([3, 7], [1, 0]));