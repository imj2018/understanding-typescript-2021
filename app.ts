
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') { // !== returns a true or false
    //     throw new Error("incorrect input");
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result)
    } else {
        return n1 + n2;
    }
}

/***
 * check types and yell if used incorrectly
 * 
 */

//const number1 = 5; // type inference, typescript will try to identify
//let number1 = 5; // as variable it detects it's a number not 5
//let number1: number = 5; // redundant as type is infered
let number1: number; // if not initalized best to assign type, if not any can be assigned i.e '5'
number1 = 5;

const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = add(number1, number2, printResult, resultPhrase);


