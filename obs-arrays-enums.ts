// const person: {
//  name: string;
//  age: number; 
// } = {

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Maximilian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

/**
 * enum useful for easier identifiers to a mapped value
 * 
 * 
 */
enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 200 }; // can assign any number or strings, numbers after will increment

const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

//person.role.push('admin');
//person.role = [0, 'admin'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
    console.log('is admin');
}