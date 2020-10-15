(function stringExtension() {
    String.prototype.ensureStart = function(str) {

        return this.startsWith(str) ? this.toString() : (str + this);

    };

    String.prototype.ensureEnd = function (str) {

        return this.endsWith(str) ? this.toString() : (this + str);

    };

    String.prototype.isEmpty = function () {
        return this == '';
    };

    String.prototype.truncate = function(n) {
        if (this.length <= n ) return this.toString();
        
        if (this.length >= n) {
            let minIndexForSpace = this.length;
            let dot = '.';
            let ellipsis = n < 4 ? dot.repeat(n) : dot.repeat(3);

            while (minIndexForSpace + ellipsis.length > n) {
                minIndexForSpace--;
            }

            if (!this.includes(' ')) {
                return this.slice(0, minIndexForSpace) + ellipsis;
            }

            let spaceIndex = this.lastIndexOf(' ', minIndexForSpace);
            let tempStr = this.slice(0, spaceIndex) + ellipsis;
            return tempStr; 
        }
    };

    String.format = function (str,...params) {
        let arr = str.split(' ');
        arr.map((element, index) => {
            if (element.includes('{')) {
                let placeholder = Number(element[1]);

                if (placeholder >= 0 && placeholder < params.length) {
                    arr[index] = params[placeholder];
                }
            }
        });

        return arr.join(' ');
    };
})();