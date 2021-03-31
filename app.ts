/**
 * can use type alias/custom type, can be cumbersome to always use union
 * 
 * 
 */
//type Combinable = number;
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number'
        || resultConversion === 'as-number') {
        result = (+input1) + (+input2);
    } else {
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

const combinedAges = combine(30, 26, 'as-number');
const combinedName = combine('Max', 'Anna', 'as-text');
const combinedStringAges = combine('30', '26', 'as-number');

console.log(combinedAges);
console.log(combinedName);
console.log(combinedStringAges);