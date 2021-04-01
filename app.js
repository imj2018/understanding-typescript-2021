function add(n1, n2) {
    // return n1.toString() + n2.toString();
    return n1 + n2;
}
//function printResult(num: number): void { // js does not have void, typescript does. 
function printResult(num) {
    console.log('Result: ' + num);
    //return; // undefined works but void should be used, return assumes no value is returned
    return; // can do this for void
}
console.log(printResult(add(5, 12))); // returns undefined (not void), js confusingly has as value undefined e.g can't find property on an object that is non existant
var someValue; // undefined is a type in typescript, unknown use?
