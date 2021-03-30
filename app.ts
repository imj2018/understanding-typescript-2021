// const person: { name: string; age: number; }
//     = {}

const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'] // typscript inferred a string array
};

let favoriteActivities: string[];
//let favoriteActivities: any[]; // using any too many times can defeat the purpose of typescript
//favoriteActivities = ['Sports', 1];
favoriteActivities = ['Sports'];

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase()); // can use methods for strings
    //console.log(hobby.map()); map works on arrays not strings

}