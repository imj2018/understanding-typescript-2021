const userName = 'Max';
// userName = 'Maximilian';

let age = 30;
age = 29;

//var result; // var (for js) has global and function scope

function add(a: number, b: number) {
    //var result;
    let result;
    result = a + b;
    return result;
}

console.log(result);

if (age > 20) {
    //var isOld = true; // this is work in js, but not in typescript
    let isOld = true; // in typescript there is block scope i.e only available in the block defined or lower blockes i.e { let ... }
    //console.log(isOld);
}

console.log(isOld);



