function solve() {
    let resultObj = {};
    let collection = [];

    return function () {
        resultObj = {
            collection: collection,

            add: function (element) {
                this.collection.push(element);
                this.collection.sort((a, b) => a - b);
            },

            remove: function (index) {
                if (index >= 0 && (index <= (collection.length - 1))) {
                    this.collection.splice(index, 1);
                    this.collection.sort((a, b) => a - b);
                }
            },

            get: function (index) {
                if (index >= 0 && (index <= (collection.length - 1))) {
                    return this.collection[index];
                }
            },

            get size() {
                return collection.length;
            },
        };

        return resultObj;
    }();
}

let result = solve();
result.add(5);
result.add(3);
console.log(result.collection);

console.log(result.size);
