"use strict";
const hobbies = ['Sports', 'Cooking'];
//console.log(hobbies[0]);
const activeHobbies = ['Hiking', ...hobbies]; // spread an existing array into the array, can be used whenever there is a , delimiter
//activeHobbies.push(); // though declared as a constant an array is reference type (to an object() in js, push will change it in memory not the address
//activeHobbies.push(hobbies); // adding hobbies will just add the hobbies array as a nested array, typescript will not allow
//activeHobbies.push(hobbies[0], hobbies[1]); 
activeHobbies.push(...hobbies); // point at the array or object to spread, pull all values from hobbies and add them as a list of individual values
const person = {
    name: 'Max',
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
//# sourceMappingURL=app.js.map