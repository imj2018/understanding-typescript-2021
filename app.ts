//const person: object = { // hover over, this is the object type inferred by typescript
// which gives a key and type pair. if type object, typescript knows nothin about object
//const person: {} = { // {} typescript specialized notation of object types to provide information
// const person: { name: string, age: number } = { // pass key and type pair
//     name: 'Maximilian',
//     age: 30
// };
const person = { // best to let typescript infer
    name: 'Maximilian',
    age: 30
}

console.log(person.name);


