"use strict";
let addAsWhatever;
addAsWhatever = (a, b) => {
    return a + b;
};
// class Person implements Greetable, Named {
class Person {
    // can also have optional parameters for constructor or 
    // set a default value name = "whatever", or any methods
    constructor(name) {
        this.outPutName = "whatever";
        this.age = 30;
        if (name) {
            this.name = name;
        }
    }
    greet(phrase) {
        if (this.name) {
            return "Hello my cat " + phrase;
        }
        else {
            throw new Error("No name found");
        }
    }
}
let user;
//user = new Person('george');
user = new Person('george');
//user1.name = "won't work"
console.log(user.greet('george'));
console.log(user);
//# sourceMappingURL=72-81-revision.js.map