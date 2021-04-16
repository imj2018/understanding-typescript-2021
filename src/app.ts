

const hobbies = ['Sports', 'Cooking'];
//console.log(hobbies[0]);

const activeHobbies = ['Hiking', ...hobbies]; // spread an existing array into the array, can be used whenever there is a , delimiter

//activeHobbies.push(); // though declared as a constant an array is an object which is a reference type in js, push will change the memory not the address
//activeHobbies.push(hobbies); // adding hobbies will just add the hobbies array as a nested array, typescript will not allow this
//activeHobbies.push(hobbies[0], hobbies[1]); 
activeHobbies.push(...hobbies); // point at the array or object to spread, pull all values from hobbies and add them as a list of individual values

const person = {
    name: 'Max',
    age: 30
};

// const copiedPerson = person; // not a copy but a reference
const copiedPerson = { ...person };