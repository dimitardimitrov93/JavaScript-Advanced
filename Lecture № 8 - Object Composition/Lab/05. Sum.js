function solve() {
    return {
        init: function (selector1, selector2, resultSelector) {
            this.firstElement = document.querySelector(`${selector1}`);
            this.secondElement = document.querySelector(`${selector2}`);
            this.resultElement = document.querySelector(`${resultSelector}`);
        },

        add: function () {
            let sum = Number(this.firstElement.value) + Number(this.secondElement.value);
            this.resultElement.value = sum;
        },

        subtract: function () {
            let sum = Number(this.firstElement.value) - Number(this.secondElement.value);
            this.resultElement.value = sum;
        },
    };
}