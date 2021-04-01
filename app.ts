function add(n1: number, n2: number): number { // can infer the return type of a function
    // return n1.toString() + n2.toString();
    return n1 + n2;
}

//function printResult(num: number): void { // js does not have void, typescript does. 
function printResult(num: number): void {
    console.log('Result: ' + num);
    //return; // undefined works but void should be used, return assumes no value is returned
    return; // can do this for void
}

console.log(printResult(add(5, 12))); // returns undefined (not void), js confusingly has as value undefined e.g can't find property on an object that is non existant

let someValue: undefined; // undefined is a type in typescript, unknown use?

