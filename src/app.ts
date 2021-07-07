//type Person = {
interface Greetable {
    
    // C# interfaces can't have fields/properties
    // "inteface has no implementation details at all, abstract can have a mixture of override parts,
    // and concrete implementation parts"
    name: string;
    greet(phrase: string): string;
}

interface AnotherInterface {
    //
}


class Person implements Greetable, AnotherInterface {

    name: string;
    age = 30;

    constructor(name: string) {
        this.name = name;
    }
    
    greet(phrase: string): string {
        return "Hello my cat" + phrase;
    }

}

let user1: Greetable; 
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


let stuff: string[] = [];
let thing = { 
    name : '',
    age : 10000000,
    location : '',
    shape : 'rectangular prism',
    inStuff: stuff[0] 
}