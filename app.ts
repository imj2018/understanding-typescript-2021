// const person: {
//  name: string;
//  age: number; 
// } = {

const person: { // inference is not working acceptably therefore the types need to be explicit
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // tuple have a set number of elements (list vs array)
} = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'] // tuple first element numeric id or second string id i.e description for this context
};

person.role.push('admin'); // add admin to end off array, typescript does not know only 2 elements are needed
// push cannot be caught by typescript
//person.role[1] = 10; // the second element (index[1]) to a number 

person.role = [0, 'admin'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}