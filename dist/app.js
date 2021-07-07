"use strict";
class Person {
    constructor(name) {
        this.age = 30;
        this.name = name;
    }
    greet(phrase) {
        return "Hello my cat" + phrase;
    }
}
let user1;
user1 = new Person('Max');
// user1 = {
//     name: 'george',
//     age: 4, 
//     greet(phrase:string): void {
//         console.log('Hi ' + phrase + this.name);
//     }
// };
console.log(user1.greet('my cat '));
console.log(user1);
let stuff = [];
let thing = {
    name: '',
    age: 10000000,
    location: '',
    shape: 'rectangular prism',
    inStuff: stuff[0]
};
//# sourceMappingURL=app.js.map