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
// better to use a primitive types instead as a specialized DataStorage
// is likely needed  
class DataStorage {
    constructor() {
        //class DataStorage<T> {
        //class DataStorage {
        // this says stings numbers and booleans can be mixed into the array
        //private data: (string | number | boolean)[]= [];
        // this says either but, for the following methods it is accepting any 
        // of the types/ free to use any which should not be allowed,
        // for generics you only choose once i.e DataStorage<T extends string | number | boolean>
        // generics types lock in a type, union is for flexibility/different type for every 
        // method call 
        //private data: (string[] | number[] | boolean[])[]= [];
        this.data = [];
    }
    // addItem(item: string | number | boolean) {
    addItem(item) {
        this.data.push(item);
    }
    // can also use generic methods
    //removeItem<U>(item: T) {
    removeItem(item) {
        //removeItem(item: string | number | boolean) {
        // how to remove an item from an array
        // a check if no item is found to just return
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); // -1
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
//textStorage.addItem('Max');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
// textStorage.addItem(10);
const textStorageNumbers = new DataStorage();
textStorageNumbers.addItem(10);
textStorageNumbers.addItem(1.4);
textStorageNumbers.removeItem(10);
console.log(textStorageNumbers.getItems());
const textStorageBoth = new DataStorage();
textStorageBoth.addItem('John');
textStorageBoth.addItem(4);
textStorageBoth.removeItem(4);
console.log(textStorageBoth.getItems());
// function createCourseGoal(title:string, description:string, date: Date) {
//     return {
//         title: title, 
//         description: description, 
//         completeUntil: date
//     }
// }
function createCourseGoal(title, description, date) {
    // Partial changes all properties to optional 
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
// will not be able to call things on array
const names = ['Max', 'Joe'];
// name.push('Manu');
// name.pop();
//# sourceMappingURL=app.js.map