"use strict";
class Person {
    //outputName = '...';
    constructor(n) {
        this.age = 30;
        //constructor(n: string = ' ')
        //this.name = n; // if none optional should be initialized
        if (n) { // if n is set
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi');
        }
    }
}
let user1;
user1 = new Person('');
user1.greet('Hi there - I am');
console.log(user1);
//# sourceMappingURL=interfaces.js.map