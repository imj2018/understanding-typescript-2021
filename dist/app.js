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
// set to type Greetable, it doesn't matter what is in user it just 
// has to implement a greet method. we don't need to know anything about the object
// or class i.e it doesn't matter if Person has anything else so long as it 
// has a greet method
let user;
user = new Person('John');
console.log(user.greet('my cat '));
console.log(user);
//# sourceMappingURL=app.js.map