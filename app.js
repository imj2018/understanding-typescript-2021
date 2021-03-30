// const person: { name: string; age: number; }
//     = {}
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'] // typscript inferred a string array
};
var favoriteActivities;
//let favoriteActivities: any[]; // using any too many times can defeat the purpose of typescript
//favoriteActivities = ['Sports', 1];
favoriteActivities = ['Sports'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase()); // can use methods for strings
    //console.log(hobby.map()); map works on arrays not strings
}
