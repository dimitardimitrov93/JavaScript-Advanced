function solve() {
    return {
        __proto__: {},
        extend: function (template) {
            Object.entries(template).forEach(property => {
                let [key, value] = [...property];

                if (typeof value === 'function') {
                    this.__proto__[key] = value;
                } else {
                    this[key] = value;
                }
            });
        }
    };
}

solve();
