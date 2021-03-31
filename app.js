function combine(input1, input2, 
//resultConversion: string // conversion from number to string vice versa
resultConversion // union can be used with literal types (could use enum), won't be able to pass any other type to resultConversion
) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number'
        || resultConversion === 'as-number') {
        result = (+input1) + (+input2);
    }
    else {
        result = input1.toString() + input2.toString();
    }
    //console.log(result);
    return result;
    /**
     *  if as-number passed convert to number else string
     *
     *
     */
    // if (resultConversion === 'as-number') {
    //     return +result;
    //     //return parseFloat(result); // will alsp parse to number
    // } else {
    //     return result.toString();
    // }
}
var combinedAges = combine(30, 26, 'as-number');
var combinedName = combine('Max', 'Anna', 'as-text');
var combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedAges);
console.log(combinedName);
console.log(combinedStringAges);
