"use strict";
var _a;
;
;
const el = {
    name: 'george',
    privileges: ['create-server', 'wreck-server'],
    startDate: new Date()
};
let test = 1;
console.log(test);
// if both parameters are strings return both concatenated
// as strings else they must be numbers (added as numbers)
function add(a, b) {
    // typeof is javascript
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
//const result = add(1, 5);
// this still returns Combinable, can't call string stuff e.g split
// you can type cast i.e const result = add('Max', 'Schwarz') as string but not optimal
const result = add('Max', 'Schwarz');
result.split('');
const fetchedUserData = {
    id: 'ul',
    userName: 'Max',
    job: { title: 'CEO', description: 'My own company' }
};
console.log(fetchedUserData.job);
// js way yo check if an object exists
//console.log(fetchedUserData.job.title & fetchedUserData.job.title);
// if fetchedUserData is defined (using the?) access job, then only access title
// if job is defined
// this is a safe was to access nested properties or objects
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
//const userInput = null;
const userInput = '';
// if null store a 'DEFAULT' but also falls back for empty strings ' '
// const storedData = userInput || 'DEFAULT';
// nullish coalescing operator, if it really is null or undefined it will use 'DEFAULT'
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
// type UnknownEmployee = Employee | Admin;
// // both have name propert not priviliges
// function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log('Name: ' + emp.name);
//     // javascript checks at runtime and does not know Employee
//     // can only check for object, string etc
//     if ('privileges' in emp) {
//         console.log('Privileges ' + emp.privileges);
//     }
//     if ('startDate' in emp) {
//         console.log('Start Date ' + emp.startDate);
//     }
// }
// printEmployeeInformation(el);
// // can create object directly
// printEmployeeInformation({ name: 'george', startDate: new Date() });
// class Car {
//     drive() {
//         console.log('Driving...');
//     }
// }
// class Truck {
//     drive() {
//         console.log('Driving a truck ...');
//     }
//     loadCargo(amount: number) {
//         console.log('Loading cargo ...'  + amount);
//     }
// }
// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();
//     //if('loadCargo' in vehicle)
//     // javascript to check at runtime (not typescript) based on 
//     // the Truck constructor function, can't use interfaces  
//     if (vehicle instanceof Truck) {
//         vehicle.loadCargo(10);
//     }
// }
// useVehicle(v1);
// useVehicle(v2);
// interface Bird {
//     species: "bird", // this is a literal type (type assignemnt) 
//     flyingSpeed: number;
// }
// interface Horse {
//     species: 'horse',
//     runningSpeed: number;
// }
// type Animal = Bird | Horse;
// function moveAnimal(animal: Animal) {
//     let speed;
//     //if ('flyingSpeed' in animal) {
//     //console.log('Moving with speed: ' + animal.flyingSpeed);
//     switch (animal.species) {
//         case 'bird':
//             speed = animal.flyingSpeed;
//             break;
//         case 'horse':
//             speed = animal.runningSpeed;
//     }
//     console.log('Moving at speed: ' + speed);
// }
// moveAnimal({species : 'bird', flyingSpeed : 10 });
// // const userInputElement = <HTMLInputElement>document.getElementById('message-output')!;
// const userInputElement = document.getElementById('message-output')! as HTMLInputElement;
// //const userInputElement = document.getElementById('message-output')
// // if (userInputElement){
// //     (userInputElement as HTMLInputElement).value = "Hi There!";
// // }
// userInputElement.value = "Hi There!";
// interface ErrorContrainer { 
//     // { email: ' Note a valid email', username: 'Must start with a character'}
//     // must have properties that are strings, and value returned must be string
//     [prop:string] :string;
//     //[prop: number]
//     // won't work
//     //id: number;
// };
// const errorBag: ErrorContrainer = {
//     // 1 (a number can be a valid key type)
//     1: 'string', 
//     email: 'Not a valid email!',
//     username: 'Must start with a character'
// };
// console.log(errorBag.email);
//# sourceMappingURL=app.js.map