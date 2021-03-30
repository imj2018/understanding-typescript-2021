// const person: {
//  name: string;
//  age: number; 
// } = {
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'] // tuple first element numeric id or second string id i.e description for this context
};
person.role.push('admin'); // add admin to end off array, typescript does not know only 2 elements are needed
// push cannot be caught by typescript
//person.role[1] = 10; // the second element (index[1]) to a number 
person.role = [0, 'admin'];
var favoriteActivities;
favoriteActivities = ['Sports'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
