// definition not object
// type Admin = { 
interface Admin {
    name: string;
    privileges: string[];
};

// type Employee = {
interface Employee {
    name: string;
    startDate: Date;
};

//interface ElevatedEmployee extends Employee, Admin {
    //
 //}

// intersection with objects creates a new object of both types
// like to inheritance
type ElevatedEmployee = Admin & Employee; 

const el: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server', 'break-server'],
    startDate: new Date()
};

type Combinable = string | number; 
type Numeric = number | boolean;

// intersection on union combines both on intersection i.e number 
type Universal = Combinable & Numeric;
 
let test2: Universal = 1;


console.log(el);
console.log(test2);

