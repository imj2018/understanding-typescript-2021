interface Person { // not a blueprint but as a custom type
    //name: string = 'Max'; // no concrete values
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;

user1 = { // an object
    name: 'Max', // add the concrete value, seperate by , 
    age: 1,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
};

user1.greet('Hi there I am');