
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

type Universal = Combinable & Numeric; // 

console.log(...el.privileges);
const number: Universal = 10;
console.log(number)