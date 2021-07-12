"use strict";
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
// constraints for T and U, an object must be passed
// function merge<T extends object, U extends object>(objA: T, objB: U) {
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
//const mergedObj = merge( 
// object 1
//{name: 'Max'}, 
// object 2
// {age: 30} ) as {name: string, age: number};
const mergedObj = merge(
// { name: 'Max', hobbies: ['Sports', 'tree']}, 30 );
//{ name: 'Max', hobbies: ['Sports', 'tree']}, { age: 30});
{ name: 'Max', hobbies: ['Sports', 'tree'] }, 30);
// specific but typescript already infers the types
// const mergedObj2 = merge<
// {name:string, hobbies: string[]},
// {age: number, terminal: string}>(
//     { name: 'Max', hobbies: ['Sports', 'plant'] },
//     { age: 30, terminal: 'yes' }
// );
console.log(mergedObj);
// must implement length property, just to specific for the return type
// return a generic object and a string 
function countAndDescribe(element) {
    let description = 'Got no value.';
    if (element.length === 1) {
        description = 'Got 1 element.';
    }
    else if (element.length > 1) {
        description = 'Got ' + element.length + ' elements.';
    }
    return [element, description];
}
// console.log(countAndDescribe('Hi there!'));
// console.log(countAndDescribe(['Sports', 'Cooking']));
console.log(countAndDescribe([]));
// an error is thrown, it is uncertain whether the object returned will 
// be a key
// we want U to be a property of T i.e U extends keyof T
// first parameter is any kind of object T and second parameter
// is any kind of key in that object U i.e obj:T, key: U
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
// a name key/propery is required
// won't work, must denote the name property
// extractAndConvert( { name:'Max' }, 'age');
extractAndConvert({ name: 'Max' }, 'name');
//# sourceMappingURL=app.js.map