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
    name: 'george',
    privileges: ['create-server', 'wreck-server'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

// intersection on union combines i.e number 
type Universal = Combinable & Numeric;

let test: Universal = 1;

console.log(test);

// if bother parameters are strings return both concatenated
// as strings else they must be numbers (added as numbers)
function add(a: Combinable, b: Combinable) {
    // typeof is javascript
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

// both have name propert not priviliges
function printEmployeeInformation(emp: UnknownEmployee) {
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

    loadCargo(amount: number) {
        console.log('Loading cargo ...  + amount');
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
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

interface Bird {
    species: "bird", // this is a literal type (type assignemnt) 
    flyingSpeed: number;
}

interface Horse {
    species: 'horse',
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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

moveAnimal({species : 'bird', flyingSpeed : 10 });

