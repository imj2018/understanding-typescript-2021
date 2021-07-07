type AddFunctionAsCustomType = (a: number, b: number) => number;
interface AddFunctionAsInterface {
    // like an anonymous function
    (a: number, b: number): number;
}


let addAsWhatever: AddFunctionAsInterface;

addAsWhatever= (a: number, b: number) => {
    return a + b;
};

interface Named {
    readonly name?: string;
    outPutName?: string;
}

//type Greetable = { 
// if we know that Greetable also needs a name property
// classes can either implement Named or Greetable which forces using both
// interface can inherit/extend from multiple classes
interface Greetable extends Named, Example { 
    greet(phrase: string) :string;

}

interface Example {
    //
}

// class Person implements Greetable, Named {
class Person implements Greetable {
    name?: string;
    outPutName = "whatever";
    age = 30;

    // can also have optional parameters for constructor or 
    // set a default value name = "whatever", or any methods
    constructor(name?: string) {
        if (name) {
            this.name = name;
        }
    }
    
    greet(phrase: string) {
        if (this.name) {
            return "Hello my cat " + phrase;
        }
        else {
            throw new Error("No name found");
        }
        
    }

}

let user: Greetable; 

//user = new Person('george');
user = new Person('george')
//user1.name = "won't work"

console.log(user.greet('george'));
console.log(user);