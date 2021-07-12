
// const names: Array<string> = ['e,l,l,e', 'fanning'];
// //const names: any[] = [];
// //const names: Array<string | number> = [];

// const elly = names[0].split(',');
// console.log(elly);

// // Promise<unknown>
// // const promise = new Promise((resolve, reject) => {
// // const promise: Promise<string> = new Promise(
// // const promise: Promise<any> = new Promise(
// const promise: Promise<number> = new Promise(

//     (resolve, reject) => {
//     setTimeout(() =>  {
//         resolve('This is done!'); 
//     }, 2000);

// });

// promise.then(data => {
//     data.split(' ');
// })

// return intersected data
// we don't care about the type, it's just the most likely objA is 
// different to objB
function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

//const mergedObj = merge( 
// object 1
//{name: 'Max'}, 
// object 2
// {age: 30} ) as {name: string, age: number};


const mergedObj = merge(
    { name: 'Max', hobbies: ['Sports', 'tree'] },
    { age: 30 });

// specific but typescript already infers the types
const mergedObj2 = merge<
{name:string, hobbies: string[]},
{age: number, terminal: string}>(
    { name: 'Max', hobbies: ['Sports', 'plant'] },
    { age: 30, terminal: 'yes' }
);

console.log(mergedObj.age);
console.log(mergedObj2.hobbies[1]);

