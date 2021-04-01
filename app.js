function add(n1, n2) {
    return n1 + n2;
}
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
function addAndHandle(n1, n2, cb) {
    // call back functions are strict in typescript
    var result = n1 + n2;
    cb(result);
}
// addAndHandle(10, 20, () => { }); // pass an anonymous function for the callback
addAndHandle(10, 20, function (result) {
    console.log(result);
    //return result;
});
