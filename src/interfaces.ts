// type AddFn = () => number; // type is a function with a function definition that returns a number
//type AddFn = (a: number, b: number) => number;
interface AddFn { // an interface can be used as an alternative to custom types, function types are just objects therefore function types can be created with interfaces
    (a: number, b: number): number; // there is an anonymous function in Addfn
}

// let add: AddFn; // a new function of type Addfn

// add = (n1: number, n2: number) => {
//     return n1 + n2;
// };

interface Named {
    readonly name?: string;
    outputName?: string; // optional property
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    age = 30;
    //outputName = '...';
    constructor(n?: string) { // optional parameter, either set a default value or ? for undefined 
        //constructor(n: string = ' ')
        //this.name = n; // if none optional should be initialized
        if (n) { // if n is set
            this.name = n;
        }
    }

    greet(phrase: string) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        } else {
            console.log('Hi');
        }

    }
}


let user1: Greetable;
user1 = new Person('');
user1.greet('Hi there - I am');
console.log(user1)