function combine(input1: number | string, input2: number | string) { // typescripts knows there is a union (number | string) but cannot know if the + operator can be used
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') { // a js, or runtime check is sometimes needed with union types
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26);
const combinedName = combine('Max', 'Anna');
console.log(combinedAges);
console.log(combinedName);