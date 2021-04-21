"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //name: string = 'DEFAULT';
        // public name: string; // public default
        this.employees = []; // only accessible inside class/object
        // this.id = id;
        // this.name = n;
    }
    //describe()
    //describe(this) {
    describe() {
        //console.log('Department: ' + name); // name is referring to a global name property
        //console.log('Department: ' + this.name); // "this" refers to the concrete instance when created. this. will access all properties and methods
        console.log(`Department ${this.id}: ${this.name}`);
    }
    addEmployee(employee) {
        // validation etc.
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees);
        console.log(this.employees.length);
    }
}
const accounting = new Department('d1', 'Accounting');
accounting.addEmployee('Max');
accounting.addEmployee('Menu');
//accounting.employees[2] = 'Joe'; // should not be able to directly assign, colleuge may assign this way/addEmployeee may need validation etc.
accounting.describe();
accounting.printEmployeeInformation();
//console.log(accounting);
//const accountingCopy = { describe: accounting.describe };  // the object created is not based on the Departments class/any specific class
// this is pointing at the describe function of accounting object, so the function itself is passed not the executing so no value is passed
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe }; // because a name property was added it will now point to a new object
// accountingCopy.describe();
//# sourceMappingURL=app.js.map