
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') { // !== returns a true or false
    //     throw new Error("incorrect input");
    // }
    const result = n1 + n2;
    if (showResult) {
        //console.log(phrase + n1 + n2); // sometimes does not return value but output,
        // phrase if not handled will convert all to string introducing the old bug 
        // Result is: 52.8
        console.log(phrase + result)
    } else {
        return n1 + n2;
    }
}

const number1 = 5; // 5.0 js and typscript, all numbers are float 
const number2 = 2.8;
const printResult = true; // js let is variable
const resultPhrase = 'Result is: ';

const result = add(number1, number2, printResult, resultPhrase);