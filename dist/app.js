"use strict";
const userName = 'Max';
let age = 30;
age = 29;
//var result;
let result;
function addNumbers(a, b) {
    //var result;
    result = a + b;
    return result;
}
console.log(result);
if (age > 20) {
    //var isOld = true;
    //let isOld = true;
}
//console.log(isOld);
const addNumbersNormal = function (a, b) {
    return a + b;
};
const addNumbersArrow = (a, b) => {
    return a + b;
};
const addNumbersArrowOneLine = (a, b) => a + b;
console.log("using arrow function " + addNumbersArrow(2, 5));
//const printOutputOneParameter = (output: string | number) => console.log(output);
const printOutputOneParameter = output => console.log(output);
printOutputOneParameter("print with one parameter " + 10);
printOutputOneParameter(addNumbersArrow(5, 2));
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', (event) => { console.log(event); });
}
//interface ElevatedEmployee extends Employee, Admin {
// name: string;
// privileges: string[];
// startDate: Date;
// }
const el = {
    name: 'Max',
    privileges: ['create-server', 'new'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') { // type guard with typeof, allow the flexibility of a union type but still check the return value as it may be dependant
        // i.e either return concatonate or add numbers
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(...el.privileges);
const number = 10;
console.log(number);
//# sourceMappingURL=app.js.map