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
    // typeof is javascript
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
        console.log('Loading cargo ...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    //if('loadCargo' in vehicle)
    // javascript to check at runtime (not typescript) based on 
    // the Truck constructor function, can't use interfaces  
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(10);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    //if ('flyingSpeed' in animal) {
    //console.log('Moving with speed: ' + animal.flyingSpeed);
    switch (animal.species) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}
moveAnimal({ species: 'bird', flyingSpeed: 10 });
// const userInputElement = <HTMLInputElement>document.getElementById('message-output')!;
const userInputElement = document.getElementById('message-output');
//const userInputElement = document.getElementById('message-output')
// if (userInputElement){
//     (userInputElement as HTMLInputElement).value = "Hi There!";
// }
userInputElement.value = "Hi There!";
;
const errorBag = {
    // 1 (a number can be a valid key type)
    1: 'string',
    email: 'Not a valid email!',
    username: 'Must start with a character'
};
console.log(errorBag.email);
//# sourceMappingURL=app.js.map