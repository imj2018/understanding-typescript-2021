"use strict";
let add; // a new function of type Addfn
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user1;
user1 = new Person('Max');
user1.greet('Hi there - I am');
console.log(user1);
//# sourceMappingURL=app.js.map