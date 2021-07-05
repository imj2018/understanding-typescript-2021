
type Admin = {
    //interface Admin {
    name: string;
    privileges: string[];
};

type Employee = {
    //interface Employee {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee; // intersection, closely related to interface inheritance
//interface ElevatedEmployee extends Employee, Admin {
// name: string;
// privileges: string[];
// startDate: Date;
// }

const el: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server', 'new'],
    startDate: new Date()
};

type Combinable = string | number; // can be used on non object types union type
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {  // type guard with typeof, allow the flexibility of a union type but still check the return value as it may be dependant
        // i.e either return concatonate or add numbers
        return a.toString() + b.toString();
    }
    return a + b;
}


type UnknownEmployee = Employee | Admin;



console.log(...el.privileges);
const number: Universal = 10;
console.log(number)