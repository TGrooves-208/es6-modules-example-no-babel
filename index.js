// We want to refactor the private WeakMap and Circle class
// These will go into their own separate module
// In that module we only want to export the Circle class
// The Circle is the public interface of this new module we will create
// If we try to run this file in an index.html file there will be an error
// The error will read: Uncaught SyntaxError: Unexpected token
// A workaround without using webpack is: by going into the index.html file
// In the <script> tag add a new property type="module"
// This make the {} braces interpretable by the browser
import { Circle } from './circle.js';

const c = new Circle(143);
c.draw();