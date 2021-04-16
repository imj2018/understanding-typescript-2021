


// function add(a: number, b: number) {
//     //var result;
//     let result;
//     result = a + b;
//     return result;
// }
//const add = function 
//const add = () => { }; 
// const add = (a: number, b: number) => { // instead of function keyword
//     return a + b;
// };
const add = (a: number, b: number) => a + b;

//const printOutput = (output: number | string) => console.log(output);
//const printOutput = output => console.log(output); // will work in js for just one argument
const printOutput: (a: string | number) => void = output => console.log(output);// will work in typescript if as a function type (type assigned to function)

const button = document.querySelector('button')!;

// if (button) {
button.addEventListener('click', event => console.log(event)) // if not parameters () => {...}, typescript can infer it's an event object
// }
//button.addEventListener('click', function (event) { console.log(event) }) // hmmm....


printOutput(add(5, 2));
