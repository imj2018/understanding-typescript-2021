"use strict";
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