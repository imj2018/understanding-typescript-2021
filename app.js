function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
    return;
}
console.log(printResult(add(5, 12)));
//let combineValue: Function; // issue is typescript sees this as any, must set the type to Function
//let combineValues: () => number; // no curly braces, not an arrow function but a function type, right side => is the return type to store. combineValues accepts any function i.e empty () then return a number
var combineValues; // store a function that takes two numbers and stores a number, no need to match the parameter names just the type
combineValues = add;
//combineValue = 5;
//combineValues = printResult;
console.log(combineValues(8, 8)); // js can store a pointer in a variable, that variable can then be executed as a function
