// share and ensure the implementing class uses the functionality
interface Greetable { 
    
    // C# interfaces can't have fields/properties
    // "inteface has no implementation details at all, abstract can have a mixture of override parts,
    // and concrete implementation parts"
    name: string;
    greet(phrase: string): string;
}

class Person implements Greetable {

    name: string;
    age = 30;

    constructor(name: string) {
        this.name = name;
    }
    
    greet(phrase: string): string {
        return "Hello my cat" + phrase;
    }

}

// set to type Greetable, it doesn't matter what is in user it just 
// has to implement a greet method. we don't need to know anything about the object
// or class i.e it doesn't matter if Person has anything else so long as it 
// has a greet method
let user: Greetable; 

user = new Person('John');

console.log(user.greet('my cat '));
console.log(user);