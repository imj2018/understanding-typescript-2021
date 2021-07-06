const userName = 'Max';
let age = 30;

age = 29;
//var result;
let result;


function addNumbers(a: number, b:number) {
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

// arrow functions
const addNumbersNormal = function (a: number, b: number ) {
    return a + b;
}

const addNumbersArrow = (a: number, b: number) => {
    return a + b;
}

const addNumbersArrowOneLine = (a: number, b: number) => a + b;

console.log("using arrow function " + addNumbersArrow(2,5));

//const printOutputOneParameter = (output: string | number) => console.log(output);
const printOutputOneParameter: (a: number | string) => 
void = output => console.log(output);

printOutputOneParameter("print with one parameter " + 10);
printOutputOneParameter(addNumbersArrow(5,2));


const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', (event) => {console.log(event)});
}

const addNumbersDefault = (a: number, b: number = 1 ) => a + b; 
printOutputOneParameter("default parameter must come last " + addNumbersDefault(5));

// spread
const hobbies = ['sports', 'cooking'];
const activeHobbiesSpread = ['hiking', ...hobbies];

activeHobbiesSpread.push(...hobbies); 

console.log("spread, pull out all elements of array")
activeHobbiesSpread.forEach(element => {
    console.log(element)
});

const person = {
    firstName: 'Max',
    userAge: 30
};

// rest
const pointer = person;
const copiedPersonPullAsKeyValuePairFromObject = { ...person};

// const addMany = (a,b,c,d) => {
// const addTupleOfThreeNumbers = (...numbers: [number, number, number]) => {
const addManyNumbers = (...numbers: number[]) => {
    //let result = 0;
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue; }, 0) 
    };

const AddedNumbers = addManyNumbers(5, 10, 12, 11.7);
console.log("rest parameters, merged into an array " + AddedNumbers);

// destructure
const [hobby1, hobby2, ...remaningHobbiesMergedToNewArray] = hobbies; // not affected
console.log(hobbies)

const {firstName: aliasName, userAge: aliasAge } = person;
console.log(aliasName, aliasName, person)



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