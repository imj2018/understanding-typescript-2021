function add(n1, n2, showResult, phrase) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') { // !== returns a true or false
    //     throw new Error("incorrect input");
    // }
    var result = n1 + n2;
    if (showResult) {
        //console.log(phrase + n1 + n2); // sometimes does not return value but output,
        // phrase if not handled will convert all to string introducing the old bug 
        // Result is: 52.8
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5; // 5.0 js and typscript, all numbers are float 
var number2 = 2.8;
var printResult = true; // js let is variable
var resultPhrase = 'Result is: ';
var result = add(number1, number2, printResult, resultPhrase);
