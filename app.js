var user1 = { number: 'Max', age: '30' };
// function greet(user: { name: string; age: number }) { // not needed
//     console.log('Hi, I am ' + user.name);
// }
// function isOlder(user: { name: string; age: number }, checkAge: number) {
//     return checkAge > user.age;
// }
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number'
        || resultConversion === 'as-number') {
        result = (+input1) + (+input2);
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26, 'as-number');
var combinedName = combine('Max', 'Anna', 'as-text');
var combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedAges);
console.log(combinedName);
console.log(combinedStringAges);
