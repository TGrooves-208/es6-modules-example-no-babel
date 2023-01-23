// Everything in this file is private
// To expose what is needed we need to export it
const _radius = new WeakMap();

export class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log('Circle with a radius ' + _radius.get(this));
    }
}