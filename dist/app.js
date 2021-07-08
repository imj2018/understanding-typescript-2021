"use strict";
;
;
const el = {
    name: 'george',
    privileges: ['create-server', 'wreck-server'],
    startDate: new Date()
};
let test = 1;
console.log(test);
// if bother parameters are strings return both concatenated
// as strings else they must be numbers (added as numbers)
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
// both have name propert not priviliges
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    // javascript checks at runtime and does not know Employee
    // can only check for object, string etc
    if ('privileges' in emp) {
        console.log('Privileges ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date ' + emp.startDate);
    }
}
printEmployeeInformation(el);
// can create object directly
printEmployeeInformation({ name: 'george', startDate: new Date() });
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck ...');
    }
    loadCargo(amount) {
        console.log('Loading cargo ...  + amount');
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(10);
    }
}
useVehicle(v1);
//# sourceMappingURL=app.js.map