function add(n1: number, n2: number): number {
    return n1 + n2;
}

let combineValues: (a: number, b: number) => number;

combineValues = add;
console.log(combineValues(8, 8));


function addAndHandle(n1: number, n2: number, cb: (num: number) => void) { // the callback function will not return anything but takes a number, anything returned will not be used
    // call back functions are strict in typescript
    const result = n1 + n2;
    cb(result);
}

// addAndHandle(10, 20, () => { }); // pass an anonymous function for the callback
addAndHandle(10, 20, (result) => { // passed the call back, typescript knows the function passed is a number
    console.log(result);
    //return result;
});
