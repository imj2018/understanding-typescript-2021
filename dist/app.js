"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //name: string = 'DEFAULT';
        // public name: string; // public default
        // private employees: string[] = []; // only accessible inside class/object
        this.employees = []; // can now access from child classes
        // shortcut for initialization, a property is created and the value stored
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
        //this.id = 'd2';
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees);
        console.log(this.employees.length);
    }
}
class ITDepartment extends Department {
    //public admins[];
    constructor(id, admins) {
        super(id, 'IT'); // base class constructor
        this.admins = admins;
        this.admins = admins; // has to be called after super
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (!this.lastReport) {
            throw new Error('No report found');
        }
        return this.lastReport;
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass a valid value');
        }
        this.addReport('value'); // calling the addReport from this class
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name); // if private cannot push/add to inherited classes
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
// const accounting = new Department('d1', 'Accounting');
//const accounting = new ITDepartment('d1', ['Max']);
const it = new ITDepartment('d1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Bob');
//accounting.employees[2] = 'Joe'; // should not be able to directly assign, colleuge may assign this way/addEmployeee may need validation etc.
it.describe();
it.printEmployeeInformation();
console.log(it);
//console.log(accounting);
//const accountingCopy = { describe: accounting.describe };  // the object created is not based on the Departments class/any specific class
// this is pointing at the describe function of accounting object, so the function itself is passed not the executing so no value is passed
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe }; // because a name property was added it will now point to a new object
// accountingCopy.describe();
const accounting = new AccountingDepartment('d2', []);
accounting.mostRecentReport = 'You end report'; // set like a propert also using =
console.log(accounting.mostRecentReport); // is accessed like a property, behind the scenes is a function 
accounting.addReport('Something went wrong...');
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printReports();
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map