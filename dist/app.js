"use strict";
const add = (a = 1, b = 1) => a + b; // default arguments must be called last, if not optional
const add = (a = 1, b) => a + b;
const printOutput = output => console.log(output); // will work in typescript if as a function type (type assigned to function)
const button = document.querySelector('button');
// if (button) {
button.addEventListener('click', event => console.log(event)); // if not parameters () => {...}, typescript can infer it's an event object
// }
//button.addEventListener('click', function (event) { console.log(event) }) // hmmm....
printOutput(add(5));
//# sourceMappingURL=app.js.map