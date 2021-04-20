"use strict";
const hobbies = ['Sports', 'Cooking'];
//console.log(hobbies[0]);
const activeHobbies = ['Hiking', ...hobbies]; // spread an existing array into the array, can be used whenever there is a , delimiter
//activeHobbies.push(); // though declared as a constant an array is reference type (to an object() in js, push will change it in memory not the address
//activeHobbies.push(hobbies); // adding hobbies will just add the hobbies array as a nested array, typescript will not allow
//activeHobbies.push(hobbies[0], hobbies[1]); 
activeHobbies.push(...hobbies); // point at the array or object to spread, pull all values from hobbies and add them as a list of individual values
const person = {
    firstName: 'Max',
    age: 30
};
// const copiedPerson = person; // not a copy but a reference
const copiedPerson = Object.assign({}, person);
//const add = (...numbers: [number, number, number]) => { // can also accept tuple, limit to 3 arguments
const add = (...numbers) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0); // currentResult = 0 
};
//const numbers: number[] = [5, 10, 2, 4, 7];
const addedNumbers = add(5, 10, 2, 4, 7);
console.log(addedNumbers);
//const hobby1 = hobbies[0];
//const hobby2 = hobbies[1];
//const [] = hobbies;
const [hobby1, hobby2, ...remainingHobbies] = hobbies; // go through hobbies array, store  element 1 in hobby1, second element in hobby2, the remaining elements will be merged together into a new array 
console.log(hobbies, hobby1, hobby2);
const { firstName: userName, age } = person; // pull values related to the keys (firstName, age) from person and store them in constants of the same name
// array destructuring pulls them out in order a js array is an ordered list, objects order is not guaranteed so they are pulled by key name. the names are not arbitrary and must be the same key
// firstName: userName to rename is not typescript just js alias
console.log(userName, age, person);
//# sourceMappingURL=app.js.map