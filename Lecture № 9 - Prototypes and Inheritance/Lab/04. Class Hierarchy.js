function solve() {

    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        changeUnits(inputUnit) {
            if (this.units === 'cm' && inputUnit === 'mm') {
                this.radius *= 10;
                this.width *= 10;
                this.height *= 10;
            } else if (this.units === 'cm' && inputUnit === 'm') {
                this.radius *= 0.1;
                this.width *= 0.1;
                this.height *= 0.1;
            } else if (this.units === 'mm' && inputUnit === 'm') {
                this.radius *= 0.001;
                this.width *= 0.001;
                this.height *= 0.001;
            } else if (this.units === 'mm' && inputUnit === 'cm') {
                this.radius /= 10;
                this.width /= 10;
                this.height /= 10;
            } else if (this.units === 'm' && inputUnit === 'mm') {
                this.radius *= 1000;
                this.width *= 1000;
                this.height *= 1000;
            }
            
            this.units = inputUnit;
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);

            if (this.units === 'mm') {
                this.radius = radius * 10;
            } else if (this.units === 'm') {
                this.radius = radius * 0.1;
            } else {
                this.radius = radius;
            }
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);

            if (this.units === 'mm') {
                this.width = width * 10;
                this.height = height * 10;
            } else if (this.units === 'm') {
                this.width = width * 0.1;
                this.height = height * 0.1;
            } else {
                this.width = width;
                this.height = height;
            }
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    let c = new Circle(5);
    console.log(c.area); // 78.53981633974483
    console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

    let r = new Rectangle(3, 4, 'mm');
    console.log(r.area); // 1200 
    console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

    r.changeUnits('cm');
    console.log(r.area); // 12
    console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

    c.changeUnits('mm');
    console.log(c.area); // 7853.981633974483
    console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50

    return {
        Figure,
        Circle,
        Rectangle,
    };
}

solve();