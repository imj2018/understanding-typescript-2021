"use strict";
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
//let user1: Person;
let user1; // the interface can be used as a type stored in user1 as Person is based on Greetable
user1 = new Person('Max');
user1.greet('Hi there - I am');
console.log(user1);
//# sourceMappingURL=app.js.map