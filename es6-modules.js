// Modules (ES6)
// Modules give us some great benefits
// 1. Increase maintability of application - code is organized
// 2. Reuse of one or more modules in an application
// 3. Abstract code - Hide complexity and only expose the essentials
// Popular types of modules formats for ES5 are:
// Legacy focused so it is good to be aware of these types of modules
// AMD: Asynchronous Module Definition (Used in Browser Applications)
// CommonJS: Used in Node.js
// UMD: Universal Module Definition (Used: Browser/Node.js)
// ES6 Modules Focus is on CommonJS and ES6 Modules here
const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log('Circle with radius ' + _radius.get(this));
  }
}

const c = new Circle(5);
// Read the private property of the Circle object
// Passing the circle object of the key and what is returned is the value
_radius.get(c);
console.log(_radius.get(c)); // This gives us the value of 5 as expected
c.draw(); // Not passing a required radius will make this undefined
