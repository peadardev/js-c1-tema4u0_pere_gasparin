export { Square, Rectangle, Circle, Triangle}

class Figure {
    _name;
    _formula;
    _dimensions;
    
    constructor() {
        this.dimensions = {};
    }

    get name() {
        return this._name;
    }

    get formula() {
        return this._formula;
    }

    get dimensions() {
        return this._dimensions;
    }

    set dimensions(dimensions) {
        this._dimensions = dimensions;
    }

    computeArea() {
        throw new Error("ERROR: s'ha d'implementar a les subclasses");
    }

    getNumericCalc() {
        throw new Error("ERROR: s'ha d'implementar a les subclasses");
    }
}

class Square extends Figure {
    constructor() {
        super();
        this._name = "Quadrat";
        this._formula = "s x s";
        this.dimensions = {s: {name: "Costat", value:0}};
    }

    computeArea() {
        return this.dimensions.s.value**2;
    }

    getNumericCalc() {
        return `${this.dimensions.s.value} x ${this.dimensions.s.value}`;
    }
}

class Rectangle extends Figure {
    constructor() {
        super();
        this._name = "Rectangle";
        this._formula = "b x h";
        this.dimensions = {b: {name: "Base", value: 0}, h: {name: "Alçada", value: 0}};
    }

    computeArea() {
        return this.dimensions.b.value * this.dimensions.h.value;
    }

    getNumericCalc() {
        return `${this.dimensions.b.value} x ${this.dimensions.h.value}`;
    }
}

class Circle extends Figure {
    constructor() {
        super();
        this._name = "Cercle";
        this._formula = "pi x r^2";
        this.dimensions = {r: {name: "Radi", value: 0}};
    }

    computeArea() {
        return this.dimensions.r.value**2 * Math.PI;
    }

    getNumericCalc() {
        return `pi x ${this.dimensions.r.value}^2`;
    }
}

class Triangle extends Figure {
    constructor() {
        super();
        this._name = "Triangle";
        this._formula = "(b x h) / 2";
        this.dimensions = {b: {name: "Base", value: 0}, h: {name: "Alçada", value: 0}};
    }

    computeArea() {
        return this.dimensions.b.value * this.dimensions.h.value / 2;
    }

    getNumericCalc() {
        return `(${this.dimensions.b.value} x ${this.dimensions.h.value}) / 2`;
    }
}
