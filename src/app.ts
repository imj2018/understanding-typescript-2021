interface Named {
    readonly name: string;
}

interface Greetable extends Named { // a way of combining or splitting interfaces e.g maybe an objects needs Named and no greet method
    // another interface could be added e.g extends Named, AnotherInterface
    greet(phrase: string): void;
}

class Person implements Greetable, Named {
    //class Person implements Greetable, Named { 
    name: string; // remove name will cause an error as name is needed
    age = 30;
    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}


let user1: Greetable;
user1 = new Person('Max');
user1.greet('Hi there - I am');
console.log(user1)