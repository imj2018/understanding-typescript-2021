//interface Person { // not a blueprint but as a custom type
//type Person = { // a type is very similar and can use union types, but an interface is more clear and seen alot more to declare an object will be used
//interface Person {

//type Greetable = {
interface Greetable { // everyclass that adheres to this interface, they are forced to use the properties and methods
    // unlike abstract which can mix between concrete and abstract
    readonly name: string; // readonly modifier can be used (can only be set once when initialized), public or private cannot be used on an interface

    greet(phrase: string): void;
}

class Person implements Greetable { // adheres to Greetable, unlike inheritance multiple interfaces can be used
    name: string;
    age = 30;
    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

//let user1: Person;
let user1: Greetable; // the interface can be used as a type stored in user1 as Person is based on Greetable

user1 = new Person('Max');
//user1.name = 'joe';

user1.greet('Hi there - I am');
console.log(user1)