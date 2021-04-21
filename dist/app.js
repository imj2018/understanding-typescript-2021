"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    //describe()
    //describe(this) {
    describe() {
        //console.log('Department: ' + name); // name is referring to a global name property
        console.log('Department: ' + this.name); // "this" refers to the concrete instance when created. this. will access all properties and methods
    }
}
const accounting = new Department('Accounting');
accounting.describe();
//console.log(accounting);
//const accountingCopy = { describe: accounting.describe };  // the object created is not based on the Departments class/any specific class
// this is pointing at the describe function of accounting object, so the function itself is passed not the executing so no value is passed
const accountingCopy = { name: 'DUMMY', describe: accounting.describe }; // because a name property was added it will now point to a new object
accountingCopy.describe();
//# sourceMappingURL=app.js.map