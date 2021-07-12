
const names: Array<string> = ['e,l,l,e', 'fanning'];
//const names: any[] = [];
//const names: Array<string | number> = [];

const elly = names[0].split(',');
console.log(elly);

// Promise<unknown>
// const promise = new Promise((resolve, reject) => {
// const promise: Promise<string> = new Promise(
// const promise: Promise<any> = new Promise(
const promise: Promise<number> = new Promise(

    (resolve, reject) => {
    setTimeout(() =>  {
        resolve('This is done!'); 
    }, 2000);
    
});

promise.then(data => {
    data.split(' ');
})